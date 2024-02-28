import React from "react";
import styles from "./Mark.styles.module.scss";
const Mark = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.mainBox}>
        <div className={styles.imgBox}>
          <img src="/assets/homeRemain/eagle.svg" alt="eagle" />
        </div>

        <div className={styles.contentBox}>
          <h2>PureBlue is here for you!</h2>
          <h5>
            PureBlue is the #1 online portal for men’s prescription medication
            needs.
          </h5>
          <p>
            Order FDA-approved E.D. medication from the comfort of your home!
            PureBlue has everything you need to get genuine E.D. medication in
            one place!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mark;
