import { Achievement } from '../../models/Achievement';
import { X } from 'lucide-react';
import './AchievementModal.css';

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  return (
    <div className="achievement-modal-overlay" onClick={onClose}>
      <div className="achievement-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-content">
          <div className="achievement-icon-large">{achievement.icon}</div>
          <h2>Achievement Unlocked!</h2>
          <h3>{achievement.name}</h3>
          <p>{achievement.description}</p>
          <span className="xp-bonus">+{achievement.xpBonus} XP</span>
          <button className="primary-button" onClick={onClose}>
            Awesome!
          </button>
        </div>
      </div>
    </div>
  );
}
