import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import coupleSrc from "../../public/assets/sildenafil/get-started.png";
import ForwardIcon from "../../public/assets/forward.png";

import styles from "./GetStartedSection.styles.module.scss";
import Button from "../Button";

const GetStartedSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Row>
          <Col xs={12} lg={6}>
            <div className={styles.image}>
              <Image src={coupleSrc} alt="couple image" layout="fill" />
            </div>
          </Col>
          <Col xs={12} lg={6} className={styles.getStarted}>
            <h1>Get Started Now</h1>
            <ul className={styles.list}>
              <li>100% Online ED Medication</li>
              <li>US-licensed healthcare professionals</li>
              <li>US-based pharmacies</li>
              <li>US-made ED medication</li>
              <li>100% Money Back Guaranteed</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.cta}>
              <Button variant="gradient">
                Get Started For FREE{" "}
                <span className={styles.buttonIcon}>
                  <Image src={ForwardIcon} alt="Forward icon" layout="fill" />
                </span>
              </Button>
              <div>
                <p>
                  Order Within: <span>DD:HH:MM:SS</span>
                </p>
                <p>
                  Get it by <span>Monday, December 4, 2023</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetStartedSection;
