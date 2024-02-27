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
export default function About() {
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
        <title>Pure Blue - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main className={styles.aboutPage}>
        <Container>
          <Row>
            <Col sm={3}>
              <h2>About Us</h2>
            </Col>
            <Col sm={9}>
              <div className={styles.blueLine}></div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={6}>
              <Image src="/assets/about/doctor2.jpg" width={650} height={455} />
            </Col>
            <Col sm={6}>
              <p>
                PureBlue is a digital Telehealth service for men that connects
                you to US-licensed physicians for treatment of sexual health,
                hair loss treatments, and wellness. PureBlue is an affordable
                and convenient way to access healthcare online and receive
                prescribed medications discreetly by mail. We have assembled a
                team of highly qualified professionals who have been key
                contributors in providing solutions for male sexual health and
                wellness services over a span of decades, across countless
                distribution channels. <br />
                <br />
                Our primary focus is helping men deal with these issues by
                connecting them with US licensed physicians through a
                hassle-free telehealth visit. Some states also require a phone
                or video chat with your doctor or nurse practitioner. If you are
                prescribed medication, a US licensed pharmacy will deliver
                genuine medication directly to your doorstep.
              </p>
            </Col>
          </Row>
          <br />
          <br />
          <p>
            Our mission is built on Four pillars of trust. Integrity,
            Convenience, Affordability and Confidentiality - to provide
            high-quality healthcare services while maintaining the highest
            standards. We make it convenient for men who want the take control
            of their sexual health and well-being by helping them connect with
            US licensed physicians from the comfort of their own home.
          </p>
        </Container>
      </main>
    </div>
  );
}
