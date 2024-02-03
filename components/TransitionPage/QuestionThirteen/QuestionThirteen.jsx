import React from "react";
import styles from "./QuestionThirteen.styles.module.scss";
import { thirteenQuestionDropDown } from "../data";

const QuestionThirteen = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <button>Your $30 off promo code has been applied!</button>
      <h6>Let’s make sure telehealth treatments are allowed in your state</h6>
      <p>Select your state</p>
      <select>
        {thirteenQuestionDropDown.map((items) => {
          const { name } = items;
          return <option key={name}>{name}</option>;
        })}
      </select>
      <div className={styles.checkBox}>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <p for="vehicle1">
          I acknowledge the Terms and Conditions, Privacy Policy, and Telehealth
          Consent.
        </p>
      </div>
      <button className={styles.continue} onClick={onNext}>
        Continue
      </button>
      <p className={styles.signIn}>
        Already have an account? <span>Sign In</span>
      </p>
    </div>
  );
};

export default QuestionThirteen;
