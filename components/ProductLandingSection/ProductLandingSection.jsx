import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/Button";
import Image from "next/image";
import styles from "./ProductLandingSection.styles.module.scss";
import { useState, useEffect } from "react";
import ForwardIcon from "../../public/assets/forward.png";
import { useRouter } from "next/router";
const ProductLandingSection = ({
  heading,
  subheading,
  size,
  doses,
  about,
  src,
  alt,
}) => {
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
    <main className={styles.productLanding}>
      <Container className={styles.container}>
        <Row className={styles.row}>
          <Col xs={12} lg={6}>
            <div>
              <h1 className={styles.heading}>{heading}</h1>
              <h6 className={styles.subheading}>{subheading}</h6>
            </div>
            <div className={styles.chipsWrapper}>
              <span className={styles.chip}>{size}</span>
              <span className={styles.chip}>Doses: {doses}</span>
            </div>
            <ul className={styles.list}>
              {about.map((item, i) => (
                <li className={styles.item} key={i}>
                  {item}
                </li>
              ))}
            </ul>
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
          <Col xs={12} lg={6}>
            <div className={styles.image}>
              <Image src={src} alt={alt} layout="fill" />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ProductLandingSection;
