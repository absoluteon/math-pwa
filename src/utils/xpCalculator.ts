import { LessonProgress } from '../models/UserProgress';

export function calculateLessonXP(lessonProgress: LessonProgress): number {
  const baseXP = 50;
  const accuracy = lessonProgress.correctAnswers / lessonProgress.totalProblems;

  if (accuracy === 1.0) {
    return baseXP + 10;
  }

  return Math.floor(baseXP * accuracy);
}

export function getLevelFromXP(totalXP: number): number {
  return Math.floor(Math.sqrt(totalXP / 100));
}

export function getXPForNextLevel(currentLevel: number): number {
  return (currentLevel + 1) ** 2 * 100;
}

export function getProgressToNextLevel(totalXP: number): {
  currentLevel: number;
  xpForCurrentLevel: number;
  xpForNextLevel: number;
  progress: number;
} {
  const currentLevel = getLevelFromXP(totalXP);
  const xpForCurrentLevel = currentLevel ** 2 * 100;
  const xpForNextLevel = getXPForNextLevel(currentLevel);
  const xpInCurrentLevel = totalXP - xpForCurrentLevel;
  const xpNeededForNextLevel = xpForNextLevel - xpForCurrentLevel;
  const progress = xpInCurrentLevel / xpNeededForNextLevel;

  return {
    currentLevel,
    xpForCurrentLevel,
    xpForNextLevel,
    progress,
  };
}
