import React from "react";
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
  return (
    <div>
      {/*---------------- section one------------ */}
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
        <Image
          src="/assets/homepage/sections/section1.png"
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
      </div>
      <div style={{ background: "#E3E3E3", position: "relative" }}>
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
    </div>
  );
};

export default HomePage;
