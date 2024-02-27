import React from "react";
import styles from "./Order.styles.module.scss";
const Order = () => {
  return (
    <section>
      <div className={styles.txtContainer}>
        <p>Please do not navigate away or close this page.</p>
        <h2>Finalize Your Order</h2>
        <h3>Upgrade your order NOW and save BIG!</h3>
        <img src="/assets/pageThree/order/chart.png" alt="chart" />
      </div>
      <div className={styles.txt}>
        <h4>What are the benefits of upgrading your order?</h4>
        <p>
          Upgrading your order makes your E.D. treatments more convenient and
          affordable! Instead of waiting every month for your next refill,
          PureBlue’s UPGRADED packages give you the option to have the next E.D.
          medication refills in advance, at discounted rates!
        </p>
      </div>
    </section>
  );
};

export default Order;
