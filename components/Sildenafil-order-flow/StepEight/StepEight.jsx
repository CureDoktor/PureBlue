import React from "react";
import OrderFlowCardDetails from "../../Common/OrderFlow/OrderFlowCardDetails";

const StepEight = ({ onNext }) => {
  return (
    <div>
      <OrderFlowCardDetails onNext={onNext} />
    </div>
  );
};

export default StepEight;
