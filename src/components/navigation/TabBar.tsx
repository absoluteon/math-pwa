import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, TrendingUp, Award } from 'lucide-react';
import './TabBar.css';

export function TabBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Don't show tab bar on lesson viewer
  if (location.pathname.startsWith('/lesson/')) {
    return null;
  }

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="tab-bar">
      <button
        className={`tab-button ${isActive('/') ? 'active' : ''}`}
        onClick={() => navigate('/')}
      >
        <BookOpen size={24} />
        <span>Courses</span>
      </button>
      <button
        className={`tab-button ${isActive('/progress') ? 'active' : ''}`}
        onClick={() => navigate('/progress')}
      >
        <TrendingUp size={24} />
        <span>Progress</span>
      </button>
      <button
        className={`tab-button ${isActive('/achievements') ? 'active' : ''}`}
        onClick={() => navigate('/achievements')}
      >
        <Award size={24} />
        <span>Achievements</span>
      </button>
    </nav>
  );
}
