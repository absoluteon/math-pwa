import { ProgressDashboard } from '../components/progress/ProgressDashboard';
import './ProgressView.css';

export function ProgressView() {
  return (
    <div className="progress-view">
      <header className="view-header">
        <h1>Your Progress</h1>
      </header>
      <ProgressDashboard />
    </div>
  );
}
