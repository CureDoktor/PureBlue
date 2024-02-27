import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Step from "../../../../components/Step";

import styles from "./StepsSection.styles.module.scss";

import medicationIconSrc from "../../../../public/assets/test/icon-1.png";
import shoppingCartIconSrc from "../../../../public/assets/test/icon-2.png";
import healthFormIconSrc from "../../../../public/assets/test/icon-3.png";

const mockSteps = [
  {
    title: "Choose your ED Medication",
    description:
      "Select your preferred ED medication, pill strength, and treatment package.",
    icon: medicationIconSrc,
    iconAlt: "Medication icon",
  },
  {
    title: "Finalize your order",
    description:
      "Go through the quick checkout process to order your preferred treatment plan.",
    icon: shoppingCartIconSrc,
    iconAlt: "Shopping cart icon",
  },
  {
    title: "Answer a quick health form",
    description:
      "Our US-licensed physicians will review your answers to determine your compatibility with your chosen treatment plan.",
    icon: healthFormIconSrc,
    iconAlt: "Health form icon",
  },
];

const StepsSection = () => {
  return (
    <section className={styles.stepsSection}>
      <Container>
        <Row className={styles.row}>
          <Col>
            <h2 className={styles.heading}>
              Get Generic Viagra in 3 EASY Steps
            </h2>
          </Col>
        </Row>
        <Row className={styles.row}>
          {mockSteps.map((step, i) => (
            <Col key={`${step.title}-${i}`} xs={12} lg={4}>
              <Step {...step} />
            </Col>
          ))}
        </Row>
        <p className={styles.paragraph}>
          If approved, your ED pills will be shipped out the following business
          day via <span>PureBlue’s FREE rushed 2-day discreet shipping!</span>
        </p>
      </Container>
    </section>
  );
};

export default StepsSection;
