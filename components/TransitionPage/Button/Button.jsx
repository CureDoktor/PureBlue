import React from "react";
import styles from "./Button.styles.module.scss";

const Button = ({ name, onClick, disabled, icon }) => {
  return (
    <>
      <button
        className={styles.button}
        style={
          disabled
            ? { border: "1px solid #D5D5D5", color: "#D5D5D5" }
            : { border: "1px solid #0077F0" }
        }
        onClick={disabled ? null : onClick}
      >
        {icon && (
          <img src="/assets/thankyou/check.png" className={styles.icon} />
        )}
        {name}
      </button>
    </>
  );
};

export default Button;
// style={{ border: disabled ? "1px solid #D5D5D5" : "1px solid #0077F0" }}
