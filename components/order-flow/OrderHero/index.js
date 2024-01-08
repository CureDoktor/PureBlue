import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, ListGroup } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";
import img from "../../../public/assets/order/orderHeroImg.png";
import bg from "../../../public/assets/order/bg.png";
export default function OrderHero(props) {
  console.log("dffvvdv", img);
  return (
    <div className={styles.container}>
      <div className={styles.sec1}>
        <div>
          <h1 className={styles.mainHeading}>COMPLETE YOUR ORDER</h1>
        </div>
        <div className={styles.imgContainer}>
         
          <div>
            <h1>Get Genuine ED Pills Now</h1>
            <ul className={styles.ul}>
              <li>✓ 100% Online Service</li>
              <li>✓ No Appointment Needed</li>
              <li>✓ No Doctor’s fees – No Hidden Charges</li>
              <li>✓ Free 2-day Rushed Shipping</li>
              <li></li>
            </ul>
          </div>
          {/* <div>
            <Image className={styles.heroImg} src={img}></Image>
          </div> */}
        </div>
      </div>
      <div className={styles.sec2}>rdgtrhh</div>
    </div>
  );
}
