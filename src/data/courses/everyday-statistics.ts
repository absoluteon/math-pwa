import { Course, ProblemType } from '../../models/Course';

export const everydayStatistics: Course = {
  id: 'everyday-statistics',
  name: 'Everyday Statistics',
  description: 'Make sense of data in daily life',
  icon: '📊',
  color: '#06b6d4',
  lessons: [
    {
      id: 'stats-01',
      courseId: 'everyday-statistics',
      title: 'Mean, Median, and Mode',
      description: 'Understand measures of central tendency',
      xpReward: 50,
      estimatedMinutes: 6,
      problems: [
        {
          id: 'stats-01-p1',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What is the mean of 2, 4, 6, 8, 10?',
          options: ['4', '5', '6', '7'],
          correctAnswer: '6',
          explanation: 'Mean = (2+4+6+8+10)/5 = 30/5 = 6.',
        },
        {
          id: 'stats-01-p2',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What is the median of 3, 7, 2, 9, 5?',
          options: ['3', '5', '7', '9'],
          correctAnswer: '5',
          explanation: 'Sort first: 2, 3, 5, 7, 9. The middle value is 5.',
        },
        {
          id: 'stats-01-p3',
          type: ProblemType.TRUE_FALSE,
          question: 'True or False: The mode is the most frequent value',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'True! The mode is the value that appears most often.',
        },
      ],
    },
    {
      id: 'stats-02',
      courseId: 'everyday-statistics',
      title: 'Data Visualization',
      description: 'Read and interpret charts and graphs',
      xpReward: 50,
      estimatedMinutes: 6,
      problems: [
        {
          id: 'stats-02-p1',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'Which chart is best for showing parts of a whole?',
          options: ['Line chart', 'Pie chart', 'Scatter plot', 'Histogram'],
          correctAnswer: 'Pie chart',
          explanation: 'Pie charts are ideal for showing how parts make up a whole.',
        },
        {
          id: 'stats-02-p2',
          type: ProblemType.TRUE_FALSE,
          question: 'True or False: A histogram shows the distribution of data',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'True! Histograms display the frequency distribution of data.',
        },
      ],
    },
  ],
  totalXP: 100,
};
