export interface LessonProgress {
  lessonId: string;
  correctAnswers: number;
  totalProblems: number;
  lastAttemptDate: string;
  completed: boolean;
}

export interface UserProgress {
  userId: string;
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  lastLoginDate: string;
  dailyGoalXP: number;
  completedLessons: string[];
  lessonProgressMap: Record<string, LessonProgress>;
  unlockedAchievements: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UserProgressDB {
  id: string;
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  lastLoginDate: string;
  dailyGoalXP: number;
  completedLessons: string[];
  lessonProgressMap: Record<string, LessonProgress>;
  unlockedAchievements: string[];
  createdAt: string;
  updatedAt: string;
}

export function createDefaultProgress(): UserProgressDB {
  const now = new Date().toISOString();
  return {
    id: 'default',
    totalXP: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastLoginDate: now,
    dailyGoalXP: 100,
    completedLessons: [],
    lessonProgressMap: {},
    unlockedAchievements: [],
    createdAt: now,
    updatedAt: now,
  };
}

export function deserializeProgress(data: UserProgressDB): UserProgress {
  return {
    userId: data.id,
    totalXP: data.totalXP,
    currentStreak: data.currentStreak,
    longestStreak: data.longestStreak,
    lastLoginDate: data.lastLoginDate,
    dailyGoalXP: data.dailyGoalXP,
    completedLessons: data.completedLessons,
    lessonProgressMap: data.lessonProgressMap,
    unlockedAchievements: data.unlockedAchievements,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
}

export function serializeProgress(progress: UserProgress): UserProgressDB {
  return {
    id: progress.userId,
    totalXP: progress.totalXP,
    currentStreak: progress.currentStreak,
    longestStreak: progress.longestStreak,
    lastLoginDate: progress.lastLoginDate,
    dailyGoalXP: progress.dailyGoalXP,
    completedLessons: progress.completedLessons,
    lessonProgressMap: progress.lessonProgressMap,
    unlockedAchievements: progress.unlockedAchievements,
    createdAt: progress.createdAt,
    updatedAt: progress.updatedAt,
  };
}
