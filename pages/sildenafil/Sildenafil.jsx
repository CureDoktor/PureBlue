import React, { useRef, useState } from "react";
import styles from "./Sildenafil.styles.module.scss";
import ProductLandingSection from "../../components/ProductLandingSection/ProductLandingSection";

import SildenafilPillsAndPackagingSrc from "../../public/assets/sildenafil/sildenafil-landing.png";
import { Container, Row, Col } from "react-bootstrap";
import DiscountSection from "../../components/DiscountSection/DiscountSection";
import Carousel from "../../components/Carousel/Carousel";
import Navigation from "../../components/Carousel/components/Navigation/Navigation";
import DidYouKnowSection from "../../components/DidYouKnowSection/DidYouKnowSection";

import item1Icon from "../../public/assets/arrow-blue.png";
import item2Icon from "../../public/assets/arrow-green.png";
import item3Icon from "../../public/assets/arrow-yellow.png";
import item4Icon from "../../public/assets/arrow-orange.png";
import item5Icon from "../../public/assets/arrow-red.png";
import viagraSrc from "../../public/assets/sildenafil/viagra-4tablets.png";
import WhyChoosePureBlue from "../../components/WhyChoosePureBlue/WhyChoosePureBlue";
import CustomAccordion from "../../components/CustomAccordion/CustomAccordion";
import StepsToOrder from "../../components/StepsToOrder/StepsToOrder";
import FAQ from "../../components/FAQ/FAQ";
import GetStartedSection from "../../components/GetStartedSection/GetStartedSection";

const Sildenafil = () => {
  const [swiper, setSwiperInstance] = useState(null);
  const didYouKnowItems = [
    {
      icon: item1Icon,
      heading: "EHS 4: Firm",
      subheading: "HEALTHY ERECTILE FUNCTION",
      desc: "The highest level of erection hardness. The penis is completely rigid and fully hard throughout, providing optimal firmness for sexual activity.",
    },
    {
      icon: item2Icon,
      heading: "EHS 3: Moderate",
      subheading: "EARLY SIGNS OF ERECTILE DYSFUNCTION",
      desc: "The penis is fully rigid and firm throughout the entire erection. It is sufficient for satisfactory sexual activity.",
    },
    {
      icon: item3Icon,
      heading: "EHS 2: Minimal",
      subheading: "MODERATE ERECTILE DYSFUNCTION",
      desc: "The highest level of erection hardness. The penis is completely rigid and fully hard throughout, providing optimal firmness for sexual activity.",
    },
    {
      icon: item4Icon,
      heading: "EHS 1: Slight",
      subheading: "SEVERE ERECTILE DYSFUNCTION",
      desc: "The penis is larger than when flaccid, but not hard. It is still flexible and not suitable for penetration.",
    },
    {
      icon: item5Icon,
      heading: "EHS 0: Absent",
      subheading: "TOTAL ERECTILE DYSFUNCTION",
      desc: "No erectile function. The penis is completely flaccid.",
    },
  ];
  const customAccordionItems = [
    {
      id: 0,
      header: "Can I get Genuine Viagra Online?",
      body: (
        <>
          Plenty of counterfeit Viagra pills are sold online, especially through
          sites that do not provide any form of medical screening or review.
          With <span>PureBlue</span>, you can be confident that you have access
          to FDA-approved and US-made ED medication, dispensed by a US-based
          pharmacy, and shipped discreetly to your doorstep.
        </>
      ),
    },
    {
      id: 1,
      header: "Is Real Viagra expensive?",
      body: (
        <>
          Plenty of counterfeit Viagra pills are sold online, especially through
          sites that do not provide any form of medical screening or review.
          With <span>PureBlue</span>, you can be confident that you have access
          to FDA-approved and US-made ED medication, dispensed by a US-based
          pharmacy, and shipped discreetly to your doorstep.
        </>
      ),
    },
    {
      id: 2,
      header: "Does PureBlue require insurance?",
      body: (
        <>
          Plenty of counterfeit Viagra pills are sold online, especially through
          sites that do not provide any form of medical screening or review.
          With <span>PureBlue</span>, you can be confident that you have access
          to FDA-approved and US-made ED medication, dispensed by a US-based
          pharmacy, and shipped discreetly to your doorstep.
        </>
      ),
    },
    {
      id: 3,
      header: "IS SILDENAFIL the same as VIAGRA?",
      body: (
        <>
          Plenty of counterfeit Viagra pills are sold online, especially through
          sites that do not provide any form of medical screening or review.
          With <span>PureBlue</span>, you can be confident that you have access
          to FDA-approved and US-made ED medication, dispensed by a US-based
          pharmacy, and shipped discreetly to your doorstep.
        </>
      ),
    },
  ];
  return (
    <div>
      <div className={styles.landing}>
        <ProductLandingSection
          heading="Generic Viagra"
          subheading="(Sildenafil Citrate)"
          size="100mg"
          doses="4"
          about={[
            "FDA-approved ED treatment",
            "100% Online - No Appointment Needed",
            "No Insurance Required",
            "Overnight Shipping - Discreet Packaging",
            "FREE Online Evaluation - U.S. Licensed Doctors",
          ]}
          src={SildenafilPillsAndPackagingSrc}
        />
        <Container>
          <Row>
            <Col>
              <h4 className={styles.landingPostText}>
                At <span>PureBlue</span>, our ultimate goal is to revolutionize
                men’s sexual health through convenient, affordable, and
                high-quality medication.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      <DiscountSection />
      <div className={styles.testimonials}>
        <Container>
          <Row>
            <Col>
              <div className={styles.headingWrapper}>
                <div className={styles.heading}>
                  <h1>Pure Confidence.</h1>
                  <h1>Pure Satisfaction.</h1>
                </div>
                <div className={styles.desktopNavigation}>
                  <Navigation
                    handleSlideNext={() => swiper?.slideNext()}
                    handleSlidePrev={() => swiper?.slidePrev()}
                  />
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
              <div className={styles.mobileNavigation}>
                <Navigation
                  handleSlideNext={() => swiper?.slideNext()}
                  handleSlidePrev={() => swiper?.slidePrev()}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <DidYouKnowSection items={didYouKnowItems} />
      <WhyChoosePureBlue image={viagraSrc} />
      <CustomAccordion items={customAccordionItems} />
      <StepsToOrder />
      <FAQ />
      <GetStartedSection />
    </div>
  );
};

export default Sildenafil;
