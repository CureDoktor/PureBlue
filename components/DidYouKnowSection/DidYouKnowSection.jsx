import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import styles from "./DidYouKnowSection.styles.module.scss";
import Image from "next/image";

const DidYouKnowSection = ({ items }) => {
  return (
    <div className={styles.section}>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.title}>Did You Know?</h1>
            <p className={styles.description}>
              According to the Erection Quality Scale, there are 5 levels of
              Erection Quality:
            </p>
            <div className={styles.list}>
              {items?.map((item, i) => (
                <div key={i} className={styles.item}>
                  <h4 className={styles.heading}>
                    <Image src={item.icon} alt="arrow" />
                    {item.heading}
                  </h4>
                  <h6 className={styles.subheading}>{item.subheading}</h6>
                  <p className={styles.text}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DidYouKnowSection;
