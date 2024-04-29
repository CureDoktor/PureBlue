import React from "react";
import styles from "./styles.module.scss";
import ReusableCard from "../../components/landingPageV2/ReuseableCard/ReusableCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "../../components/landingPageV2/ReviewCard/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetStarted from "../../components/GetStarted";
import Frequently from "../../components/GetStarted/FrequentlyAsked";
import { useRouter } from "next/navigation";
import CardCarousel from "../../components/landingPageV2/CardCarousel";
import Image from "next/image";
import { searchParamsUrl } from "../../components/searchParams";
const index = () => {
  const router = useRouter();
  const getMyTreatment = () => {
    router.push("/transition-page" + searchParamsUrl());
  };
  const reviews = [
    {
      id: 1,
      date: "12-18-2023",
      reviewText:
        "I'm a very happy user. It took a little while to understand when and how to take the medication but once I did I found it to be very effective.",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 1,
    },
    {
      id: 4,
      date: "12-18-2023",
      reviewText:
        "I'm a very happy user. It took a little while to understand when and how to take the medication but once I did I found it to be very effective.",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 1,
    },

    {
      id: 3,
      date: "12-18-2023",
      reviewText:
        "I'm a very happy user. It took a little while to understand when and how to take the medication but once I did I found it to be very effective.",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 2,
    },
  ];
  const headerDescription = [
    "FDA-approved medication",
    "Prescribed by board-certified physicians",
    "Process takes as little as 3 minutes!",
  ];
  const newsDescription = [
    "Medication prescribed by board-certified doctors",
    "100% online with no in-person doctor visits required",
    "Fast, discreet shipping right to your door",
  ];
  const cardData = [
    {
      bottomTriangle: true,
      cardHeading: "Advanced Erection Support",
      cardPara:
        "PureBlue’s Generic Cialis contains Tadalafil, the same active ingredient in Tadalafil that helps you gain and maintain firm erections with ease. Generic Cialis works in as fast as 60 minutes, and stays active for up to 48 hours.",
      image: "/assets/landingPageV2/cardImage1/image1.png",
    },
    {
      topTriangle: true,
      cardHeading: "Long-lasting Performance",
      cardPara:
        "Generic Cialis (tadalafil) is the only medication that delivers long-lasting support against erectile dysfunction, giving men up to 48 hours effective duration – perfect for those who want to be ready for action, any time.",

      image: "/assets/landingPageV2/cardImage1/image2.png",
    },
  ];
  const cardData2 = [
    {
      bottomTriangle: true,
      cardHeading: "Quality without Compromise",
      cardPara:
        "PureBlue’s Generic Cialis costs up to 85% less, without compromising on quality, allowing you to experience the same exact performance, potency, and duration of its brand-name counterpart, at a much more affordable price.",
      image: "/assets/landingPageV2/cardImage1/image5.png",
    },
    {
      topTriangle: true,
      cardHeading: "No Hidden Fees",
      cardPara:
        "With PureBlue, you only pay for your medication. No doctor’s fees, or pharmacy fees -  not even shipping fees. Save up to $400 every month on treatment costs vs conventional healthcare options and get free rushed shipping with PureBlue!",
      image: "/assets/landingPageV2/cardImage1/image4.png",
    },
  ];
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerImageContainer}>
          <Image
            wid
            src="/assets/landingPageV2/cialis/cialis.png"
            height={519}
            width={543}
          />
        </div>
        <div className={styles.headerTextContainer}>
          <p className={styles.mainHeading}>Generic Cialis®</p>
          <p className={styles.mainHeading2}>Generic Cialis® (Tadalafil) 5mg</p>
          <p className={styles.description}>
            Tadalafil is the same active ingredient in branded Cialis.
          </p>
          <div className={styles.headerImageContainerSmallScreen}>
            <img src="/assets/landingPageV2/cialis/cialis.png" />
          </div>
          <div className={styles.smallScreen}>
            <img src="/assets/pure-blue.png" />
          </div>
          <div className={styles.points}>
            {headerDescription?.map((items) => {
              return (
                <p className={styles.details}>
                  <Image
                    src="/assets/landingPageV2/tick/tick.png"
                    width={16}
                    height={17}
                  />
                  <span>{items}</span>
                </p>
              );
            })}
          </div>
          <div className={styles.oneMothPrice}>
            <span className={styles.month}>5mg</span>
            <span className={styles.price}>$2 per dose</span>
          </div>
          <div className={styles.oneMothPrice}>
            <span className={styles.month}>10mg</span>
            <span className={styles.price}>$3 per dose</span>
          </div>
          <div className={styles.oneMothPrice}>
            <span className={styles.month}>20mg</span>
            <span className={styles.price}>$4 per dose</span>
          </div>
          <button onClick={getMyTreatment} className={styles.shopNow}>
            Shop Now
          </button>
          <p className={styles.productNeed}>
            *products needing a prescription require a short consultation with
            an online physician.
          </p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {cardData?.map((card, index) => (
          <ReusableCard
            key={index}
            topTriangle={card.topTriangle}
            bottomTriangle={card.bottomTriangle}
            cardHeading={card.cardHeading}
            cardPara={card.cardPara}
            image={card.image}
            index={index}
          />
        ))}
      </div>
      <div className={styles.ImageContainer2}>
        <img
          src="/assets/landingPageV2/cardImage1/image3.png"
          className={styles.lgImage}
        />
        <img src="/assets/landing-image.png" className={styles.mobileImage} />
      </div>

      <div className={styles.cardContainer}>
        {cardData2.map((card, index) => (
          <ReusableCard
            key={index}
            className={`${index[2] ? "mb-2" : ""}`}
            topTriangle={card.topTriangle}
            bottomTriangle={card.bottomTriangle}
            cardHeading={card.cardHeading}
            cardPara={card.cardPara}
            image={card.image}
            index={index}
          />
        ))}
      </div>
      <div className={styles.cardCarousel}>
        <div className={styles.cards}>
          <p
            className="tadalafil-reviews"
            style={{ textAlign: "center", marginTop: "40px" }}
          >
            Tadalafil Reviews
          </p>
          <CardCarousel product="Tadalafil" />
        </div>
      </div>
      <div className={styles.blackContainer}>
        <div className={styles.greyContainer}>
          <div className={styles.textContainer}>
            <div>
              <p className={styles.greatNews}>Great news!</p>
              <p className={styles.covered}>We’ve got you covered.</p>
            </div>
            <div className={styles.points2}>
              {newsDescription?.map((items) => {
                return (
                  <p className={styles.details}>
                    <img src="/assets/landingPageV2/tickWhite/tickWhite.png" />
                    <span>{items}</span>
                  </p>
                );
              })}
              <button onClick={getMyTreatment}>Find my treatment</button>
              <p className="pointsPara" style={{ marginTop: "25px" }}>
                *Products needing a prescription require a short consultation
                with an online physician
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frequently}>
        <Frequently />
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.greyContainer}>
          <div className={styles.textContainer}>
            <div>
              <p className={styles.greatNews}>Great news!</p>
              <p className={styles.covered}>We’ve got you covered.</p>
            </div>
          </div>
          <div className={styles.points2}>
            {newsDescription?.map((items) => {
              return (
                <p className={styles.details}>
                  <img src="/assets/landingPageV2/tick/tick.png" />
                  <span>{items}</span>
                </p>
              );
            })}
            <button onClick={getMyTreatment}>Find my treatment</button>
            <p style={{ marginTop: "25px" }}>
              *Products needing a prescription require a short consultation with
              an online physician
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
