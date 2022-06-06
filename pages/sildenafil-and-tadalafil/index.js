import Head from "next/head";
import Link from "next/link";
import { useContext, useState, React } from "react";
import { Col, Container, Button, Row, Image } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import styles from "./styles.module.scss";
import { Check, PatchCheck } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { AccordionContext, Form } from "react-bootstrap";
export default function Home() {
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
        <title>Pure Blue - Difference Between Sildenafil Amd Tadalafil</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.differencePage}>
        <div className={styles.fieldOne}>
          <Container>
            <Row>
              <Col md={5}></Col>
              <Col md={7}>
                <h3>
                  What's the difference between <br /> Sildenafil and Tadalafil?
                </h3>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={styles.fieldTwo}>
          <Container>
            <div className={styles.blueBorder}>
              <Row>
                <Col md={5}>
                  <Image
                    src="/assets/difference/man-thinking.png"
                    className={styles.image}
                  />
                </Col>
                <Col md={7}>
                  <p>
                    Dealing with ED has never been easier with the help of the
                    most reliable prescription medication, Sildenafil, and
                    Tadalafil, the active ingredients in Viagra and Cialis. The
                    use of these prescription medications allowed men to enjoy
                    better sexual function and erections with an effectivity
                    rate of more than 80%.
                  </p>
                </Col>
              </Row>
              <br />
              <br />
            </div>
            <p>
              While both ED medications have plenty of things in common, a few
              characteristics separate the two. Below you’ll find some of the
              major differences between Sildenafil and Tadalafil to help you
              understand which option works best for your needs:
            </p>
          </Container>
        </div>
      </main>
    </div>
  );
}
