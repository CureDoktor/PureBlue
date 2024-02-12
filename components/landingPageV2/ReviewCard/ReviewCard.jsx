import React from "react";
import styles from "./ReviewCard.styles.module.scss";

const ReviewCard = ({ date, star, reviewText, reviewerName, isVerified }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.stars}>
          {[...Array(star)].map((i) => (
            <img
              src="/assets/landingPageV2/star.png"
              key={i}
              className={styles.star}
            />
          ))}
        </div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.para}>{reviewText}</p>
        <span className={styles.name}>{reviewerName}</span>
        {isVerified ? (
          <div className={styles.verified}>
            <img src="/assets/landingPageV2/verified/verified.jpg" />
            <span>Verified Customer</span>
          </div>
        ) : (
          <div className={styles.empty}>.</div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
