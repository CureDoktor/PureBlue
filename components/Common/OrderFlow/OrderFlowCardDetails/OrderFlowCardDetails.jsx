import React from "react";
import styles from "./OrderFlowCardDetails.styles.module.scss";

const OrderFlowCardDetails = () => {
  const planOptions = [
    { id: 1, period: "Monthly", cost: "$76/mo" },
    { id: 2, period: "3 Months", cost: "$85" },
    { id: 3, period: "6 months", cost: "$76/mo" },
    { id: 4, period: "12 months", cost: "$54/mo" },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <h5>Generic Cialis 5mg</h5>
        <hr />
        <p>Choose shipping frequency</p>
        <div className={styles.mainCardsContainer}>
          {planOptions.map((plan) => (
            <div key={plan.id} className={styles.card}>
              <span>{plan.period}</span>
              <span>{plan.cost}</span>
            </div>
          ))}
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
