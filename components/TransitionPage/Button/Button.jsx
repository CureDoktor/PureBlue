import React from "react";
import styles from "./Button.styles.module.scss";
import { Spinner } from "react-bootstrap";

const Button = ({ name, onClick, disabled, icon }) => {
  return (
    <div
      className={disabled ? "d-none" : "d-block"}
      style={{
        textAlign: "center",
        paddingTop: "40px",
        fontSize: "31px",
        fontWeight: "600",
      }}
    >
      <div
        className="text-center"
        style={disabled ? { display: "none" } : {}}
        onClick={disabled ? null : onClick}
      >
        {icon && (
          <img src="/assets/thankyou/check.png" className={styles.icon} />
        )}
        {name}
      </div>
    </div>
  );
};

export default Button;
// style={{ border: disabled ? "1px solid #D5D5D5" : "1px solid #0077F0" }}
