import { Course, ProblemType } from '../../models/Course';

export const calculus: Course = {
  id: 'calculus',
  name: 'Calculus',
  description: 'Explore rates of change and accumulation',
  icon: '📈',
  color: '#f59e0b',
  lessons: [
    {
      id: 'calc-01',
      courseId: 'calculus',
      title: 'Limits and Continuity',
      description: 'Understand the foundation of calculus',
      xpReward: 50,
      estimatedMinutes: 7,
      problems: [
        {
          id: 'calc-01-p1',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What does a limit describe?',
          options: ['The exact value at a point', 'The value a function approaches', 'The maximum value', 'The minimum value'],
          correctAnswer: 'The value a function approaches',
          explanation: 'A limit describes what value a function approaches as the input gets closer to a certain point.',
        },
        {
          id: 'calc-01-p2',
          type: ProblemType.TRUE_FALSE,
          question: 'True or False: A function can have a limit at a point even if it is not defined there',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'True! Limits describe behavior near a point, not necessarily at the point.',
        },
        {
          id: 'calc-01-p3',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What is the limit of (x² - 1)/(x - 1) as x approaches 1?',
          options: ['0', '1', '2', 'Undefined'],
          correctAnswer: '2',
          explanation: 'Factor: (x-1)(x+1)/(x-1) = x+1. As x→1, limit = 2.',
        },
      ],
    },
    {
      id: 'calc-02',
      courseId: 'calculus',
      title: 'Introduction to Derivatives',
      description: 'Learn about rates of change',
      xpReward: 50,
      estimatedMinutes: 7,
      problems: [
        {
          id: 'calc-02-p1',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What does a derivative represent?',
          options: ['Area under a curve', 'Rate of change', 'Maximum value', 'Average value'],
          correctAnswer: 'Rate of change',
          explanation: 'The derivative represents the instantaneous rate of change of a function.',
        },
        {
          id: 'calc-02-p2',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What is the derivative of x²?',
          options: ['x', '2x', 'x²', '2x²'],
          correctAnswer: '2x',
          explanation: 'Using the power rule: d/dx(x²) = 2x.',
        },
      ],
    },
  ],
  totalXP: 100,
};
