import { UserProgress } from './UserProgress';

export enum AchievementCategory {
  MILESTONE = 'milestone',
  STREAK = 'streak',
  MASTERY = 'mastery',
  EXPLORER = 'explorer',
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  xpBonus: number;
  unlockCondition: (progress: UserProgress) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-lesson',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎯',
    category: AchievementCategory.MILESTONE,
    xpBonus: 10,
    unlockCondition: (p) => p.completedLessons.length >= 1,
  },
  {
    id: 'five-lessons',
    name: 'Getting Started',
    description: 'Complete 5 lessons',
    icon: '📚',
    category: AchievementCategory.MILESTONE,
    xpBonus: 25,
    unlockCondition: (p) => p.completedLessons.length >= 5,
  },
  {
    id: 'ten-lessons',
    name: 'Dedicated Learner',
    description: 'Complete 10 lessons',
    icon: '🌟',
    category: AchievementCategory.MILESTONE,
    xpBonus: 50,
    unlockCondition: (p) => p.completedLessons.length >= 10,
  },
  {
    id: 'streak-3',
    name: 'Building Habits',
    description: 'Maintain a 3-day streak',
    icon: '🔥',
    category: AchievementCategory.STREAK,
    xpBonus: 20,
    unlockCondition: (p) => p.currentStreak >= 3,
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '💪',
    category: AchievementCategory.STREAK,
    xpBonus: 50,
    unlockCondition: (p) => p.currentStreak >= 7,
  },
  {
    id: 'streak-30',
    name: 'Consistency Master',
    description: 'Maintain a 30-day streak',
    icon: '👑',
    category: AchievementCategory.STREAK,
    xpBonus: 200,
    unlockCondition: (p) => p.currentStreak >= 30,
  },
  {
    id: 'perfect-score',
    name: 'Perfectionist',
    description: 'Get 100% on any lesson',
    icon: '⭐',
    category: AchievementCategory.MASTERY,
    xpBonus: 25,
    unlockCondition: (p) => {
      return Object.values(p.lessonProgressMap).some(
        (lp) => lp.correctAnswers === lp.totalProblems && lp.completed
      );
    },
  },
  {
    id: 'perfect-three',
    name: 'Triple Perfect',
    description: 'Get 100% on 3 lessons',
    icon: '✨',
    category: AchievementCategory.MASTERY,
    xpBonus: 75,
    unlockCondition: (p) => {
      const perfectCount = Object.values(p.lessonProgressMap).filter(
        (lp) => lp.correctAnswers === lp.totalProblems && lp.completed
      ).length;
      return perfectCount >= 3;
    },
  },
  {
    id: 'course-complete',
    name: 'Course Champion',
    description: 'Complete an entire course',
    icon: '🏆',
    category: AchievementCategory.EXPLORER,
    xpBonus: 100,
    unlockCondition: (p) => {
      const lessonsByCourse: Record<string, number> = {};
      p.completedLessons.forEach((lessonId) => {
        const courseId = lessonId.split('-')[0];
        lessonsByCourse[courseId] = (lessonsByCourse[courseId] || 0) + 1;
      });
      return Object.values(lessonsByCourse).some((count) => count >= 10);
    },
  },
  {
    id: 'explorer',
    name: 'Math Explorer',
    description: 'Try lessons from 4 different courses',
    icon: '🗺️',
    category: AchievementCategory.EXPLORER,
    xpBonus: 50,
    unlockCondition: (p) => {
      const uniqueCourses = new Set(
        p.completedLessons.map((lessonId) => lessonId.split('-')[0])
      );
      return uniqueCourses.size >= 4;
    },
  },
  {
    id: 'xp-500',
    name: 'Rising Star',
    description: 'Earn 500 total XP',
    icon: '🌠',
    category: AchievementCategory.MILESTONE,
    xpBonus: 50,
    unlockCondition: (p) => p.totalXP >= 500,
  },
  {
    id: 'xp-1000',
    name: 'XP Master',
    description: 'Earn 1000 total XP',
    icon: '💎',
    category: AchievementCategory.MILESTONE,
    xpBonus: 100,
    unlockCondition: (p) => p.totalXP >= 1000,
  },
  {
    id: 'daily-goal-streak',
    name: 'Goal Getter',
    description: 'Meet your daily XP goal',
    icon: '🎯',
    category: AchievementCategory.MILESTONE,
    xpBonus: 15,
    unlockCondition: (p) => {
      const today = new Date().toISOString().split('T')[0];
      const todayXP = Object.values(p.lessonProgressMap)
        .filter((lp) => lp.lastAttemptDate.startsWith(today) && lp.completed)
        .reduce((sum, lp) => {
          const accuracy = lp.correctAnswers / lp.totalProblems;
          return sum + Math.floor(50 * accuracy);
        }, 0);
      return todayXP >= p.dailyGoalXP;
    },
  },
  {
    id: 'early-bird',
    name: 'Early Bird',
    description: 'Complete a lesson before 9 AM',
    icon: '🌅',
    category: AchievementCategory.MILESTONE,
    xpBonus: 15,
    unlockCondition: (p) => {
      return Object.values(p.lessonProgressMap).some((lp) => {
        const hour = new Date(lp.lastAttemptDate).getHours();
        return lp.completed && hour < 9;
      });
    },
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    description: 'Complete a lesson after 10 PM',
    icon: '🦉',
    category: AchievementCategory.MILESTONE,
    xpBonus: 15,
    unlockCondition: (p) => {
      return Object.values(p.lessonProgressMap).some((lp) => {
        const hour = new Date(lp.lastAttemptDate).getHours();
        return lp.completed && hour >= 22;
      });
    },
  },
];
