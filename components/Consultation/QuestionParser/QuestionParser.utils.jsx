import Checkbox from "../../Inputs/Checkbox";
import Radio from "../../Inputs/Radio";
import Select from "../../Inputs/Select";
import TextInput from "../../Inputs/TextInput";
import Textarea from "../../Inputs/Textarea";
import FollowUpAnswer from "../../Consultation/QuestionParser/components/FollowUpAnswer";
import React from "react";
import styles from "./QuestionParser.styles.module.scss";
import Upload from "../../Inputs/Upload";

const inputMap = {
  text: <TextInput />,
  radio: <Radio />,
  checkbox: <Checkbox />,
  select: <Select />,
  textarea: <Textarea />,
  upload: <Upload />,
};

export const parseComponentProps = (name, type, answer) => {
  console.log(answer);
  let props = {
    name: "",
    value: "",
    label: "",
    variant: "",
    critical: false,
    visibility: false,
  };
  switch (type) {
    case "radio":
      props = {
        name,
        value: answer?.id,
        label: answer?.title,
        critical: answer?.is_critical,
        critical_message: answer?.critical_message,
        variant: "contained",
        forbidden: answer?.is_forbidden,
        forbidden_message: answer?.forbidden_message,
        followUp:
          answer?.follow_up_question && answer?.follow_up_question !== null,
      };
      break;
    case "checkbox":
      props = {
        name,
        value: answer?.id,
        label: answer?.title,
        reset: answer?.reset_others,
        variant: "contained",
      };
      break;
    case "textarea":
      props = {
        name,
        visibility: answer?.visibility == 1,
      };
      break;
    case "upload":
      props = {
        name,
      };
      break;
    default:
      break;
  }

  return { ...props };
};

export const parseFollowUpQuestions = (array) => {
  const answers = [];

  array.forEach((q, index) => {
    if (q?.followUpQuestions?.length > 0)
      answers.push(
        ...[
          parseFollowUpQuestion(q, index),
          ...parseFollowUpQuestions(q?.followUpQuestions),
        ]
      );
    else answers.push(parseFollowUpQuestion(q, index));
  });

  return answers;
};

export const parseFollowUpQuestion = (followUpQuestion, index) => {
  const component = (
    <>
      <h4 className={styles.title}>{followUpQuestion.title}</h4>
      <div className={styles.options}>{followUpQuestion.answers}</div>
    </>
  );

  return React.createElement(FollowUpAnswer, {
    key: `${followUpQuestion?.name}-${index}`,
    children: component,
    ...followUpQuestion,
  });
};

export const parseAnswer = ({ context, answer }) => {
  const { name, type, followUpQuestions, questionMap, resetFieldId } = context;
  const props = parseComponentProps(name, type, answer);

  const Input = React.cloneElement(inputMap[type], {
    ...props,
    key: answer?.id,
    ...(context.resetFieldId && { resetFieldId: context.resetFieldId }),
  });

  if (answer?.follow_up_question && answer?.follow_up_question !== null) {
    const followUpQuestion = questionMap[answer?.follow_up_question];
    followUpQuestions.push(
      parseQuestion({
        question: followUpQuestion,
        questionMap,
        afterField: answer?.id,
        dependingOnQuestion: name,
      })
    );
  }

  return Input;
};

export const parseQuestion = ({
  question,
  questionMap,
  dependingOnQuestion,
  afterField = undefined,
}) => {
  const parsedQuestion = {
    dependingOnQuestion,
    name: `q${question?.id}`,
    title: question?.title,
    type: question?.type,
    afterField,
    resetFieldId: question?.questionsAnswers?.filter(
      (el) => el.reset_others === 1
    )[0]?.id,
    answers: [],
    followUpQuestions: [],
  };

  const context = {
    ...parsedQuestion,
    questionMap,
  };

  if (question?.questionsAnswers?.length > 0) {
    question?.questionsAnswers?.forEach((answer) =>
      parsedQuestion.answers.push(parseAnswer({ context, answer, afterField }))
    );
  } else
    parsedQuestion.answers.push(
      parseAnswer({ context, answer: question, afterField })
    );
  return parsedQuestion;
};
