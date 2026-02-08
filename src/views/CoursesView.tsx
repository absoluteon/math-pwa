import { useContext } from 'react';
import { ProgressContext } from '../App';
import { CourseList } from '../components/courses/CourseList';
import { getLevelFromXP } from '../utils/xpCalculator';
import './CoursesView.css';

export function CoursesView() {
  const { progress } = useContext(ProgressContext);

  const level = progress ? getLevelFromXP(progress.totalXP) : 0;

  return (
    <div className="courses-view">
      <header className="view-header">
        <h1>Math Academy</h1>
        <div className="user-stats">
          <span className="xp-badge">{progress?.totalXP || 0} XP</span>
          <span className="level-badge">Level {level}</span>
        </div>
      </header>
      <CourseList />
    </div>
  );
}
