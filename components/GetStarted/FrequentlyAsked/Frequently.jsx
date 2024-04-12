import React, { useState } from "react";
import { AccordionContext, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Frequently.styles.module.scss";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const cardData = [
  {
    question: "Exactly what is E.D. and how does it occur?",
    answer: (
      <div>
        Approximately 20 million men in the United States suffer from erectile
        dysfunction (ED). Men with ED have a hard time achieving or maintaining
        an erection long enough to engage in sexual relations with their
        partners. The risk of developing E.D. increases as we get older, but it
        can happen at any age as well.
        <br />
        <br /> Several factors can cause erectile dysfunction, including
        diabetes, hypertension, testosterone, and thyroid hormone levels that
        are abnormal, as well as emotional distress.
        <br />
        <br />
        Having trouble getting or maintaining an erection can be a sign of other
        serious health problems that need to be addressed immediately, beyond
        stress in a relationship and loss of personal confidence. In order to
        identify any additional health concerns that you may have, your
        UltraPharmRx physician will discreetly and comprehensively review all
        your responses to your personal questionnaire.
      </div>
    ),
  },
  {
    question:
      " What are the benefits of using UltraPharmRx instead of going to my doctor?",
    answer: (
      <div>
        There is nothing worse than waiting around for weeks just to see your
        personal doctor, then having to explain to them why you are there for
        your appointment.
        <br />
        <br />
        We offer a convenient, discreet, and easy-to-use online telemedicine
        service at UltraPharmRx. Our licensed doctors can review the 10-minute
        medical intake form that you just filled out on your phone and begin
        your treatment on the same day. Get started now rather than waiting
        weeks.{" "}
      </div>
    ),
  },
  {
    question: "Are UltraPharmRx’s E.D. Telemedicine services safe to use?",
    answer: (
      <div>
        All Erectile Disfunction medication is prescribed by a U.S. physician.
        If you answer the questionnaire in a complete and accurate manner, our
        Telemedicine service for E.D. patients is completely safe and easy to
        use. Please make sure to disclose any health conditions that you
        currently have. This is for your protection.
        <br />
        <br /> In order to be prescribed medications to treat your E.D., it is
        important for you to be healthy enough to engage in sexual activity. Our
        doctors will carefully review all your answers to ensure that you are
        healthy enough to do so.
      </div>
    ),
  },
  {
    question:
      "How will the consultation work? Will I need to see the doctor in person or video chat?",
    answer:
      "We will be able to prescribe you E.D. medication based on your medical questionnaire and without you having to visit a doctor or do a video call.",
  },
  {
    question: "When will a doctor review my medical intake form?",
    answer:
      "Your medical intake form will be reviewed by a licensed U.S. doctor within two hours during normal business hours, and usually within 24 hours during non-business hours. We understand that now that you've made the decision to begin treating your E.D., you're eager to get started. We will review your prescription as soon as possible and respond accordingly. Upon approval of your prescription by one of our doctors, our pharmacy will ship your medication directly to you via USPS First Class Mail that same day.",
  },
  {
    question: "When does my UltraPharmRx E.D. prescription expire?",
    answer:
      "UltraPharmRx's online medical intake form and prescription are good for 12 months once approved by a Doctor. After 12 months, you will need to provide another short medical questionnaire to receive another prescription.",
  },
];

const Frequently = () => {
  const [expandedItems, setExpandedItems] = useState([]);
  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      callback && callback(eventKey);
      toggleItem(eventKey);
    });

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        className="headerOne"
        style={{
          backgroundColor: "#f7f7f7",
          border: "0px",
          padding: "0px 12px 0px 12px",
          width: "100%",
          textAlign: "left",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const toggleItem = (eventKey) => {
    setExpandedItems((prevItems) =>
      prevItems.includes(eventKey)
        ? prevItems.filter((item) => item !== eventKey)
        : [...prevItems, eventKey]
    );
  };

  return (
    <div className={styles.fieldNine}>
      <Container className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>

        <div className={styles.expand}>
          <Accordion defaultActiveKey={null}>
            {cardData?.map((card, index) => (
              <Card className={styles.cardHeader} key={index}>
                <ContextAwareToggle
                  className={styles.headerOne}
                  eventKey={index.toString()}
                >
                  <Row className={styles.rowCard}>
                    <Col xs={2} sm={1} className={styles.plus}>
                      <p>
                        {expandedItems.includes(index.toString()) ? "-" : "+"}
                      </p>
                    </Col>
                    <Col className={styles.textPart} xs={10} sm={11}>
                      {card.question}
                    </Col>
                  </Row>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body className={styles.dragTxt}>
                    {card.answer}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>
      </Container>

      <section className={styles.alert}>
        <div className={styles.alertBox}>
          <img src="/assets/homeRemain/alert.png" alt="alert" />
          <h2>The following safety information is important</h2>
        </div>

        <div>
          <p>
            You should not take Sildenafil (sildenafil citrate) or Tadalafil if
            you are taking medications that contain nitrates, guanylate cyclase
            stimulators, or if you have an allergic reaction to sildenafil,
            tadalafil, or any ingredients in either medication. You should speak
            with your doctor about your health so that you are healthy enough to
            have sex. - <span style={{ fontWeight: "500px" }}>Read more.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Frequently;
