import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Course } from '../../models/Course';
import { ProgressContext } from '../../App';
import { CheckCircle } from 'lucide-react';
import './CourseCard.css';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const navigate = useNavigate();
  const { progress } = useContext(ProgressContext);

  const completedLessons = course.lessons.filter((lesson) =>
    progress?.completedLessons.includes(lesson.id)
  ).length;

  const totalLessons = course.lessons.length;
  const progressPercent = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <div
      className="course-card"
      style={{ borderLeftColor: course.color }}
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      <div className="course-icon" style={{ backgroundColor: course.color + '20' }}>
        <span>{course.icon}</span>
      </div>
      <div className="course-info">
        <h3>{course.name}</h3>
        <p className="course-description">{course.description}</p>
        <div className="course-stats">
          <span className="lesson-count">
            {completedLessons}/{totalLessons} lessons
          </span>
          {progressPercent === 100 && (
            <CheckCircle size={16} className="completed-icon" />
          )}
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%`, backgroundColor: course.color }}
          />
        </div>
      </div>
    </div>
  );
}
