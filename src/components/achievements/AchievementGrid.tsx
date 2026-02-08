import { useContext } from 'react';
import { ProgressContext } from '../../App';
import { ACHIEVEMENTS } from '../../models/Achievement';
import { AchievementCard } from './AchievementCard';
import './AchievementGrid.css';

export function AchievementGrid() {
  const { progress } = useContext(ProgressContext);

  if (!progress) {
    return <div>Loading...</div>;
  }

  const unlockedAchievements = ACHIEVEMENTS.filter((achievement) =>
    progress.unlockedAchievements.includes(achievement.id)
  );

  const lockedAchievements = ACHIEVEMENTS.filter(
    (achievement) => !progress.unlockedAchievements.includes(achievement.id)
  );

  return (
    <div className="achievement-grid-container">
      <div className="achievement-summary">
        <p>
          {unlockedAchievements.length} of {ACHIEVEMENTS.length} achievements unlocked
        </p>
      </div>

      {unlockedAchievements.length > 0 && (
        <div className="achievement-section">
          <h2>Unlocked</h2>
          <div className="achievement-grid">
            {unlockedAchievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                unlocked={true}
              />
            ))}
          </div>
        </div>
      )}

      {lockedAchievements.length > 0 && (
        <div className="achievement-section">
          <h2>Locked</h2>
          <div className="achievement-grid">
            {lockedAchievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                unlocked={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
