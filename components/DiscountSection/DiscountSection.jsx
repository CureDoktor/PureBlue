import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "../Form";
import TextInput from "../Inputs/TextInput";
import Button from "../Button";
import styles from "./DiscountSection.styles.module.scss";

import ForwardIcon from "../../public/assets/forward.png";
import Image from "next/image";

const DiscountSection = () => {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Row>
          <Col xs={12} lg={6}>
            <h1 className={styles.heading}>PureBlue is Purely American</h1>
            <p className={styles.desc}>
              PureBlue is entirely based in the United States, in strict
              compliance with US healthcare regulations.
            </p>
            <ul className={styles.list}>
              <li>US-Licensed healthcare professionals</li>
              <li>US-based pharmacy</li>
              <li>US-manufactured medication</li>
            </ul>
            <div className={styles.form}>
              <Form>
                <h6>
                  Input your Email and <span>save $35 off</span> your first
                  order
                </h6>
                <TextInput name="email" placeholder="Email" />
                <Button variant="gradient">
                  Submit{" "}
                  <span className={styles.buttonIcon}>
                    <Image src={ForwardIcon} alt="Forward icon" layout="fill" />
                  </span>
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DiscountSection;
