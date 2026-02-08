import { createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUserProgress } from './hooks/useUserProgress';
import { UserProgress } from './models/UserProgress';
import { TabBar } from './components/navigation/TabBar';
import { CoursesView } from './views/CoursesView';
import { ProgressView } from './views/ProgressView';
import { AchievementsView } from './views/AchievementsView';
import { CourseDetail } from './components/courses/CourseDetail';
import { LessonViewer } from './components/lesson/LessonViewer';
import './App.css';

export const ProgressContext = createContext<{
  progress: UserProgress | null;
  updateProgress: (updates: Partial<UserProgress>) => Promise<void>;
  refreshProgress: () => Promise<void>;
}>({
  progress: null,
  updateProgress: async () => {},
  refreshProgress: async () => {},
});

function App() {
  const { progress, loading, error, updateProgress, refreshProgress } = useUserProgress();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Math Academy...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, refreshProgress }}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<CoursesView />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/lesson/:lessonId" element={<LessonViewer />} />
            <Route path="/progress" element={<ProgressView />} />
            <Route path="/achievements" element={<AchievementsView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <TabBar />
        </div>
      </BrowserRouter>
    </ProgressContext.Provider>
  );
}

export default App;
