import React from "react";
import styles from "./ReusableCard.styles.module.scss";

const ReusableCard = (props) => {
  const {
    image,
    bottomTriangle,
    topTriangle,
    cardHeading,
    cardPara,
    index
  } = props

  return (
    <>
      {/* {image ? (
        <div
          className={styles.imageContainer}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>
      ) : ( */}
      <>

        <>

          <div style={{display:"flex", justifyContent:"center", margin:"auto"}}>
            {bottomTriangle && (
              <div className="parent-container">
                <div className={styles.mainContainer}>
                  <span className={styles.heading}>{cardHeading}</span>
                  <div className={styles.bar}></div>
                  <p className={styles.description}>{cardPara}</p>
                  {bottomTriangle && (
                    <div className={styles.triangleContainerDown}>
                      <div className={styles.triangleDown}></div>
                    </div>
                  )}
                </div>

                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${image}')`,
                  }}
                ></div>
              </div>

            )}
            {topTriangle && (
              <div className={styles.parentContainer}>
                <div
                  className={styles.imageContainer}
                  style={{
                    backgroundImage: `url('${image}')`,
                  }}
                ></div>
                <div className={styles.mainContainer}>
                  <span className={styles.heading}>{cardHeading}</span>
                  <div className={styles.bar}></div>
                  <p className={styles.description}>{cardPara}</p>
                  {topTriangle && (
                    <div className={styles.triangleContainerUp}>
                      <div className={styles.triangleUp}></div>
                    </div>
                  )}
                </div>


              </div>

            )}
          </div>


        </>

      </>

      {/* )} */}

    </>
  );
};

export default ReusableCard;
