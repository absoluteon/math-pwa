import { UserProgress } from '../models/UserProgress';
import { Achievement, ACHIEVEMENTS } from '../models/Achievement';
import { progressService } from './progressService';

export async function checkAchievements(
  progress: UserProgress
): Promise<Achievement[]> {
  const newlyUnlocked: Achievement[] = [];

  for (const achievement of ACHIEVEMENTS) {
    if (progress.unlockedAchievements.includes(achievement.id)) {
      continue;
    }

    if (achievement.unlockCondition(progress)) {
      newlyUnlocked.push(achievement);
      await progressService.unlockAchievement(achievement.id);
      await progressService.addXP(achievement.xpBonus);
    }
  }

  return newlyUnlocked;
}

export function getLockedAchievements(progress: UserProgress): Achievement[] {
  return ACHIEVEMENTS.filter(
    (achievement) => !progress.unlockedAchievements.includes(achievement.id)
  );
}

export function getUnlockedAchievements(progress: UserProgress): Achievement[] {
  return ACHIEVEMENTS.filter((achievement) =>
    progress.unlockedAchievements.includes(achievement.id)
  );
}
