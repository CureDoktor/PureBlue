import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "./ButtonSection.styles.module.scss";
import Image from "next/image";

const ButtonSection = () => {
  const buttonsInfo = [
    { icon: "/assets/homepage/btnIcons/icon1.png", text: "Pure Quality" },
    { icon: "/assets/homepage/btnIcons/icon2.png", text: "Safe" },
    { icon: "/assets/homepage/btnIcons/icon3.png", text: "Regulated" },
    { icon: "/assets/homepage/btnIcons/icon4.png", text: "Consistent Results" },
  ];

  return (
    <Container className={styles.buttonSection}>
      <Row>
        {buttonsInfo.map((button, index) => (
          <Col key={index} xs={6} md={3} className={styles.buttonCol}>
            <Button variant="outline-light" className={styles.featureButton}>
              <Image
                src={button.icon}
                width={20}
                height={20}
                alt={button.text}
              />
              <span>{button.text}</span>
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ButtonSection;
