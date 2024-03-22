import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import coupleSrc from "../../public/assets/sildenafil/get-started.png";
import ForwardIcon from "../../public/assets/forward.png";
import { useRouter } from "next/router";
import styles from "./GetStartedSection.styles.module.scss";
import Button from "../Button";
import { useState, useEffect } from "react";

const GetStartedSection = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const calculateTimeLeft = () => {
    const now = new Date().getTime() - 1000; // Decrement current time by 1 second
    const deliveryDate = new Date(now + 5 * 24 * 60 * 60 * 1000); // 5 days from now
    const difference = deliveryDate - now - count;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      ((difference * 1000) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      ((difference * 1000) % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(((difference * 1000) % (1000 * 60)) / 1000);
    setCount(count + 1);
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
  const calculateDeliveryDate = () => {
    const now = new Date();
    now.setDate(now.getDate() + 5); // Set initial delivery date to 5 days from now
    return now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

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
              <Button
                onClick={() => {
                  router.push("/transition-page");
                }}
                variant="gradient"
              >
                Get Started For FREE{" "}
                <span className={styles.buttonIcon}>
                  <Image src={ForwardIcon} alt="Forward icon" layout="fill" />
                </span>
              </Button>
              <div>
                <p>
                  Order Within:{" "}
                  <span>
                    {timeLeft.days} days {timeLeft.hours}:{timeLeft.minutes}:
                    {timeLeft.seconds}
                  </span>
                </p>
                <p>
                  Get it by <span>{calculateDeliveryDate()}</span>
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
