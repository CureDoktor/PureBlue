import React from "react";
import OrderFlowCardDetails from "../../Common/OrderFlow/OrderFlowCardDetails";

const StepEight = ({ onNext }) => {
  return (
    <div>
      <OrderFlowCardDetails />
      <button onClick={onNext}>Next Temporary</button>
    </div>
  );
};

export default StepEight;
