import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLessonById } from '../../data/courses';
import { ProgressContext } from '../../App';
import { progressService } from '../../services/progressService';
import { checkAchievements } from '../../services/achievementService';
import { ProblemRenderer } from './ProblemRenderer';
import { Explanation } from './Explanation';
import { ArrowLeft, Trophy } from 'lucide-react';
import './LessonViewer.css';

export function LessonViewer() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { progress, refreshProgress } = useContext(ProgressContext);

  const lessonData = lessonId ? getLessonById(lessonId) : undefined;
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | number | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [lastAnswer, setLastAnswer] = useState<string | number | null>(null);
  const [finalCorrectCount, setFinalCorrectCount] = useState(0);

  useEffect(() => {
    if (lessonData) {
      setAnswers(new Array(lessonData.lesson.problems.length).fill(null));
      // Reset counter when starting a new lesson
      setFinalCorrectCount(0);
      setCurrentProblemIndex(0);
      setShowExplanation(false);
      setLessonComplete(false);
      setLastAnswer(null);
    }
  }, [lessonId]); // Use lessonId instead of lessonData to prevent infinite loop

  if (!lessonData) {
    return <div className="lesson-viewer">Lesson not found</div>;
  }

  const { course, lesson } = lessonData;
  const problems = lesson.problems;
  const currentProblem = problems[currentProblemIndex];
  const isLastProblem = currentProblemIndex === problems.length - 1;

  const handleAnswer = (answer: string | number) => {
    const newAnswers = [...answers];
    newAnswers[currentProblemIndex] = answer;
    setAnswers(newAnswers);
    setLastAnswer(answer);  // Store answer immediately for checking

    // Check if this answer is correct and update running count
    const isThisCorrect =
      String(answer).trim().toLowerCase() ===
      String(currentProblem.correctAnswer).trim().toLowerCase();

    if (isThisCorrect) {
      setFinalCorrectCount(prev => prev + 1);
    }

    setShowExplanation(true);
  };

  const handleNext = async () => {
    setShowExplanation(false);
    setLastAnswer(null);  // Reset for next problem

    if (isLastProblem) {
      // Complete the lesson - use finalCorrectCount which was tracked as answers were submitted
      await progressService.completeLesson(lesson.id, finalCorrectCount, problems.length);

      // Check for new achievements
      if (progress) {
        await checkAchievements(progress);
      }

      await refreshProgress();

      // Calculate XP earned
      const accuracy = finalCorrectCount / problems.length;
      const baseXP = 50;
      const earnedXP = accuracy === 1 ? baseXP + 10 : Math.floor(baseXP * accuracy);
      setXpEarned(earnedXP);
      setLessonComplete(true);
    } else {
      setCurrentProblemIndex(currentProblemIndex + 1);
    }
  };

  const handleBackToCourse = () => {
    navigate(`/courses/${course.id}`);
  };

  if (lessonComplete) {
    return (
      <div className="lesson-complete">
        <div className="completion-card">
          <Trophy size={64} className="trophy-icon" />
          <h1>Lesson Complete!</h1>
          <p className="lesson-title">{lesson.title}</p>
          <div className="completion-stats">
            <div className="stat">
              <span className="stat-value">{xpEarned}</span>
              <span className="stat-label">XP Earned</span>
            </div>
            <div className="stat">
              <span className="stat-value">
                {finalCorrectCount}/{problems.length}
              </span>
              <span className="stat-label">Correct</span>
            </div>
          </div>
          <button type="button" className="primary-button" onClick={() => handleBackToCourse()}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  // Calculate isCorrect using lastAnswer (which is set immediately)
  const calculateIsCorrect = () => {
    const correctAnswer = currentProblem.correctAnswer;

    if (lastAnswer === null) return false;

    const userStr = String(lastAnswer).trim().toLowerCase();
    const correctStr = String(correctAnswer).trim().toLowerCase();

    return userStr === correctStr;
  };

  return (
    <div className="lesson-viewer">
      <header className="lesson-header">
        <button className="back-button" onClick={handleBackToCourse}>
          <ArrowLeft size={24} />
        </button>
        <div className="lesson-progress-info">
          <h2>{lesson.title}</h2>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentProblemIndex + 1) / problems.length) * 100}%`,
              }}
            />
          </div>
          <span className="progress-text">
            {currentProblemIndex + 1} / {problems.length}
          </span>
        </div>
      </header>

      <div className="problem-container">
        <ProblemRenderer
          problem={currentProblem}
          onAnswer={handleAnswer}
          disabled={showExplanation}
          userAnswer={answers[currentProblemIndex]}
        />
      </div>

      {showExplanation && (
        <Explanation
          explanation={currentProblem.explanation}
          isCorrect={calculateIsCorrect()}
          onNext={handleNext}
          isLastProblem={isLastProblem}
        />
      )}
    </div>
  );
}
