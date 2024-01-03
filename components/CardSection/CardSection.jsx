import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import styles from "./CardSection.styles.module.scss";

const CardSection = () => {
  const cardInfo = [
    {
      title: "Erectile Dysfunction",
      imageUrl: "https://via.placeholder.com/150?text=Erectile+Dysfunction",
    },
    {
      title: "Custom Medication",
      imageUrl: "https://via.placeholder.com/150?text=Custom+Medication",
    },
    {
      title: "Men's Hair Loss",
      imageUrl: "https://via.placeholder.com/150?text=Men's+Hair+Loss",
    },
    {
      title: "Testosterone",
      imageUrl: "https://via.placeholder.com/150?text=Testosterone",
    },
    {
      title: "Weight Loss",
      imageUrl: "https://via.placeholder.com/150?text=Weight+Loss",
    },
  ];

  return (
    <Container className={styles.container}>
      <Row className={styles.cardRow}>
        {cardInfo.map((card, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={2}
            className={styles.cardColumn}
          >
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src={card.imageUrl}
                height={"170px"}
                className={styles.cardImg}
              />
              <Card.Body className={styles.cardContent}>
                <Col className={styles.cardContent}>
                  <Card.Title className={styles.cardTitle}>
                    {card.title}
                  </Card.Title>
                  <Button className={styles.cardButton}>→</Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardSection;
