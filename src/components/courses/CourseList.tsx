import { ALL_COURSES } from '../../data/courses';
import { CourseCard } from './CourseCard';
import './CourseList.css';

export function CourseList() {
  return (
    <div className="course-list">
      {ALL_COURSES.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
