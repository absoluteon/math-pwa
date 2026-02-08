import { useContext } from 'react';
import { ProgressContext } from '../../App';
import { StreakCard } from './StreakCard';
import { StatsCard } from './StatsCard';
import { ALL_COURSES } from '../../data/courses';
import { getLevelFromXP } from '../../utils/xpCalculator';
import './ProgressDashboard.css';

export function ProgressDashboard() {
  const { progress } = useContext(ProgressContext);

  if (!progress) {
    return <div>Loading...</div>;
  }

  const level = getLevelFromXP(progress.totalXP);

  // Calculate course progress
  const courseProgress = ALL_COURSES.map((course) => {
    const completedLessons = course.lessons.filter((lesson) =>
      progress.completedLessons.includes(lesson.id)
    ).length;
    const totalLessons = course.lessons.length;
    const percentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    return {
      course,
      completedLessons,
      totalLessons,
      percentage,
    };
  });

  return (
    <div className="progress-dashboard">
      <div className="cards-grid">
        <StreakCard
          currentStreak={progress.currentStreak}
          longestStreak={progress.longestStreak}
        />
        <StatsCard
          totalXP={progress.totalXP}
          level={level}
          lessonsCompleted={progress.completedLessons.length}
        />
      </div>

      <div className="course-progress-section">
        <h2>Course Progress</h2>
        <div className="course-progress-list">
          {courseProgress.map(({ course, completedLessons, totalLessons, percentage }) => (
            <div key={course.id} className="course-progress-item">
              <div className="course-progress-header">
                <span className="course-icon">{course.icon}</span>
                <div className="course-progress-info">
                  <h3>{course.name}</h3>
                  <p>
                    {completedLessons}/{totalLessons} lessons completed
                  </p>
                </div>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: course.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
