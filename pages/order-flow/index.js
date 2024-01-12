import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Check, PatchCheck } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { AccordionContext, Form } from "react-bootstrap";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
import Router, { useRouter } from "next/router";
import ShipInfo from "../../components/ShipInfo";
import OrderHero from "../../components/order-flow/OrderHero";
import OnlineTreatment from "../../components/order-flow/OnlineTreatment";
import Choice from "../../components/order-flow/Choice";
import { OrderForm } from "../../components/order-flow/OrderForm";
import Chart from "../../components/order-flow/Chart";
import Popup from "../../components/order-flow/PopupPage";
import Slider from "../../components/order-flow/slider";
import Carousel from "../../components/Carousel/Carousel";

import Navigation from "../../components/Carousel/components/Navigation/Navigation";

export default function OrderFlow(props) {
  const [swiper, setSwiperInstance] = useState(null);

  return (
    <div>
      <OrderHero></OrderHero>
      <div className={styles.testimonials}>
        <Container>
          <Row>
            <Col>
              <div className={styles.headingWrapper}>
                <div className={styles.heading}>
                  <h1>
                    Safe, Effective, and Affordable ED Treatments with 
                  </h1>
                  <h1>PureBlue</h1>
                </div>
                {/* <div className={styles.desktopNavigation}>
                  <Navigation
                    handleSlideNext={() => swiper?.slideNext()}
                    handleSlidePrev={() => swiper?.slidePrev()}
                  />
                </div> */}
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
              {/* <div className={styles.mobileNavigation}>
                <Navigation
                  handleSlideNext={() => swiper?.slideNext()}
                  handleSlidePrev={() => swiper?.slidePrev()}
                />
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
      <Chart></Chart>
      <OnlineTreatment></OnlineTreatment>
      <Choice></Choice>
      <OrderForm></OrderForm>
      
    </div>
  );
}
