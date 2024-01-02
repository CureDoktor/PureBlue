import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/Button";
import Image from "next/image";
import styles from "./ProductLandingSection.styles.module.scss";

import ForwardIcon from "../../public/assets/forward.png";

const ProductLandingSection = ({
  heading,
  subheading,
  size,
  doses,
  about,
  src,
  alt,
}) => {
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
