import React from "react";
import styles from "./styles.module.scss";
import ReusableCard from "../../components/landingPageV2/ReuseableCard/ReusableCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "../../components/landingPageV2/ReviewCard/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {
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
      star: 3,
    },
    // ... more reviews
  ];
  const headerDescription = [
    "FDA-approved medication",
    "Prescribed by board-certified physicians ",
    "Process takes as little as 3 minutes!",
  ];
  const cardData = [
    {
      bottomTriangle: true,
      cardHeading: "It’s modern medicine",
      cardPara:
        "Doctors have been prescribing Viagra for over 20 years, and for one good reason: IT WORKS! It’s never been easier to achieve and maintain harder erections.",
    },
    {
      image: "/assets/landingPageV2/cardImage1/cardImage1.png",
    },
    {
      image: "/assets/landingPageV2/cardImage2/cardImage2.png",
    },
    {
      topTriangle: true,
      cardHeading: "Stay harder for longer",
      cardPara:
        "As long as you’re aroused, generic Viagra will get to work, allowing you to maintain peak erection quality for up to 4 hours from when you took your medication.",
    },
  ];
  const cardData2 = [
    {
      bottomTriangle: true,
      cardHeading: "It’s modern medicine",
      cardPara:
        "Doctors have been prescribing Viagra for over 20 years, and for one good reason: IT WORKS! It’s never been easier to achieve and maintain harder erections.",
    },
    {
      image: "/assets/landingPageV2/pills/pills.png",
    },
    {
      image: "/assets/landingPageV2/imag4/image4.png",
    },
    {
      topTriangle: true,
      cardHeading: "Stay harder for longer",
      cardPara:
        "As long as you’re aroused, generic Viagra will get to work, allowing you to maintain peak erection quality for up to 4 hours from when you took your medication.",
    },
  ];
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerImageContainer}>
          <img src="/assets/landingPageV2/viagra/viagra.png" />
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
          <div className={styles.points}>
            {headerDescription.map((items) => {
              return (
                <p className={styles.details}>
                  <img src="/assets/landingPageV2/tick/tick.png" />
                  <span>{items}</span>
                </p>
              );
            })}
          </div>
          <div className={styles.oneMothPrice}>
            <span className={styles.month}>One month price</span>
            <span className={styles.price}>$22</span>
          </div>
          <button className={styles.shopNow}>Shop Now</button>
          <p className={styles.productNeed}>
            *products needing a prescription require a short consultation with
            an online physician.
          </p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {cardData.map((card, index) => (
          <ReusableCard
            key={index}
            topTriangle={card.topTriangle}
            bottomTriangle={card.bottomTriangle}
            cardHeading={card.cardHeading}
            cardPara={card.cardPara}
            image={card.image}
          />
        ))}
      </div>
      <div className={styles.ImageContainer2}>
        <img
          src="/assets/landingPageV2/image/image.png"
          className={styles.image}
        />
      </div>
      <div className={styles.cardContainer}>
        {cardData2.map((card, index) => (
          <ReusableCard
            key={index}
            topTriangle={card.topTriangle}
            bottomTriangle={card.bottomTriangle}
            cardHeading={card.cardHeading}
            cardPara={card.cardPara}
            image={card.image}
          />
        ))}
      </div>
      <div className={styles.carouselContainer}>
        {reviews.map((items, index) => {
          const { reviewText, reviewerName, star, date, isVerified } = items;
          return (
            <ReviewCard
              key={index}
              reviewText={reviewText}
              reviewerName={reviewerName}
              star={star}
              date={date}
              isVerified={isVerified}
            />
          );
        })}
      </div>
      {/* <ElasticCarousel /> */}
    </>
  );
};

export default index;
