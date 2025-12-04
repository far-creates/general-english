import { Quiz } from "../../types/src";

export const calculateScore = (answers: number[], quiz: Quiz): number => {
  return answers.reduce((score, answer, index) => {
    return answer === quiz.questions[index]?.correctAnswer ? score + 1 : score;
  }, 0);
};

export const formatQuizTitle = (title: string): string => {
  return `📝 ${title}`;
};
