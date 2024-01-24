import React from "react";
import styles from "./StepOne.styles.module.scss";
import OrderFlowCard from "../../Common/OrderFlow/OrderFLowCard";
import { useRouter } from "next/router";

import OrderFlowForm from "../../Common/OrderFlow/OrderFlowForm";
import OrderFlowCardDetails from "../../Common/OrderFlow/OrderFlowCardDetails";

const StepOne = ({ onNext }) => {
  const medicationOptions = [
    {
      title: "Take daily",
      description: "To maintain peak sexual readiness at all times",
      pricePerDose: "1.80",
    },
    {
      title: "Take before sex",
      description: "Quick activating medication when you want it",
      pricePerDose: "4.00",
    },
  ];
  return (
    <>
      <h2 className={styles.h2}>
        Choose your medication <br /> preference:
      </h2>
      <div className={styles.mainCardContainer}>
        {medicationOptions.map((items) => {
          return (
            <div className={styles.card} key={items} onClick={onNext}>
              <OrderFlowCard content={items} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StepOne;
{
  /* <img src={"/assets/homeRemain/Banner/banner.png"} />; */
}
{
  /* <OrderFlowCard onlyText="Please choose for me based on my health questionnaire" />
<OrderFlowCard imageSrc="/assets/sildenafilOrderFlow/PureBluePrescriptionBottleSILDENAFIL/PureBlue1.png" /> */
}
{
  /* <OrderFlowCard bulkMedicines />
<OrderFlowCard bigCard /> */
}
{
  /* <OrderFlowCard
  content={{ imageSrc: "path/to/image.jpg", title: "Take daily" }}
/>
// Without Image
<OrderFlowCard
  content={{
    subtitle: "$1.80 per dose",
    description: "To maintain peak sexual readiness at all times",
  }}
/> */
}

{
  /* <OrderFlowForm /> */
}

{
  /* <OrderFlowCardDetails /> */
}
