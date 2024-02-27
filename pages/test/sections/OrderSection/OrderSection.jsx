import Image from "next/image";
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import styles from "./OrderSection.styles.module.scss";

import madeInUsaImageSrc from "../../../../public/assets/test/made-in-usa.png";
import fdaImageSrc from "../../../../public/assets/test/fda-approved.png";
import OrderSectionForm from "./components/OrderSectionForm";

const OrderSection = () => {
  return (
    <section className={styles.order}>
      <Container className={styles.container}>
        <Row>
          <Col xs={12} md={6} className={styles.left}>
            <div className={styles.header}>
              <h1>Genuine US-Made</h1>
              <h1>
                FDA-Approved <br />
                ED Medication
              </h1>
            </div>
            <div className={styles.images}>
              <div className={styles.madeInUsa}>
                <Image
                  objectFit="contain"
                  layout="fill"
                  placeholder="blur"
                  src={madeInUsaImageSrc}
                  alt="Pure Blue Sildenafil product image"
                />
              </div>
              <div className={styles.fdaApproved}>
                <Image
                  objectFit="contain"
                  layout="fill"
                  placeholder="blur"
                  src={fdaImageSrc}
                  alt="Pure Blue Sildenafil product image"
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <OrderSectionForm />
            <div className={styles.deliveryTime}>
              <p>
                Want it delivered by <span>Thursday, July 27th</span>?
              </p>
              <p>
                Order within <span>0d 4h 42m 36s</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderSection;
