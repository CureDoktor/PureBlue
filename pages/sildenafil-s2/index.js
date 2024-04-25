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
      date: "11-10-2023",
      reviewText:
        "I’ve been using the expensive brand for over 5 years now, and PureBlue’s Generic Viagra is exactly the same. It’s like I’m saving hundreds of dollars every month just by switching over to PureBlue!",
      reviewerName: "Gino P.",
      isVerified: true,
      star: 5,
    },
    {
      id: 4,
      date: "12-18-2023",
      reviewText:
        "I’ve always wanted to try ED pills, but the costs of going to a doctor, and telling a stranger intimate details about my personal life doesn’t appeal to me. It’s a good thing that PureBlue made it possible for guys like me to get Generic Viagra without all that hassle.",
      reviewerName: "Mitch J.",
      isVerified: true,
      star: 5,
    },

    {
      id: 3,
      date: "12-28-2023",
      reviewText:
        "I go through a lot of these pills every month, and the only reason why I can use so many Generic Viagra pills is because Pureblue made it so affordable for guys like me. It’s the only reason why I still have a healthy sex life at 60!",
      reviewerName: "Dawson M.",
      isVerified: true,
      star: 5,
    },
    {
      id: 3,
      date: "12-18-2024",
      reviewText:
        "We live in a small town where everyone knows everyone – even the pharmacist. I couldn’t get myself to buy ED pills from the guy I went to school with, so good thing there’s PureBlue. I get my pills delivered to my doorstep. No hassle, no embarrassment!",
      reviewerName: "Richard S.",
      isVerified: true,
      star: 5,
    },
    {
      id: 3,
      date: "12-18-2023",
      reviewText:
        "I remarried last year, and my wife is 20 years younger than I am, and Generic Viagra is the secret to our incredible sex life. My wife and PureBlue are the two reasons why I still feel like I’m in my 20s!",
      reviewerName: "Mark V.",
      isVerified: true,
      star: 5,
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
      cardHeading: "Get harder erections",
      cardPara:
        "SIldenafil is the active ingredient in Viagra. It helps increase blood flow and allows you to achieve harder erections in as little as 30 minutes from when you take it.",
      image: "/assets/landingPageV2/cardImage2/cardImage2.png",
    },
    {
      topTriangle: true,
      cardHeading: "Maintain Firmness with Generic Viagra",
      cardPara:
        "As long as you're aroused, Generic Viagra goes to work, ensuring sustained peak erection quality with up to 4 hours effective duration.",

      image: "/assets/landingPageV2/cardImage1/cardImage1.png",
    },
  ];
  const cardData2 = [
    {
      bottomTriangle: true,
      cardHeading: "It’s modern medicine",
      cardPara:
        "Doctors have been prescribing Viagra for over 20 years, and for one good reason: IT WORKS! It’s never been easier to achieve and maintain harder erections.",
      image: "/assets/landingPageV2/imag4/image4.png",
    },
    {
      topTriangle: true,
      cardHeading: "Stay harder for longer",
      cardPara:
        "As long as you’re aroused, generic Viagra will get to work, allowing you to maintain peak erection quality for up to 4 hours from when you took your medication.",
      image: "/assets/landingPageV2/pills/pills.png",
    },
  ];
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerImageContainer}>
          <Image
            wid
            src="/assets/landingPageV2/viagra/viagra.png"
            height={519}
            width={543}
          />
        </div>
        <div className={styles.headerTextContainer}>
          <p className={styles.mainHeading}>Generic Viagra®</p>
          <p className={styles.mainHeading2}>
            Generic Viagra® (Sildenafil) 50mg
          </p>
          <p className={styles.description}>
            Sildenafil is the same active ingredient in branded Viagra.
          </p>
          <div className={styles.headerImageContainerSmallScreen}>
            <img src="/assets/landingPageV2/viagra/viagra.png" />
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
            <span className={styles.month}>One month price</span>
            <span className={styles.price}>$22</span>
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
          src="/assets/landingPageV2/image/image.png"
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
            className="sildenafil-reviews"
            style={{ textAlign: "center", marginTop: "40px" }}
          >
            Sildenafil Reviews
          </p>
          <CardCarousel product="Sildenafil" />
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
