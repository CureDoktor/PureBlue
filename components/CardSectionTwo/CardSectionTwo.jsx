import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./CardSectionTwo.styles.module.scss";
const cardData = [
  {
    title: "Erectile Dysfunction",
    imageUrl: "https://via.placeholder.com/150?text=Erectile+Dysfunction",
    text: "Get premium, FDA-approved, US-made E.D. medication from the comfort of your home! Save up to 90% with Pure Blue Generic Viagra and Cialis that feature the same potency and effectiveness vs their brand-name counterparts.",
  },
  {
    title: "Men’s Hair Loss",
    imageUrl: "https://via.placeholder.com/150?text=Erectile+Dysfunction",
    text: "Get premium at-home treatment medication for men’s hair loss! Pure Blue offers advanced FDA-approved treatments that target the root cause of men’s hair loss.",
  },
  {
    title: "Testosterone",
    imageUrl: "https://via.placeholder.com/150?text=Erectile+Dysfunction",
    text: "Revitalize your testosterone levels safely with Pure Blue’s advanced testosterone treatments! Pure Blue offers treatments to naturally boost your testosterone levels, without the common side effects of anabolic steroids.",
  },
  {
    title: "Custom Treatments",
    imageUrl: "https://via.placeholder.com/150?text=Erectile+Dysfunction",
    text: "Pure Blue offers advanced Fixed-Dose Combination (FDC) medications, developed exclusively for Pure Blue customers, to target multiple pathways, yielding superior performance and results.",
  },
];

const CardSectionTwo = () => {
  return (
    <Container className={styles.mainContainer}>
      <Row className="justify-content-md-center ">
        <Col>
          <h1>
            <span className="text-primary">PureBlue </span>
            makes men's health simpler, <br />
            more convenient, and affordable.
          </h1>
          <Button size="lg" className={styles.exploreButton}>
            -{"> "}
            Explore treatments
          </Button>
        </Col>
      </Row>
      {/* Card Items */}
      <Container>
        <Row className="mt-5">
          {cardData.map((card, index) => (
            <Col key={index} sm={12} md={6} className={styles.productCol}>
              <Card className={styles.productCard}>
                <Card.Img variant="top" src={card.imageUrl} alt={card.title} />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    {card.title}
                  </Card.Title>
                  <Card.Text className={styles.cardText}>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default CardSectionTwo;
