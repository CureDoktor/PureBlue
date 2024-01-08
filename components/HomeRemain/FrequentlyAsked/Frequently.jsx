import React from "react";
import { AccordionContext, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Frequently.styles.module.scss";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const cardData = [
  {
    question: "How common is Erectile Dysfunction?",
    answer:
      "PureBlue is an online outlet that links potential patients who need a more convenient way to procure E.D. medication legally with a doctor’s approval. PureBlue provides a complete infrastructure that provides potential patients with convenient options that do not require an in-person doctor’s visit, but maintains the supervision of medical doctors for the prescription of erectile dysfunction medication.",
  },
  {
    question:
      "What’s the difference between using PureBlue and going to my local pharmacy?",
    answer:
      "ED is one of the most common problems that men in the United States face. About 52% of American men between the ages of 40 and 70 years of age experience ED, and PureBlue provides a convenient and affordable way for men to experience stronger erections without the risk of taking low-quality ED pills produced overseas.",
  },
  {
    question: "Is PureBlue safe?",
    answer:
      "PureBlue pills contain the active ingredients of sildenafil and tadalafil, the same active ingredients used in the branded ED medications Viagra and Cialis. Customers have the option to buy branded Viagra and Cialis, which are FDA approved for the treatment of erectile dysfunction. The ED medications sold through PureBlue are prescribed by PureBlue-affiliated physicians.",
  },
  {
    question: "Will I need an audio and/or video chat with my physician?",
    answer:
      "Sildenafil and tadalafil are FDA-approved medications for the treatment of erectile dysfunction. Both medications inhibit the phosphodiesterase-5 enzyme (PDE-5), which results in the dilation of blood vessels in the penile region, which makes erections easier to achieve. The main difference between the two medications is that sildenafil is recommended to be taken 30-60 minutes before sexual activity and remains active in the body for 4 hours, while tadalafil is also recommended to be taken 30-60 minutes before sexual activity and remains active in the body for 36 hours.",
  },
  {
    question: "How long does PureBlue take?",
    answer:
      "PureBlue is an online outfit that links potential patients who need a more convenient way to procure erectile dysfunction medication legally with a doctor’s approval. PureBlue provides a complete infrastructure that provides potential patients with convenient options that do not require an in-person doctor’s visit, but maintains the supervision of medical doctors for the prescription of erectile dysfunction medication.",
  },
  {
    question: "How long will my prescription last?",
    answer:
      "PureBlue is an online outfit that links potential patients who need a more convenient way to procure erectile dysfunction medication legally with a doctor’s approval. PureBlue provides a complete infrastructure that provides potential patients with convenient options that do not require an in-person doctor’s visit, but maintains the supervision of medical doctors for the prescription of erectile dysfunction medication.",
  },
];

const Frequently = () => {
  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        className="headerOne"
        style={{
          // backgroundColor: isCurrentEventKey ? "#0077f0" : "#0077f0",
          backgroundColor: "#f7f7f7",
          border: "0px",
          //   color: "white",
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

  return (
    <div className={styles.fieldNine}>
      <Container className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>

        <div className={styles.expand}>
          <Accordion defaultActiveKey="0">
            {cardData.map((card, index) => (
              <Card className={styles.cardHeader} key={index}>
                <ContextAwareToggle
                  className={styles.headerOne}
                  eventKey={index.toString()}
                >
                  <Row className="align-items-center">
                    <Col xs={2} sm={1} className={styles.plus}>
                      <p>+</p>
                    </Col>
                    <Col className={styles.textPart} xs={10} sm={11}>
                      {card.question}
                    </Col>
                  </Row>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body>{card.answer}</Card.Body>
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
            have sex. - <span>Read more.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Frequently;
