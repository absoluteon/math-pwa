import { AchievementGrid } from '../components/achievements/AchievementGrid';
import './AchievementsView.css';

export function AchievementsView() {
  return (
    <div className="achievements-view">
      <header className="view-header">
        <h1>Achievements</h1>
      </header>
      <AchievementGrid />
    </div>
  );
}
