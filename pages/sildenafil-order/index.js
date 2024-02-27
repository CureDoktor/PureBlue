import { useState, React } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import OrderHero from "../../components/order-flow/OrderHero";
import OnlineTreatment from "../../components/order-flow/OnlineTreatment";
import Choice from "../../components/order-flow/Choice";
import { OrderForm } from "../../components/order-flow/OrderForm";
import Chart from "../../components/order-flow/Chart";
import Carousel from "../../components/Carousel/Carousel";

export default function OrderFlow(props) {
  const [swiper, setSwiperInstance] = useState(null);

  return (
    <div>
      <div style={{ background: "#ecf6ff" }}>
        <OrderHero />
      </div>
      <div className={styles.testimonials}>
        <Container>
          <Row>
            <Col>
              <div className={styles.headingWrapper}>
                <div className={styles.heading}>
                  <h1>
                    Safe, Effective, and Affordable ED Treatments with
                    <span> PureBlue</span>
                  </h1>
                </div>
              </div>
              <Carousel
                setSwiperInstance={setSwiperInstance}
                items={[
                  {
                    rating: 5,
                    title: "Best decision I ever made!",
                    description:
                      "It’s not just the savings I get from PureBlue, it’s the confidence knowing that whenever I need the stuff, I know that it will work!",
                    author: "Jeff R.",
                    isVerified: true,
                  },
                  {
                    rating: 5,
                    title: "Exactly like what I expected",
                    description:
                      "I’ve used brand-name ED pills for years, and it cost me thousands. With PureBlue, I get the same effect, at a fraction of the cost!",
                    author: "Mike L.",
                    isVerified: true,
                  },
                  {
                    rating: 5,
                    title: "Convenient and affordable",
                    description:
                      "Everything is 100% online. I never had to drive anywhere just to get my pills – and it’s way cheaper than what I had before!",
                    author: "Peter T.",
                    isVerified: true,
                  },
                  {
                    rating: 5,
                    title: "Exactly like what I expected",
                    description:
                      "I’ve used brand-name ED pills for years, and it cost me thousands. With PureBlue, I get the same effect, at a fraction of the cost!",
                    author: "Mike L.",
                    isVerified: true,
                  },
                  {
                    rating: 5,
                    title: "Convenient and affordable",
                    description:
                      "Everything is 100% online. I never had to drive anywhere just to get my pills – and it’s way cheaper than what I had before!",
                    author: "Peter T.",
                    isVerified: true,
                  },
                ]}
              />
            </Col>
            <div className={styles.para}>
              <p>*Individual results may vary</p>
            </div>
          </Row>
        </Container>
      </div>
      <Chart />
      <OnlineTreatment />
      <Choice text="Sildenafil" />
      <OrderForm />

      <div className={styles.lastPara}>
        <p>
          To obtain ED treatments, one must undergo an online consultation with
          a healthcare provider and receive a prescription. The cost per dose is
          determined by the product and subscription plan selected. Pure Blue
          LLC is not affiliated with any manufacturers of the Prescription
          Medications mentioned, and the trademarks and logos belong to their
          respective owners. Pure Blue LLC does not provide advice,
          endorsements, or recommendations for any specific prescription drug,
          pharmacy, or other information. It is advised to seek medical advice
          before making any changes to medication or prescription. Pure Blue LLC
          is not an insurance provider or Medicaid/Medicare prescription drug
          plan. Users must pay the price presented during the checkout process.
        </p>
      </div>
    </div>
  );
}
