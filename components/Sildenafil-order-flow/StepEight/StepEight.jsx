import React from "react";
import OrderFlowCardDetails from "../../Common/OrderFlow/OrderFlowCardDetails";

const StepEight = ({ onNext, props, product }) => {
  return (
    <div>
      <OrderFlowCardDetails props={props} product={product} onNext={onNext} />
    </div>
  );
};

export default StepEight;
