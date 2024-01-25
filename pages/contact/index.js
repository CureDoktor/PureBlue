import Head from "next/head";
import Link from "next/link";
import { useContext, useState, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Check, PatchCheck } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { AccordionContext, Form } from "react-bootstrap";
export default function Contact() {
  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        className="headerOne"
        style={{
          backgroundColor: isCurrentEventKey ? "#fff" : "#fff",
          border: "0px",
          color: "#000",
          fontWeight: "800",
          padding: "0px 12px 0px 12px",
          width: "100%",
          textAlign: "left",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main className={styles.contactPage}>
        <Container>
          <Row>
            <Col sm={3}>
              <h2>Contact</h2>
            </Col>
            <Col sm={9}>
              <div className={styles.blueLine}></div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={5}>
              <h3>Send A Message</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="sample@email.com"
                    className={styles.formInputTwo}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Enter message here."
                    className={styles.formInput}
                  />
                </Form.Group>
                <Button
                  className={styles.submitBtn}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={2}>
              <div className={styles.grayLine}></div>
            </Col>
            <Col md={5}>
              <h3>Give Us A Call</h3>
              <Row>
                <Col md={4}>
                  <p className={styles.blueText}>Monday - Friday:</p>
                  <p>7AM - 1AM (EST)</p>
                </Col>
                <Col md={6}>
                  <p className={styles.blueText}>Saturday - Sunday:</p>
                  <p>8AM - 9PM (EST)</p>
                </Col>
              </Row>
              <Row className="mx-md-0 pt-md-3">
                <Col md={1} className="px-md-0">
                  <Image
                    src="/assets/contact/address-icon.svg"
                    width={40}
                    height={40}
                  />
                </Col>
                <Col md={10}>
                  <p>42 Broadway, 12th Floor New York, NY 10004</p>
                </Col>
              </Row>
              <Row className="mx-md-0">
                <Col md={1} className="px-md-0">
                  <Image
                    src="/assets/contact/call-icon.svg"
                    width={40}
                    height={40}
                  />
                </Col>
                <Col md={10}>
                  <p>1-888-534-8977</p>
                </Col>
              </Row>
              <Row className="mx-md-0 pb-md-1">
                <Col md={1} className="px-md-0">
                  <Image
                    src="/assets/contact/mail-icon.svg"
                    width={40}
                    height={40}
                  />
                </Col>
                <Col md={10}>
                  <p>info@trypureblue.com</p>
                </Col>
              </Row>
              <br />
              <p className={styles.blueText}>For more questions or concerns:</p>
              <p>
                Visit our{" "}
                <Link href="/faq">
                  <span className={styles.blueText}>FAQ</span>
                </Link>{" "}
                page
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
