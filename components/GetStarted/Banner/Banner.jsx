import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Banner.styles.module.scss";
import Image from "next/image";
const Banner = () => {
  let icon = "/assets/homeRemain/Banner/check.png";
  const featureList = [
    { text: "Same-day health evaluations and prescriptions", icon },
    { text: "Starts at only $X.XX/pill", icon },
    { text: "Zero doctor's fees, processing fees, and pharmacy fees.", icon },
    { text: "Pay only for your medication!", icon },
  ];
  return (
    <div className={styles.mainContainer}>
      {/* first container  */}
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Buy Sildenafil Citrate (Viagra) and <br /> Tadalafil (Cialis) 100%
          Online!
        </h1>
        <p className={styles.subtitle}>
          Get FDA-approved ED medication FAST and EASY!
        </p>

        <div className={styles.imgContainer}>
          <img src={"/assets/homeRemain/Banner/banner.png"} />
        </div>
        <ul className={styles.featuresList}>
          {featureList.map((feature, index) => (
            <li key={index}>
              <img src={feature.icon} alt="" className={styles.featureIcon} />
              <span> {feature.text}</span>
            </li>
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          <p>
            <span>Start Now</span>
            <img
              //   width={87}
              //   height={44}
              src="/assets/homeRemain/Banner/arrow.png"
            />
          </p>
        </div>
        <div className={styles.medication}>
          <p>
            Step 1:
            <span> Select your medication</span>
          </p>
          <div className="d-flex gap-2">
            <Image
              width={200}
              height={100}
              src="/assets/homeRemain/Banner/tablet1.png"
            />
            <Image
              width={200}
              height={100}
              src="/assets/homeRemain/Banner/tablet2.png"
            />
          </div>
        </div>
      </div>
      {/* second container  */}
      {/* <div className={styles.imgContainer}>
        <img src={"/assets/homeRemain/Banner/banner.png"} />
      </div> */}
    </div>
  );
};

export default Banner;
