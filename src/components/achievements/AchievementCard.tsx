import { Achievement } from '../../models/Achievement';
import { Lock } from 'lucide-react';
import './AchievementCard.css';

interface AchievementCardProps {
  achievement: Achievement;
  unlocked: boolean;
}

export function AchievementCard({ achievement, unlocked }: AchievementCardProps) {
  return (
    <div className={`achievement-card ${unlocked ? 'unlocked' : 'locked'}`}>
      <div className="achievement-icon">
        {unlocked ? (
          <span className="icon-emoji">{achievement.icon}</span>
        ) : (
          <Lock size={32} />
        )}
      </div>
      <div className="achievement-info">
        <h3>{unlocked ? achievement.name : '???'}</h3>
        <p className="achievement-description">
          {unlocked ? achievement.description : 'Complete challenges to unlock'}
        </p>
        {unlocked && (
          <span className="achievement-xp">+{achievement.xpBonus} XP</span>
        )}
      </div>
    </div>
  );
}
