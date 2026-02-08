import { Course, ProblemType } from '../../models/Course';

export const bayesianProbability: Course = {
  id: 'bayesian-probability',
  name: 'Bayesian Probability',
  description: 'Update beliefs with new evidence using Bayes\' theorem',
  icon: '🧮',
  color: '#ef4444',
  lessons: [
    {
      id: 'bayes-01',
      courseId: 'bayesian-probability',
      title: 'Prior and Posterior',
      description: 'Understand how beliefs change with evidence',
      xpReward: 50,
      estimatedMinutes: 7,
      problems: [
        {
          id: 'bayes-01-p1',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What is a prior probability?',
          options: ['Probability before new evidence', 'Probability after new evidence', 'Probability of evidence', 'None of these'],
          correctAnswer: 'Probability before new evidence',
          explanation: 'Prior probability is your initial belief before observing new evidence.',
        },
        {
          id: 'bayes-01-p2',
          type: ProblemType.TRUE_FALSE,
          question: 'True or False: Bayesian thinking involves updating beliefs with new information',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'True! Bayesian probability is all about updating beliefs as we gain evidence.',
        },
        {
          id: 'bayes-01-p3',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'If 1% of people have a disease and a test is 90% accurate, should you panic if you test positive?',
          options: ['Yes, you definitely have it', 'No, false positives are likely', 'Maybe, need more tests', 'Cannot determine'],
          correctAnswer: 'No, false positives are likely',
          explanation: 'Due to the low base rate (1%), most positive tests are false positives. This is the base rate fallacy!',
        },
      ],
    },
    {
      id: 'bayes-02',
      courseId: 'bayesian-probability',
      title: 'Conditional Probability',
      description: 'Calculate probabilities given conditions',
      xpReward: 50,
      estimatedMinutes: 7,
      problems: [
        {
          id: 'bayes-02-p1',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What does P(A|B) mean?',
          options: ['Probability of A or B', 'Probability of A and B', 'Probability of A given B', 'Probability of B given A'],
          correctAnswer: 'Probability of A given B',
          explanation: 'P(A|B) reads as "probability of A given B" - the probability of A happening when we know B has happened.',
        },
        {
          id: 'bayes-02-p2',
          type: ProblemType.TRUE_FALSE,
          question: 'True or False: P(A|B) always equals P(B|A)',
          options: ['True', 'False'],
          correctAnswer: 'False',
          explanation: 'False! P(A|B) and P(B|A) are usually different. This is a common mistake.',
        },
      ],
    },
  ],
  totalXP: 100,
};
