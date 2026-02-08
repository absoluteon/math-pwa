import { Course } from '../../models/Course';
import { arithmeticThinking } from './arithmetic-thinking';
import { solvingEquations } from './solving-equations';
import { probabilityChance } from './probability-chance';

// Placeholder courses (to be fully developed)
import { bayesianProbability } from './bayesian-probability';
import { calculus } from './calculus';
import { everydayStatistics } from './everyday-statistics';
import { geometricMeasurement } from './geometric-measurement';
import { numberTheory } from './number-theory';

export const ALL_COURSES: Course[] = [
  arithmeticThinking,
  solvingEquations,
  probabilityChance,
  bayesianProbability,
  calculus,
  everydayStatistics,
  geometricMeasurement,
  numberTheory,
];

export function getCourseById(courseId: string): Course | undefined {
  return ALL_COURSES.find((course) => course.id === courseId);
}

export function getLessonById(lessonId: string): { course: Course; lesson: any } | undefined {
  for (const course of ALL_COURSES) {
    const lesson = course.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      return { course, lesson };
    }
  }
  return undefined;
}
