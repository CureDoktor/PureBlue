import React from "react";
import styles from "./OrderFlowCardDetails.styles.module.scss";

const OrderFlowCardDetails = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <h5>Generic Cialis 5mg</h5>
        <hr />
        <p>Choose shipping frequency</p>
        <div className={styles.mainCardsContainer}>
          <div className={styles.card}>
            <span>Monthly</span>
            <span>$76/mo</span>
          </div>
          <div className={styles.card}>
            <span>3 Months</span>
            <span>$85</span>
          </div>
          <div className={styles.card}>
            <span>6 months</span>
            <span>$76/mo</span>
          </div>
          <div className={styles.card}>
            <span>12 months</span>
            <span>$54/mo</span>
          </div>
        </div>
        <hr />
        <div className={styles.monthlyDetailsCard}>
          <span>3 months supply</span>
          <span>
            <span className={styles.cutPrice}>$255</span> $228
          </span>
        </div>
        <div className={styles.DoctorFee}>
          <span>Doctor fee waived</span>
          <span className={styles.discount}>
            <img
              src="../assets/sildenafilOrderFlow/Image157/Image157.png"
              className={styles.image}
            />
            -$30
          </span>
        </div>
        <div className={styles.totalMain}>
          <div className={styles.total}>
            <span>Total</span>
            <span className={styles.totalBlue}>You're saving 11%</span>
          </div>
          <span>
            <span className={styles.cutPrice}>$255</span> $228
          </span>
        </div>
        <div className={styles.refundMain}>
          <div className={styles.refund}>
            <span>Full refund if not prescribed</span>
            <button>Details</button>
          </div>
          <span>$228</span>
        </div>
      </div>
    </>
  );
};

export default OrderFlowCardDetails;
