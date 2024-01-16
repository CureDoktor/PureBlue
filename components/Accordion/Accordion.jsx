import React, { useContext } from "react";
import ContextAwareToggle from "./components/ContextAwareToggle";
import {
  Accordion as AccordionBS,
  AccordionContext,
  Card,
  Col,
  Row,
} from "react-bootstrap";

import styles from "./Accordion.styles.module.scss";

const AccordionCard = ({ index, title, description }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const isCurrentEventKey = activeEventKey === index;

  return (
    <Card className={styles.card}>
      <Card.Header className={styles.header}>
        <ContextAwareToggle eventKey={index}>
          <span className={styles.plus}>{isCurrentEventKey ? "-" : "+"}</span>
          <h6 className={styles.title}>{title}</h6>
        </ContextAwareToggle>
      </Card.Header>
      <AccordionBS.Collapse eventKey={index}>
        <Card.Body className={styles.body}>{description}</Card.Body>
      </AccordionBS.Collapse>
    </Card>
  );
};

const Accordion = ({ items }) => {
  return (
    <AccordionBS className={styles.accordion} defaultActiveKey="0">
      {items?.map((item, i) => (
        <AccordionCard key={`${item.title}-${i}`} index={i} {...item} />
      ))}
    </AccordionBS>
  );
};

export default Accordion;
