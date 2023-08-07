import React, { useEffect } from "react";
import QuestionParser from "../../../../components/Consultation/QuestionParser";
import { useRouter } from "next/router";
import Form from "../../../../components/Form/Form";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Question.styles.module.scss";
import { useConsultationContext } from "../../../../store/consultation-context";
import Button from "../../../../components/Button";

const Question = () => {
  const { data, setFormValues, questions } = useConsultationContext() || {};
  const { main, total: totalQuestions } = questions;
  const router = useRouter();
  const question = Number(router.query?.id);
  const notLastQuestion = question !== totalQuestions;
  const buttonEndAdornment = notLastQuestion && (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
        fill="currentColor"
      />
    </svg>
  );

  const handleQuestionSubmit = (value) => {
    setFormValues(value);
    if (notLastQuestion) router.push(`/consultation/question/${question + 1}`);
    else console.log(data);
  };
  return (
    <Form defaultValues={data} onSubmit={handleQuestionSubmit}>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col className={styles.col} xs={12} lg={7}>
            <QuestionParser question={main?.[question - 1]} />
            <Button type="submit" endAdornment={buttonEndAdornment}>
              {notLastQuestion ? "Next question" : "Submit"}
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default Question;
