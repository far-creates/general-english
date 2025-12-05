/**
 * Quiz Data - Year 1399, Series 1
 * Contains all quizzes for this series with detailed explanations
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
          'Gist means the main point or essence. The sentence says "I removed all extra details while explaining the essence of the matter."',
        year: 1399,
        series: 1,
        questionTranslation:
          "من تمام جزئیات اضافی را حذف کردم در حالی که خلاصه/مغز مطلب موضوع را به او توضیح می‌دادم.",
        wordExplanations: [
          {
            word: "omit",
            meaning: "to leave out or exclude something",
            translation: "حذف کردن یا از قلم انداختن",
            examples: [
              "Don't omit any important information.",
              "She omitted several key facts from her report.",
            ],
            notes: "Past tense: omitted (with double t)",
          },
          {
            word: "extraneous",
            meaning: "irrelevant or unrelated to the subject",
            translation: "اضافی یا نامربوط",
            examples: [
              "Remove all extraneous words from your essay.",
              "The report contained extraneous information.",
            ],
            collocations: ["extraneous details", "extraneous information"],
          },
          {
            word: "detail",
            meaning: "a small individual fact or item",
            translation: "جزئیات",
            examples: [
              "Pay attention to the details.",
              "She explained it in great detail.",
            ],
            notes: "Plural: details",
          },
          {
            word: "explain",
            meaning: "to make something clear or easy to understand",
            translation: "توضیح دادن",
            examples: [
              "Can you explain this concept?",
              "He explained the situation clearly.",
            ],
            notes: "ing-form: explaining",
          },
          {
            word: "matter",
            meaning: "a subject or situation being considered",
            translation: "موضوع یا قضیه",
            examples: [
              "This is a serious matter.",
              "Let's discuss the matter further.",
            ],
            collocations: ["the matter at hand", "a personal matter"],
          },
          {
            word: "gist",
            meaning: "the main point or essence",
            translation: "خلاصه یا مغز مطلب",
            examples: [
              "Get the gist of the story.",
              "I didn't understand every word, but I got the gist.",
            ],
            collocations: ["get the gist", "the gist of the story"],
          },
        ],
        wrongAnswerExplanations: [
          {
            optionIndex: 0,
            optionText: "breach",
            reason:
              "Breach means violation or gap. It is commonly used with laws and contracts (e.g., breach of contract, security breach). It doesn't fit the context of explaining something.",
            reasonTranslation:
              "Breach به معنی نقض یا شکاف است. بیشتر در قوانین و قراردادها استفاده می‌شود.",
          },
          {
            optionIndex: 1,
            optionText: "distinction",
            reason:
              "Distinction means difference or contrast. We use it when we want to show differences between things (e.g., make a distinction, clear distinction). It doesn't mean the main point.",
            reasonTranslation:
              "Distinction به معنی تمایز یا تفاوت است. برای نشان دادن تفاوت بین دو چیز استفاده می‌شود.",
          },
          {
            optionIndex: 2,
            optionText: "qualm",
            reason:
              "Qualm means doubt or moral hesitation. We use it when referring to concerns about doing something, especially from a moral perspective (e.g., have no qualms about). It's unrelated to explaining.",
            reasonTranslation:
              "Qualm به معنی تردید یا نگرانی وجدانی است. برای بیان تردید اخلاقی استفاده می‌شود.",
          },
        ],
        vocabularySummary: [
          "omit / omitted = حذف کردن",
          "extraneous = اضافی، نامربوط",
          "detail / details = جزئیات",
          "explain / explaining = توضیح دادن",
          "matter = موضوع، قضیه",
          "gist = خلاصه، مغز مطلب ✓",
          "breach = نقض، شکاف",
          "distinction = تمایز، تفاوت",
          "qualm = تردید، نگرانی وجدانی",
        ],
      },
      {
        id: "q_1399_1_2",
        testNumber: 2,
        text: "While his brother writes in an unclear and clumsy way, Sam himself is known for his _________ style of writing.",
        options: ["lucid", "verbose", "dull", "feasible"],
        correctAnswer: 0,
        explanation:
          "Lucid means clear and easy to understand. The sentence shows contrast - brother writes unclear, Sam writes clear (lucid).",
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
          "Hasten means to speed up or accelerate. Incubators are used to speed up the growth process of embryos into chickens.",
        year: 1399,
        series: 1,
      },
    ],
  },
];

export default series1Quizzes;
