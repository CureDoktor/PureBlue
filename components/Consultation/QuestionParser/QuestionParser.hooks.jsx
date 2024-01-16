import { parseFollowUpQuestions, parseQuestion } from "./QuestionParser.utils";
import { useConsultationContext } from "../../../store/consultation-context";
import { useRouter } from "next/router";

export const useQuestionParser = ({ questions }) => {
  const { main, questionMap } = questions;
  const router = useRouter();
  const questionNumber = parseInt(router.query?.question) || 0;
  const parsedQuestion = parseQuestion({
    question: main[questionNumber - 1],
    questionMap,
  });

  const parsedFollowUpQuestions = parseFollowUpQuestions(
    parsedQuestion.followUpQuestions
  );

  return { parsedQuestion, parsedFollowUpQuestions };
};
