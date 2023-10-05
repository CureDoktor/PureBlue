import React from "react";
import { useRouter } from "next/router";
import styles from "./QuestionParser.styles.module.scss";
import { useConsultationContext } from "../../../store/consultation-context";
import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { useQuestionParser } from "./QuestionParser.hooks";

const QuestionParser = () => {
  const { questions } = useConsultationContext() || {};
  const { main, total } = questions;
  const router = useRouter();
  const questionId = parseInt(router.query?.question) || "";
  const questionNumber = `Question ${questionId} of ${total}`;
  const notFirstQuestion = questionId !== 1;
  const isNotFirstQuestionStyles = notFirstQuestion ? styles.notFirst : "";
  const previousQuestionLink =
    parseInt(router.query?.question) === 1
      ? "/consultation"
      : `/consultation?question=${questionId - 1}`;

  if (!main) return "Loading...";

  const { parsedQuestion, parsedFollowUpQuestions } = useQuestionParser({
    questions,
  });

  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${isNotFirstQuestionStyles}`}>
        {notFirstQuestion && (
          <Link href={previousQuestionLink}>
            <span className={styles.backLink}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                  fill="currentColor"
                />
              </svg>{" "}
              Previous question
            </span>
          </Link>
        )}
        <span className={styles.questionNumber}>{questionNumber}</span>
      </div>
      <div className={styles.questionWrapper}>
        <h4 className={styles.title}>{parsedQuestion.title}</h4>
        <div className={styles.options}>{parsedQuestion.answers}</div>
        {parsedFollowUpQuestions}
      </div>
    </div>
  );
};

export default QuestionParser;
