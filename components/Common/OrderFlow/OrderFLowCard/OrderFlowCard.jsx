import React from "react";
import ReuseableCard from "./ReuseableCard";

const OrderFlowCard = ({ SingleImage, bulkMedicines, content, onClick }) => {
  return (
    <>
      {SingleImage ? (
        <ReuseableCard SingleImage content={content} onClick={onClick} />
      ) : bulkMedicines ? (
        <>
          <ReuseableCard bulkMedicines content={content} onClick={onClick} />
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
