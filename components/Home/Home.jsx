import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CardSection from "./CardSection";
import ButtonSection from "./ButtonSection";
import CardSectionTwo from "./CardSectionTwo";
import styles from "./Home.styles.module.scss";
import Image from "next/image";
import Frequently from "./FrequentlyAsked";
import CardSectionThree from "./CardSectionThree";
import Health from "./health";
import Popular from "./Popular";
import Service from "./Service";
const HomePage = () => {
  const [showModal, setShowModel] = useState(false);
  return (
    <div>
      <Container className={styles.container}>
        <div className="my-5">
          <h1>
            Your #1 Source for
            <span className=" mx-2 text-primary">
              Branded and Generic Medication
            </span>
          </h1>
          <p className="text-secondary mt-3 fw-medium">
            Your free online visit starts here. Tell us what we can help you
            with.
          </p>

          <Button className={`bg-primary mt-4 fs-6 ${styles.btn}`}>
            <Image src="/assets/icons/searchIcon.png" width={13} height={13} />
            <span> Find my treatment</span>
          </Button>
        </div>
      </Container>
      <div
        className="bg-primary position-relative"
        style={{
          height: "229px",
          marginTop: "200px",
          display: "flex",
          alignItems: "end",
        }}
      >
        <Container className={styles.container}>
          <CardSection />
          <ButtonSection />
        </Container>
      </div>
      <div className={styles.imageContainer}>
        <img src="/assets/homepage/sections/section1.png" alt="Background" />
      </div>
      <div className={styles.cardSectionTwo}>
        <CardSectionTwo />
      </div>

      <div>
        <CardSectionThree />
      </div>
      <div>
        <Health />
      </div>

      <div>
        <Popular />
      </div>
      <div className={styles.service}>
        <Service />
      </div>
      <div style={{ background: "#F7F7F7" }}>
        <Frequently />
      </div>

      <Container className={styles.container}>
        <div className={`my-5 ${styles.lastSection}`}>
          <h1>
            <span className="text-primary">PureBlue </span>
            makes men’s health simpler, more convenient, and affordable.
          </h1>
          <Button
            className={`bg-dark mt-4 fs-6 ${styles.btn}`}
            onClick={() => setShowModel(!showModal)}
          >
            <Image src="/assets/icons/searchIcon.png" width={13} height={13} />
            <span>Explore treatments</span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
