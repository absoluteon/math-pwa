import { useState, useEffect } from 'react';
import { UserProgress } from '../models/UserProgress';
import { progressService } from '../services/progressService';
import { updateStreakOnLogin } from '../services/streakService';

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initializeProgress();
  }, []);

  async function initializeProgress() {
    try {
      setLoading(true);
      await updateStreakOnLogin();
      const data = await progressService.getProgress();
      setProgress(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load progress');
    } finally {
      setLoading(false);
    }
  }

  async function refreshProgress() {
    try {
      const data = await progressService.getProgress();
      setProgress(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh progress');
    }
  }

  async function updateProgress(updates: Partial<UserProgress>) {
    try {
      await progressService.updateProgress(updates);
      await refreshProgress();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update progress');
    }
  }

  return { progress, loading, error, updateProgress, refreshProgress };
}
