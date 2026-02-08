import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById } from '../../data/courses';
import { ProgressContext } from '../../App';
import { ArrowLeft, CheckCircle, Lock, Clock } from 'lucide-react';
import './CourseDetail.css';

export function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { progress } = useContext(ProgressContext);

  const course = courseId ? getCourseById(courseId) : undefined;

  if (!course) {
    return (
      <div className="course-detail">
        <div className="error-message">Course not found</div>
      </div>
    );
  }

  return (
    <div className="course-detail">
      <header className="course-header" style={{ backgroundColor: course.color + '15' }}>
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={24} />
        </button>
        <div className="course-header-content">
          <div className="course-icon-large" style={{ backgroundColor: course.color + '30' }}>
            <span>{course.icon}</span>
          </div>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          <div className="course-meta">
            <span>{course.lessons.length} lessons</span>
            <span>•</span>
            <span>{course.totalXP} XP</span>
          </div>
        </div>
      </header>

      <div className="lessons-container">
        <h2>Lessons</h2>
        <div className="lessons-list">
          {course.lessons.map((lesson, index) => {
            const isCompleted = progress?.completedLessons.includes(lesson.id);
            const isLocked = false; // For MVP, all lessons are unlocked

            return (
              <div
                key={lesson.id}
                className={`lesson-item ${isCompleted ? 'completed' : ''} ${
                  isLocked ? 'locked' : ''
                }`}
                onClick={() => !isLocked && navigate(`/lesson/${lesson.id}`)}
              >
                <div className="lesson-number">{index + 1}</div>
                <div className="lesson-info">
                  <h3>{lesson.title}</h3>
                  <p>{lesson.description}</p>
                  <div className="lesson-meta">
                    <span className="lesson-time">
                      <Clock size={14} />
                      {lesson.estimatedMinutes} min
                    </span>
                    <span className="lesson-xp">{lesson.xpReward} XP</span>
                  </div>
                </div>
                <div className="lesson-status">
                  {isCompleted && <CheckCircle size={24} className="completed-icon" />}
                  {isLocked && <Lock size={24} className="locked-icon" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
