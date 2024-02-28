import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./WhyChoosePureBlue.styles.module.scss";

const WhyChoosePureBlue = ({ image }) => {
  const cardsCol1 = [
    "Safe. Secure. Straightforward.",
    "100% Online ED Medication Service",
    "No awkward personal conversations",
  ];
  const cardsCol2 = [
    "Overnight Shipping – Discreet Packaging",
    "FDA-Approved ED medication",
    "100% money-back guarantee",
  ];
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col>
            <h1>
              Why Choose <span>PureBlue?</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4} className={styles.col}>
            {cardsCol1.map((text, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.check}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.943"
                    height="21.343"
                    viewBox="0 0 18.943 21.343"
                  >
                    <path
                      id="check"
                      d="M1.854-4.815a7.336,7.336,0,0,1-.507-.553.733.733,0,0,1-.2-.433.455.455,0,0,1,.18-.353,1.525,1.525,0,0,1,.433-.253,2.607,2.607,0,0,1,.54-.147A3.108,3.108,0,0,1,2.787-6.6a.593.593,0,0,1,.353.1,2.722,2.722,0,0,1,.327.287A20.827,20.827,0,0,1,5.74-3.522Q6.76-2.082,7.626-.669a77.638,77.638,0,0,1,3.879-8.945,59.561,59.561,0,0,1,4.986-8.119,1.666,1.666,0,0,1,.833-.573,3.808,3.808,0,0,1,1.273-.2.654.654,0,0,1,.36.087.277.277,0,0,1,.133.247.825.825,0,0,1-.04.273,1.177,1.177,0,0,1-.187.3q-1.48,1.96-2.873,4.106t-2.66,4.526q-1.266,2.38-2.4,4.992T8.853,1.517a.266.266,0,0,1-.147.14,1.326,1.326,0,0,1-.293.1,2.952,2.952,0,0,1-.387.06q-.213.02-.427.02a2.431,2.431,0,0,1-.56-.06.565.565,0,0,1-.373-.26Q6.027.424,5.48-.409T4.374-1.962q-.56-.72-1.166-1.4T1.854-4.815Z"
                      transform="translate(-0.647 19.006)"
                      fill="#fff"
                      stroke="#fff"
                      stroke-width="1"
                    />
                  </svg>
                </div>
                <h6>{text}</h6>
              </div>
            ))}
          </Col>
          <Col xs={12} lg={4} className={styles.col}>
            <div className={styles.image}>
              <Image
                src={image}
                alt="sildenafil generic viagra package"
                layout="fill"
              />
              <div className={styles.rect} />
            </div>
          </Col>
          <Col xs={12} lg={4} className={styles.col}>
            {cardsCol2.map((text, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.check}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.943"
                    height="21.343"
                    viewBox="0 0 18.943 21.343"
                  >
                    <path
                      id="check"
                      d="M1.854-4.815a7.336,7.336,0,0,1-.507-.553.733.733,0,0,1-.2-.433.455.455,0,0,1,.18-.353,1.525,1.525,0,0,1,.433-.253,2.607,2.607,0,0,1,.54-.147A3.108,3.108,0,0,1,2.787-6.6a.593.593,0,0,1,.353.1,2.722,2.722,0,0,1,.327.287A20.827,20.827,0,0,1,5.74-3.522Q6.76-2.082,7.626-.669a77.638,77.638,0,0,1,3.879-8.945,59.561,59.561,0,0,1,4.986-8.119,1.666,1.666,0,0,1,.833-.573,3.808,3.808,0,0,1,1.273-.2.654.654,0,0,1,.36.087.277.277,0,0,1,.133.247.825.825,0,0,1-.04.273,1.177,1.177,0,0,1-.187.3q-1.48,1.96-2.873,4.106t-2.66,4.526q-1.266,2.38-2.4,4.992T8.853,1.517a.266.266,0,0,1-.147.14,1.326,1.326,0,0,1-.293.1,2.952,2.952,0,0,1-.387.06q-.213.02-.427.02a2.431,2.431,0,0,1-.56-.06.565.565,0,0,1-.373-.26Q6.027.424,5.48-.409T4.374-1.962q-.56-.72-1.166-1.4T1.854-4.815Z"
                      transform="translate(-0.647 19.006)"
                      fill="#fff"
                      stroke="#fff"
                      stroke-width="1"
                    />
                  </svg>
                </div>
                <h6>{text}</h6>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoosePureBlue;
