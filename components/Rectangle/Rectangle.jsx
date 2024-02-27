import React from "react";
import styles from "./style.module.scss";

const steps = [
  { imgSrc: "/assets/rectangle/pen.png", text: "Submitted Medical Profile" },
  { imgSrc: "/assets/rectangle/id.png", text: "Verified Identity" },
  {
    imgSrc: "/assets/rectangle/time.png",
    text: "Prescription Approved or Modified by Physician",
    duration: "24-48 hours",
  },
  {
    imgSrc: "/assets/rectangle/truck.png",
    text: "Order Shipped !",
    duration: `5-7 days <br/>after approval!`,
  },
];

const Rectangle = () => {
  return (
    <div className={styles.Rectangle}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={styles.box}>
            <img src={step.imgSrc} alt="image" />
            <p className={step.duration ? styles.len : styles.len2}>
              {step.text}
              {step.duration && (
                <>
                  <br />
                  <span
                    className={step.duration ? styles.color : styles.color1}
                    dangerouslySetInnerHTML={{ __html: step.duration }}
                  />
                </>
              )}
            </p>
          </div>
          {index < steps.length - 1 && <div className={styles.line}></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Rectangle;
