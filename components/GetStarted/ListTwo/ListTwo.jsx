import React from "react";
import styles from "./ListTwo.styles.module.scss";
const ListTwo = () => {
  let icon = "/assets/homeRemain/Banner/check.png";
  const listArr = [
    { text: "FDA-Approved E.D. pills start at only $x.xx/pill!", icon },
    { text: "PureBlue’s Quick order process takes 5 minutes or less!", icon },
    { text: "Discreetly packed and shipped directly to your doorstep.", icon },
    { text: "Free Rushed Shipping on ALL orders", icon },
    { text: "US-licensed health professionals", icon },
    { text: "US-made E.D. medication", icon },
    { text: "US-based pharmacy", icon },
    { text: "No payment until your prescription is APPROVED!", icon },
  ];
  return (
    <div className={styles.mainContainer}>
      <section className={styles.mainBox}>
        <div className={styles.imgBox}>
          <img src="/assets/homeRemain/ListTwo/order.png" alt="medicine" />
        </div>
        <div className={styles.listBox}>
          <ul className={styles.featuresList}>
            {listArr.map((feature, index) => (
              <li key={index}>
                <div className={styles.featureIcon}>
                  <img src={feature.icon} alt="icon" />
                </div>
                <span> {feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ListTwo;
