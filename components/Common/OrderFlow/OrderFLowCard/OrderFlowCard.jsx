import React from "react";
import ReuseableCard from "./ReuseableCard";

const OrderFlowCard = ({ imageSrc, onlyText, bulkMedicines, bigCard }) => {
  return (
    <>
      {imageSrc ? (
        <ReuseableCard imageSrc={imageSrc} />
      ) : onlyText ? (
        <>
          <ReuseableCard onlyText={onlyText} />
        </>
      ) : bulkMedicines ? (
        <>
          <ReuseableCard bulkMedicines />
        </>
      ) : bigCard ? (
        <>
          <ReuseableCard bigCard />
        </>
      ) : (
        <>
          <ReuseableCard />
        </>
      )}
    </>
  );
};

export default OrderFlowCard;
