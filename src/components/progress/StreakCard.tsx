import { Flame } from 'lucide-react';
import './StreakCard.css';

interface StreakCardProps {
  currentStreak: number;
  longestStreak: number;
}

export function StreakCard({ currentStreak, longestStreak }: StreakCardProps) {
  return (
    <div className="streak-card">
      <div className="card-header">
        <Flame size={24} className="streak-icon" />
        <h3>Streak</h3>
      </div>
      <div className="streak-content">
        <div className="current-streak">
          <span className="streak-number">{currentStreak}</span>
          <span className="streak-label">Day{currentStreak !== 1 ? 's' : ''}</span>
        </div>
        {currentStreak > 0 && (
          <p className="streak-message">Keep it up! 🎉</p>
        )}
        {currentStreak === 0 && (
          <p className="streak-message">Start your streak today!</p>
        )}
      </div>
      <div className="card-footer">
        <span className="longest-streak">
          Longest: {longestStreak} day{longestStreak !== 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
}
