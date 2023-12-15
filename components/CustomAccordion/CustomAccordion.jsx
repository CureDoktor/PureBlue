import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import styles from "./CustomAccordion.styles.module.scss";
import Image from "next/image";
import doctorSrc from "../../public/assets/doctor-mobile.png";

const CustomAccordion = ({ items }) => {
  return (
    <section className={styles.section}>
      <Container>
        <Row className={styles.row}>
          <Col xs={12} lg={6} className={styles.col}>
            <Accordion defaultActiveKey="0">
              {items?.map((item) => (
                <Accordion.Item
                  key={item.id}
                  className={styles.item}
                  eventKey={item.id}
                >
                  <Accordion.Header className={styles.header}>
                    {item.header}
                  </Accordion.Header>
                  <Accordion.Body className={styles.body}>
                    {item.body}
                    <div className={styles.line} />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col xs={12} lg={6} className={styles.col}>
            <div className={styles.image}>
              <Image src={doctorSrc} alt="doctor" layout="fill" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomAccordion;
