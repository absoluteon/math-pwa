import { db } from './db';
import {
  UserProgress,
  UserProgressDB,
  LessonProgress,
  createDefaultProgress,
  deserializeProgress,
  serializeProgress,
} from '../models/UserProgress';

export class ProgressService {
  async getProgress(): Promise<UserProgress> {
    let data = await db.userProgress.get('default');

    if (!data) {
      data = createDefaultProgress();
      await db.userProgress.add(data);
    }

    return deserializeProgress(data);
  }

  async updateProgress(updates: Partial<UserProgress>): Promise<void> {
    const current = await this.getProgress();
    const updated: UserProgress = {
      ...current,
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    await db.userProgress.put(serializeProgress(updated));
  }

  async addXP(amount: number): Promise<void> {
    const progress = await this.getProgress();
    await this.updateProgress({
      ...progress,
      totalXP: progress.totalXP + amount,
    });
  }

  async completeLesson(
    lessonId: string,
    correctAnswers: number,
    totalProblems: number
  ): Promise<void> {
    const progress = await this.getProgress();

    const lessonProgress: LessonProgress = {
      lessonId,
      correctAnswers,
      totalProblems,
      lastAttemptDate: new Date().toISOString(),
      completed: true,
    };

    const accuracy = correctAnswers / totalProblems;
    const baseXP = 50;
    const xpEarned = accuracy === 1 ? baseXP + 10 : Math.floor(baseXP * accuracy);

    const updatedCompletedLessons = progress.completedLessons.includes(lessonId)
      ? progress.completedLessons
      : [...progress.completedLessons, lessonId];

    await this.updateProgress({
      ...progress,
      completedLessons: updatedCompletedLessons,
      lessonProgressMap: {
        ...progress.lessonProgressMap,
        [lessonId]: lessonProgress,
      },
      totalXP: progress.totalXP + xpEarned,
    });
  }

  async unlockAchievement(achievementId: string): Promise<void> {
    const progress = await this.getProgress();

    if (progress.unlockedAchievements.includes(achievementId)) {
      return;
    }

    await this.updateProgress({
      ...progress,
      unlockedAchievements: [...progress.unlockedAchievements, achievementId],
    });
  }

  async updateStreak(currentStreak: number, longestStreak: number): Promise<void> {
    await this.updateProgress({
      currentStreak,
      longestStreak,
      lastLoginDate: new Date().toISOString(),
    } as Partial<UserProgress>);
  }

  async resetProgress(): Promise<void> {
    await db.userProgress.clear();
    const defaultProgress = createDefaultProgress();
    await db.userProgress.add(defaultProgress);
  }
}

export const progressService = new ProgressService();
