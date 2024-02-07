import React from "react";
import styles from "./ReusableCard.styles.module.scss";

const ReusableCard = ({
  image,
  bottomTriangle,
  topTriangle,
  cardHeading,
  cardPara,
}) => {
  return (
    <>
      {image ? (
        <div
          className={styles.imageContainer}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>
      ) : (
        <>
          <div className={styles.mainContainer}>
            {topTriangle && (
              <>
                <div className={styles.triangleContainerUp}>
                  <div className={styles.triangleUp}></div>
                </div>
              </>
            )}
            <span className={styles.heading}>{cardHeading}</span>
            <div className={styles.bar}></div>
            <p className={styles.description}>{cardPara}</p>
            {bottomTriangle && (
              <>
                <div className={styles.triangleContainerDown}>
                  <div className={styles.triangleDown}></div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ReusableCard;
