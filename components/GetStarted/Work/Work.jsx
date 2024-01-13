import React from "react";
import styles from "./Work.styles.module.scss";
import { Card, Col, Row } from "react-bootstrap";
const Work = () => {
  const cardArr = [
    {
      imgUrl: "/assets/homeRemain/Work/step1.png",
      step: "Step 1",
      title: "Choose your treatment plan",
      text: "Select from our available ED treatment plans that fit your preference and budget.",
    },
    {
      imgUrl: "/assets/homeRemain/Work/step2.png",
      step: "Step 2",
      title: "Fill out a quick 3-minute health evaluation form",
      text: "Your assigned US-licensed physician will review your form to determine the treatment that fits your needs.",
    },
    {
      imgUrl: "/assets/homeRemain/Work/step3.png",
      step: "Step 3",
      title: "Complete your order",
      text: "If approved, you can proceed with your order and your medication will be shipped directly and discreetly from a US-based pharmacy to your doorstep.",
    },
  ];
  return (
    <section className={styles.main}>
      <div className={styles.mainContainer}>
        <h1>HOW DOES PUREBLUE WORK?</h1>
        {/*------ cards ----- */}
        <section>
          <Row
            xs={1}
            md={2}
            lg={3}
            className={`g-4 d-flex justify-content-center`}
          >
            {cardArr.map((items, index) => {
              return (
                <Col
                  key={index}
                  xs={12}
                  md={6}
                  lg={4}
                  className={styles.cardSection}
                >
                  <Card className={styles.card}>
                    <div className={styles.stepBox}>
                      <img
                        src="/assets/homeRemain/Work/stepBox.svg"
                        alt="step"
                      />
                      <p>{items.step}</p>
                    </div>
                    <Card.Img
                      variant="top"
                      src="/assets/homeRemain/Work/step1.png"
                    />
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.cardTitle}>
                        {items.title}
                      </Card.Title>
                      <Card.Text className={styles.cardText}>
                        {items.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </section>
        {/* <Card
          // style={{ width: "20rem", padding: "10px 20px" }}
          className={styles.card}
        >
          <Card.Img variant="top" src="/assets/homeRemain/Work/step1.png" />
          <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>
              Choose your treatment plan
            </Card.Title>
            <Card.Text className={styles.cardText}>
              Select from our available ED treatment plans that fit your
              preference and budget.
            </Card.Text>
          </Card.Body>
        </Card> */}
      </div>
    </section>
  );
};

export default Work;
