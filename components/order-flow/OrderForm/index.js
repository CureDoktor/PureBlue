import React from "react";
import styles from "./styles.module.scss";
export const OrderForm = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>START YOUR ORDER</h1>
      <div className={styles.form}>
        <div className={styles.formHead}>
          <h1 className={styles.stepNo}>STEP 1</h1>
          <h1 className={styles.title}>SHIPPING DETAILS</h1>
        </div>
        <div>
          <div>
            <div>
                <input type="text" placeholder="First Name (As it appears on your ID)" />
                <input type="text" placeholder="Last Name (As it appears on your ID)" />
            </div>
            <div>
                <input type="text" placeholder="Emaill"  />
                <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
