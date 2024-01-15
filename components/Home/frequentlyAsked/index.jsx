import { useState, useContext } from "react";
import {
  AccordionContext,
  Card,
  Col,
  Container,
  Row,
  Accordion,
} from "react-bootstrap";

import { useAccordionButton } from "react-bootstrap/AccordionButton";

import styles from "./Frequently.styles.module.scss";

const cardData = [
  {
    question: "What is PureBlue?",
    answer:
      "PureBlue is an online outlet that links potential patients who need a more convenient way to procure E.D. medication legally with a doctor’s approval. PureBlue provides a complete infrastructure that provides potential patients with convenient options that do not require an in-person doctor’s visit, but maintains the supervision of medical doctors for the prescription of erectile dysfunction medication.",
  },
  {
    question: "How does PureBlue work?",
    answer:
      "ED is one of the most common problems that men in the United States face. About 52% of American men between the ages of 40 and 70 years of age experience ED, and PureBlue provides a convenient and affordable way for men to experience stronger erections without the risk of taking low-quality ED pills produced overseas.",
  },
  {
    question: "Who are the providers at PureBlue?",
    answer:
      "PureBlue pills contain the active ingredients of sildenafil and tadalafil, the same active ingredients used in the branded ED medications Viagra and Cialis. Customers have the option to buy branded Viagra and Cialis, which are FDA approved for the treatment of erectile dysfunction. The ED medications sold through PureBlue are prescribed by PureBlue-affiliated physicians.",
  },
  {
    question: "Does PureBlue require insurance?",
    answer:
      "Sildenafil and tadalafil are FDA-approved medications for the treatment of erectile dysfunction. Both medications inhibit the phosphodiesterase-5 enzyme (PDE-5), which results in the dilation of blood vessels in the penile region, which makes erections easier to achieve. The main difference between the two medications is that sildenafil is recommended to be taken 30-60 minutes before sexual activity and remains active in the body for 4 hours, while tadalafil is also recommended to be taken 30-60 minutes before sexual activity and remains active in the body for 36 hours.",
  },
  {
    question: "What states is PureBlue available in?",
    answer:
      "PureBlue is an online outfit that links potential patients who need a more convenient way to procure erectile dysfunction medication legally with a doctor’s approval. PureBlue provides a complete infrastructure that provides potential patients with convenient options that do not require an in-person doctor’s visit, but maintains the supervision of medical doctors for the prescription of erectile dysfunction medication.",
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
          <Accordion defaultActiveKey="0">
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