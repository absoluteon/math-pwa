import { Course, ProblemType } from '../../models/Course';

export const geometricMeasurement: Course = {
  id: 'geometric-measurement',
  name: 'Geometric & Measurement',
  description: 'Explore shapes, space, and measurement',
  icon: '📐',
  color: '#ec4899',
  lessons: [
    {
      id: 'geom-01',
      courseId: 'geometric-measurement',
      title: 'Area and Perimeter',
      description: 'Calculate area and perimeter of shapes',
      xpReward: 50,
      estimatedMinutes: 6,
      problems: [
        {
          id: 'geom-01-p1',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What is the area of a rectangle with length 5 and width 3?',
          options: ['8', '12', '15', '16'],
          correctAnswer: '15',
          explanation: 'Area = length × width = 5 × 3 = 15 square units.',
        },
        {
          id: 'geom-01-p2',
          type: ProblemType.TEXT_INPUT,
          question: 'What is the perimeter of a square with side length 4?',
          correctAnswer: 16,
          explanation: 'Perimeter = 4 × side = 4 × 4 = 16 units.',
        },
        {
          id: 'geom-01-p3',
          type: ProblemType.TRUE_FALSE,
          question: 'True or False: The area of a triangle is (base × height) / 2',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'True! Triangle area = (base × height) / 2.',
        },
      ],
    },
    {
      id: 'geom-02',
      courseId: 'geometric-measurement',
      title: 'Angles and Triangles',
      description: 'Understand angles and triangle properties',
      xpReward: 50,
      estimatedMinutes: 6,
      problems: [
        {
          id: 'geom-02-p1',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What is the sum of angles in a triangle?',
          options: ['90°', '180°', '270°', '360°'],
          correctAnswer: '180°',
          explanation: 'The angles in any triangle always sum to 180°.',
        },
        {
          id: 'geom-02-p2',
          type: ProblemType.TRUE_FALSE,
          question: 'True or False: A right angle measures 90°',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'True! A right angle is exactly 90 degrees.',
        },
      ],
    },
  ],
  totalXP: 100,
};
