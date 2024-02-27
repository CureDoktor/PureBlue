import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "../Accordion";
import styles from "./FAQ.styles.module.scss";

const FAQ = () => {
  const faq = [
    {
      title: "What exactly is E.D. and how does it occur?",
      description: (
        <>
          <p>
            Approximately 20 million men in the United States suffer from
            erectile dysfunction (ED). Men with ED have a hard time achieving or
            maintaining an erection long enough to engage in sexual relations
            with their partners. The risk of developing E.D. increases as we get
            older, but it can happen at any age as well.
          </p>
          <br />
          <p>
            Several factors can cause erectile dysfunction, including diabetes,
            hypertension, testosterone, and thyroid hormone levels that are
            abnormal, as well as emotional distress.
          </p>
          <br />
          <p>
            Having trouble getting or maintaining an erection can be a sign of
            other serious health problems that need to be addressed immediately,
            beyond stress in a relationship and loss of personal confidence. In
            order to identify any additional health concerns that you may have,
            your PureBlue physician will discreetly and comprehensively review
            all your responses to your personal questionnaire.
          </p>
        </>
      ),
    },
    {
      title:
        "What’s the difference between using PureBlue and going to my local pharmacy?",
      description: (
        <>
          <p>
            Approximately 20 million men in the United States suffer from
            erectile dysfunction (ED). Men with ED have a hard time achieving or
            maintaining an erection long enough to engage in sexual relations
            with their partners. The risk of developing E.D. increases as we get
            older, but it can happen at any age as well.
          </p>
          <br />
          <p>
            Several factors can cause erectile dysfunction, including diabetes,
            hypertension, testosterone, and thyroid hormone levels that are
            abnormal, as well as emotional distress.
          </p>
          <br />
          <p>
            Having trouble getting or maintaining an erection can be a sign of
            other serious health problems that need to be addressed immediately,
            beyond stress in a relationship and loss of personal confidence. In
            order to identify any additional health concerns that you may have,
            your PureBlue physician will discreetly and comprehensively review
            all your responses to your personal questionnaire.
          </p>
        </>
      ),
    },
    {
      title: "Is PureBlue safe?",
      description: (
        <>
          <p>
            Approximately 20 million men in the United States suffer from
            erectile dysfunction (ED). Men with ED have a hard time achieving or
            maintaining an erection long enough to engage in sexual relations
            with their partners. The risk of developing E.D. increases as we get
            older, but it can happen at any age as well.
          </p>
          <br />
          <p>
            Several factors can cause erectile dysfunction, including diabetes,
            hypertension, testosterone, and thyroid hormone levels that are
            abnormal, as well as emotional distress.
          </p>
          <br />
          <p>
            Having trouble getting or maintaining an erection can be a sign of
            other serious health problems that need to be addressed immediately,
            beyond stress in a relationship and loss of personal confidence. In
            order to identify any additional health concerns that you may have,
            your PureBlue physician will discreetly and comprehensively review
            all your responses to your personal questionnaire.
          </p>
        </>
      ),
    },
    {
      title:
        "Will I need to have an audio and/or video chat with my physician?",
      description: (
        <>
          <p>
            Approximately 20 million men in the United States suffer from
            erectile dysfunction (ED). Men with ED have a hard time achieving or
            maintaining an erection long enough to engage in sexual relations
            with their partners. The risk of developing E.D. increases as we get
            older, but it can happen at any age as well.
          </p>
          <br />
          <p>
            Several factors can cause erectile dysfunction, including diabetes,
            hypertension, testosterone, and thyroid hormone levels that are
            abnormal, as well as emotional distress.
          </p>
          <br />
          <p>
            Having trouble getting or maintaining an erection can be a sign of
            other serious health problems that need to be addressed immediately,
            beyond stress in a relationship and loss of personal confidence. In
            order to identify any additional health concerns that you may have,
            your PureBlue physician will discreetly and comprehensively review
            all your responses to your personal questionnaire.
          </p>
        </>
      ),
    },
    {
      title: "How long does PureBlue take?",
      description: (
        <>
          <p>
            Approximately 20 million men in the United States suffer from
            erectile dysfunction (ED). Men with ED have a hard time achieving or
            maintaining an erection long enough to engage in sexual relations
            with their partners. The risk of developing E.D. increases as we get
            older, but it can happen at any age as well.
          </p>
          <br />
          <p>
            Several factors can cause erectile dysfunction, including diabetes,
            hypertension, testosterone, and thyroid hormone levels that are
            abnormal, as well as emotional distress.
          </p>
          <br />
          <p>
            Having trouble getting or maintaining an erection can be a sign of
            other serious health problems that need to be addressed immediately,
            beyond stress in a relationship and loss of personal confidence. In
            order to identify any additional health concerns that you may have,
            your PureBlue physician will discreetly and comprehensively review
            all your responses to your personal questionnaire.
          </p>
        </>
      ),
    },
  ];
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.accordion}>
              <Accordion items={faq} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
