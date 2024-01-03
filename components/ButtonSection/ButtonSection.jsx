import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import {
  ShieldFillCheck,
  Stars,
  PatchCheckFill,
  Speedometer2,
} from "react-bootstrap-icons";
import styles from "./ButtonSection.styles.module.scss";

const ButtonSection = () => {
  const buttonsInfo = [
    { icon: <ShieldFillCheck />, text: "Pure Quality" },
    { icon: <Stars />, text: "Safe" },
    { icon: <PatchCheckFill />, text: "Regulated" },
    { icon: <Speedometer2 />, text: "Consistent Results" },
  ];

  return (
    <Container className={styles.buttonSection}>
      <Row className="justify-content-center">
        {buttonsInfo.map((button, index) => (
          <Col key={index} xs={6} sm={6} md={3} className={styles.buttonCol}>
            {/* <Button variant="outline-light" className={styles.featureButton}>
              {button.icon}
              <span className={styles.buttonText}>{button.text}</span>
            </Button> */}
            <Button variant="outline-light" className={styles.featureButton}>
              {button.icon}
              <span className={styles.buttonText}>{button.text}</span>
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ButtonSection;
