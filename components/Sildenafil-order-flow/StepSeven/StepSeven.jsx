import React from "react";
import OrderFlowForm from "../../Common/OrderFlow/OrderFlowForm";
import styles from "./StepSeven.styles.module.scss";

const StepSeven = ({ onNext }) => {
  return (
    <div className={styles.mainContainer}>
      <h2>
        Shipping Info & <br /> Address
      </h2>
      <p>
        Where would you like to have your medication shipped,
        <br /> if prescribed? Use your legal name.
      </p>
      <OrderFlowForm onNext={onNext} />
    </div>
  );
};

export default StepSeven;
