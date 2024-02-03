import React from "react";
import styles from "./RadioButton.styles.module.scss";

const RadioButton = ({ label, onNext }) => {
  return (
    <div className={styles.RadioButtonContainer}>
      <label>
        <input
          type="radio"
          id="huey"
          name="drone"
          value="huey"
          onClick={onNext}
        />
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
