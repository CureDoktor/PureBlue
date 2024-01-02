import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import Button from "../../../../components/Button";
import LegitScriptCertificate from "../../../../components/LegitScriptCertificate";

import styles from "./LandingSection.styles.module.scss";

import productImageSrc from "../../../../public/assets/test/product-image.png";
import fdaImageSrc from "../../../../public/assets/test/fda-approved.png";

const LandingSection = ({ variant }) => {
  const variantMap = {
    secondary: styles.secondary,
  };
  return (
    <section className={`${styles.landingSection} ${variantMap[variant]}`}>
      <Container className={styles.container}>
        <Row>
          <Col lg="6" className={styles.left}>
            <h1 className={styles.heading}>
              All the Confidence You'll Ever Need.
            </h1>
            <h6 className={styles.subheading}>Sildenafil (Generic Viagra)</h6>
            <div className={styles.reviews}>
              <div className={styles.stars}>
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
              </div>
              <Link href="/test">952 Reviews</Link>
            </div>
            <Button
              endAdornment={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                    fill="currentColor"
                  />
                </svg>
              }
            >
              Get started now
            </Button>
            <div className={`${styles.certifications} ${variantMap[variant]}`}>
              <div className={styles.certificate}>
                <LegitScriptCertificate />
              </div>
              <div className={styles.certificate}>
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
          <Col lg="6" className={styles.right}>
            <div className={styles.product}>
              <Image
                objectFit="contain"
                layout="fill"
                placeholder="blur"
                src={productImageSrc}
                alt="Pure Blue Sildenafil product image"
              />
            </div>
            <div className={styles.certifications}>
              <div className={styles.certificate}>
                <LegitScriptCertificate />
              </div>
              <div className={styles.certificate}>
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
        </Row>
      </Container>
    </section>
  );
};

export default LandingSection;
