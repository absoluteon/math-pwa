import { TrendingUp, BookOpen, Zap } from 'lucide-react';
import './StatsCard.css';

interface StatsCardProps {
  totalXP: number;
  level: number;
  lessonsCompleted: number;
}

export function StatsCard({ totalXP, level, lessonsCompleted }: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="card-header">
        <TrendingUp size={24} />
        <h3>Your Stats</h3>
      </div>
      <div className="stats-grid">
        <div className="stat-item">
          <Zap size={20} className="stat-icon" />
          <div className="stat-content">
            <span className="stat-value">{totalXP}</span>
            <span className="stat-label">Total XP</span>
          </div>
        </div>
        <div className="stat-item">
          <TrendingUp size={20} className="stat-icon" />
          <div className="stat-content">
            <span className="stat-value">{level}</span>
            <span className="stat-label">Level</span>
          </div>
        </div>
        <div className="stat-item">
          <BookOpen size={20} className="stat-icon" />
          <div className="stat-content">
            <span className="stat-value">{lessonsCompleted}</span>
            <span className="stat-label">Lessons</span>
          </div>
        </div>
      </div>
    </div>
  );
}
