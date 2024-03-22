import React, { useState } from "react";
import { AccordionContext, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./frequentlyAsked.styles.module.scss";
import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const cardData = [
  {
    question:
      "What’s the difference between using PureBlue and going to my local pharmacy? ",
    answer:
      "Traditionally, you need to obtain a prescription from a doctor, and you need to take your prescription to a local pharmacy in order to purchase your ED medication. With PureBlue, you have everything you need in one portal to purchase E.D. medication. We provide fast and easy access to a US-licensed physician who will evaluate your health status and treatment plan for FREE, and we ship your ED medication directly and discreetly from a US-based pharmacy, to your doorstep. Our process helps customers save valuable time and money, without compromising the quality and effectiveness of the treatment and medication.",
  },
  {
    question: "Is PureBlue safe?",
    answer:
      "Yes. All ED treatments are duly prescribed by US-licensed physicians. Our partner physicians, along with your complete and accurate online health evaluation form, will ensure that all ED treatments are safe, effective, and reliable. Make sure to provide accurate answers in the health evaluation form, including health conditions that you may presently have, to ensure the safety and effectiveness of the treatment/medication.",
  },
  {
    question:
      "Will I need to have an audio and/or video chat with my physician?",
    answer:
      "PureBlue’s online health evaluation form provides our US-licensed physician with the information they require to prescribe ED medication without a live audio or video call.",
  },
  {
    question: "How long does PureBlue take?",
    answer:
      "Once you have completed your health evaluation, you may expect to receive feedback within minutes, and up to 24 hours at the latest, considering the availability of US-licensed physicians and business hours on certain time zones. We assure you that once you have completed your health evaluation form, your form will be reviewed by a qualified US-licensed physician the soonest possible time.",
  },
  {
    question: "How long will my prescription last?",
    answer:
      "Unless otherwise stated, PureBlue prescriptions typically last for a year. You have the option to renew your prescription through PureBlue once it expires.",
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
          backgroundColor: "#e9e9e9",
          border: "0px",
          padding: "0px",
          width: "93%",
          textAlign: "left",
          margin: "auto",
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
        <h2>Frequently asked questions</h2>
        <h3>Get instant answers</h3>
        <div className={styles.expand}>
          <Accordion defaultActiveKey={null}>
            {cardData.map((card, index) => (
              <Card className={styles.cardHeader} key={index}>
                <ContextAwareToggle
                  className={styles.headerOne}
                  eventKey={index.toString()}
                >
                  <Row className={styles.rowCard}>
                    <Col className={styles.textPart} xs={10} sm={11}>
                      {card.question}
                    </Col>
                    <Col xs={2} sm={1} className={styles.plus}>
                      <p>
                        {expandedItems.includes(index.toString()) ? "-" : "+"}
                      </p>
                    </Col>
                  </Row>
                </ContextAwareToggle>
                <Accordion.Collapse
                  eventKey={index.toString()}
                  className={styles.collapse}
                >
                  <Card.Body>{card.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Frequently;
