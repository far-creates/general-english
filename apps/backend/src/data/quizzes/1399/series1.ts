/**
 * Quiz Data - Year 1399, Series 1
 * Contains all quizzes for this series
 */

import { Quiz } from "@quiz/types";

/**
 * Series 1 quizzes for year 1399
 */
export const series1Quizzes: Quiz[] = [
  {
    id: "quiz_1399_1_1",
    title: "General English Vocabulary Test - Series 1",
    description: "English vocabulary questions from 1399 exam series 1",
    year: 1399,
    series: 1,
    questions: [
      {
        id: "q_1399_1_1",
        testNumber: 1,
        text: "I omitted all the extraneous details while explaining the _________ of the matter to him.",
        options: ["breach", "distinction", "qualm", "gist"],
        correctAnswer: 3,
        explanation:
          'Gist means the main point or essence. The sentence says "I removed all extra details while explaining the essence of the matter." Other options: breach (violation), distinction (difference), qualm (doubt/hesitation).',
        year: 1399,
        series: 1,
      },
      {
        id: "q_1399_1_2",
        testNumber: 2,
        text: "While his brother writes in an unclear and clumsy way, Sam himself is known for his _________ style of writing.",
        options: ["lucid", "verbose", "dull", "feasible"],
        correctAnswer: 0,
        explanation:
          "Lucid means clear and easy to understand. The sentence shows contrast - brother writes unclear, Sam writes clear (lucid). Other options: verbose (wordy), dull (boring), feasible (doable/practical).",
        year: 1399,
        series: 1,
      },
      {
        id: "q_1399_1_3",
        testNumber: 3,
        text: "Poultry farms place the eggs into incubators to _________ the growth of the embryo into chicken.",
        options: ["conquer", "hasten", "outline", "elude"],
        correctAnswer: 1,
        explanation:
          "Hasten means to speed up or accelerate. Incubators are used to speed up the growth process of embryos into chickens. Other options: conquer (defeat), outline (summarize), elude (escape/avoid).",
        year: 1399,
        series: 1,
      },
    ],
  },
];

export default series1Quizzes;
