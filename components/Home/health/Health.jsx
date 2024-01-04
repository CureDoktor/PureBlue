import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Health.styles.module.scss";
import Image from "next/image";

const Health = () => {
  const featureList = [
    {
      text: "100% Online Healthcare System",
      icon: "/assets/homepage/health/icon1.png",
    },
    {
      text: "US-licensed healthcare professionals",
      icon: "/assets/homepage/health/icon2.png",
    },
    {
      text: "FDA-approved treatments and medication",
      icon: "/assets/homepage/health/icon3.png",
    },
    {
      text: "US-based pharmacy",
      icon: "/assets/homepage/health/icon4.png",
    },
    {
      text: "FREE Online Consultations – Get Results FAST!",
      icon: "/assets/homepage/health/icon5.png",
    },
    {
      text: "Free Rushed Shipping – Discreet Packages",
      icon: "/assets/homepage/health/icon6.png",
    },
    {
      text: "12-month ongoing care",
      icon: "/assets/homepage/health/icon7.png",
    },
  ];
  return (
    <Container className={styles.mainContainer}>
      <h1 className="mb-5">
        Real Solutions Made Simple
        <br />
        <span className="text-primary">
          Your Prescription Needs, now 100% Online
        </span>
      </h1>
      <Row className="align-items-center">
        <Col md={6} className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/homepage/health/card.png"
              alt="Hand holding pills"
              width={300}
              height={400}
              layout="responsive"
            />
          </div>
        </Col>
        <Col md={6} className={styles.textColumn}>
          <div className={styles.textContent}>
            <h2 className={`text-primary`}>
              Pure Blue makes men’s health simple, convenient, and affordable.
            </h2>
            <h3>
              The world’s most ingenious healthcare system is now at your
              fingertips.
            </h3>
            <ul className={styles.featuresList}>
              {featureList.map((feature, index) => (
                <li key={index}>
                  <Image
                    src={feature.icon}
                    alt=""
                    width={24}
                    height={24}
                    className={styles.featureIcon}
                  />
                  <span> {feature.text}</span>
                </li>
              ))}
            </ul>
            <div className={styles.btnBox}>
              <Button variant="dark" size="sm" className={styles.btn}>
                Find my treatment
              </Button>
              <Button variant="outline-dark" size="sm" className={styles.btn}>
                Learn more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Health;
