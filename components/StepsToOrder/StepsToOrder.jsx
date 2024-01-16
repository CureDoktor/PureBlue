import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./StepsToOrder.styles.module.scss";

const StepsToOrder = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col>
            <h1>
              <span>3 STEPS</span> TO ORDER
            </h1>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.count}>
                  <span>01.</span>
                  <div className={styles.line} />
                </div>
                <div className={styles.content}>
                  <h4>Choose your treatment plan</h4>
                  <p>
                    Select from our available ED treatment plans that fit your
                    preference and budget.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.count}>
                  <span>02.</span>
                  <div className={styles.line} />
                </div>
                <div className={styles.content}>
                  <h4>Fill out a quick 3-minute health evaluation form</h4>
                  <p>
                    Your assigned US-licensed physician will review your form to
                    determine the treatment that fits your needs.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.count}>
                  <span>03.</span>
                  <div className={styles.line} />
                </div>
                <div className={styles.content}>
                  <h4>Complete your order</h4>
                  <p>
                    If approved, you can proceed with your order and your
                    medication will be shipped directly and discreetly from a
                    US-based pharmacy to your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StepsToOrder;
