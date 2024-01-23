import React from "react";
import ReuseableCard from "./ReuseableCard";

const OrderFlowCard = ({
  imageSrc,
  onlyText,
  bulkMedicines,
  bigCard,
  content,
  onClick,
}) => {
  return (
    <>
      {imageSrc ? (
        // <ReuseableCard imageSrc={imageSrc} />
        <ReuseableCard />
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
          <ReuseableCard content={content} onClick={onClick} />
        </>
      )}
    </>
  );
};

export default OrderFlowCard;
