import React from "react";
import { useRouter } from "next/router";
import Radio from "../../Inputs/Radio";
import styles from "./QuestionParser.styles.module.scss";
import { useConsultationContext } from "../../../store/consultation-context";
import Link from "next/link";
import TextInput from "../../Inputs/TextInput";
import Checkbox from "../../Inputs/Checkbox";
import Select from "../../Inputs/Select";

const QuestionParser = ({ question }) => {
  const { questions } = useConsultationContext() || {};
  const { total } = questions;
  const router = useRouter();
  const questionId = router.query?.id || "";
  const questionNumber = `Question ${questionId} of ${total}`;
  const notFirstQuestion = questionId !== "1";
  const isNotFirstQuestionStyles = notFirstQuestion ? styles.notFirst : "";

  const parseInputPropsByType = (questionId, type, answer) => {
    let name, value, label;
    switch (type) {
      case "radio":
        name = `q${questionId}`;
        value = answer.id;
        label = answer.title;
        break;

      default:
        break;
    }

    return { name, value, label };
  };

  const parseQuestionOptions = (type, answers) => {
    const inputMap = {
      text: <TextInput />,
      radio: <Radio />,
      checkbox: <Checkbox />,
      select: <Select />,
    };

    const componentRef = inputMap[type];

    return answers?.map((answer) => {
      const props = parseInputPropsByType(questionId, type, answer);
      const Component = React.createElement(componentRef, props);

      return <Component />;
    });
  };

  const parseQuesiton = (question) => {
    const { title, type, questionsAnswers: answers } = question || {};
    console.log(question);
    const options = parseQuestionOptions(type, answers);
    return (
      <>
        <h4>{title}</h4>
        <div>{options}</div>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${isNotFirstQuestionStyles}`}>
        {notFirstQuestion && (
          <Link href={`/consultation/question/${Number(questionId) - 1}`}>
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
      <div className={styles.questionWrapper}>{parseQuesiton(question)}</div>
    </div>
  );
};

export default QuestionParser;
