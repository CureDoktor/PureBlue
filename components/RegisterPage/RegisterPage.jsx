import React from "react";
import styles from "./RegisterPage.styles.module.scss";
import SecureForm from "./SecureForm";
import LoadingBar from "./LoadingBar/LoadingBar";

const RegisterPage = () => {
  const listArr = [
    {
      icon: "/assets/registerPage/icon1.png",
      text: "Medical evaluation and prescriptions by U.S.- Licensed Physicians",
    },
    { icon: "/assets/registerPage/icon2.png", text: "Free Shipping" },
    {
      icon: "/assets/registerPage/icon3.png",
      text: "Continued support from your doctor and our care team",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <img src="/assets/stars.png" alt="stars" className={styles.starImg} />
        <h2>Feel like a man again</h2>
        <p className={styles.para}>
          The product does exactly what is says on the tin, has improved my sec
          life no end, and makes me feel like a man again.
        </p>

        <h6>Brian K.</h6>
        <p className={styles.verified}>
          <img src="/assets/registerPage/check.png" alt="check" />
          <span>Verified Custumer</span>
        </p>

        <div className={styles.listBox}>
          {listArr.map((items, index) => (
            <div key={index} className={styles.list}>
              <img src={items.icon} alt="icon" />
              <p>{items.text}</p>
            </div>
          ))}
        </div>
      </div>
      <SecureForm />
    </div>

    // <LoadingBar />
  );
};

export default RegisterPage;
