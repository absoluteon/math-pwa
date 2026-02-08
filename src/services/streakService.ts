import { UserProgress } from '../models/UserProgress';
import { progressService } from './progressService';

function daysBetween(date1Str: string, date2Str: string): number {
  const date1 = new Date(date1Str.split('T')[0]);
  const date2 = new Date(date2Str.split('T')[0]);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function calculateStreak(progress: UserProgress): {
  currentStreak: number;
  shouldIncrement: boolean;
} {
  const today = new Date().toISOString().split('T')[0];
  const lastLogin = progress.lastLoginDate.split('T')[0];

  if (lastLogin === today) {
    return { currentStreak: progress.currentStreak, shouldIncrement: false };
  }

  const daysDiff = daysBetween(lastLogin, today);

  if (daysDiff === 1) {
    return { currentStreak: progress.currentStreak + 1, shouldIncrement: true };
  } else if (daysDiff > 1) {
    return { currentStreak: 1, shouldIncrement: true };
  }

  return { currentStreak: progress.currentStreak, shouldIncrement: false };
}

export async function updateStreakOnLogin(): Promise<void> {
  const progress = await progressService.getProgress();
  const { currentStreak, shouldIncrement } = calculateStreak(progress);

  if (shouldIncrement) {
    await progressService.updateStreak(
      currentStreak,
      Math.max(currentStreak, progress.longestStreak)
    );
  }
}
