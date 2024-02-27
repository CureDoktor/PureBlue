import React from "react";
import styles from "./StepTwo.styles.module.scss";
import {useEffect} from "react"
import OrderFlowCard from "../../Common/OrderFlow/OrderFLowCard";

const StepTwo = ({ onNext,setProduct, product}) => {

    const setProductName = (value) => {
          setProduct({
        ...product,
        viagra: value,
      });
    }

  const medicationOptions = [
    {
      title: "Viagra",
      description: "Sildenafil | Oral tablet",
      imageSrc:
        "/assets/sildenafilOrderFlow/PureBluePrescriptionBottleSILDENAFIL/PureBlue1.png",
    },
    {
      title: "Cialis",
      description: "Tadalafil | Oral tablet",
      imageSrc:
        "/assets/sildenafilOrderFlow/PureBluePrescriptionBottleSILDENAFIL/PureBlue2.png",
    },
  ];
  return (
    <>
      <div className={styles.Container}>
        <h2 className={styles.heading}>
          Which treatment option best fits your needs?
        </h2>

        <p className={styles.subHeading}>
          Your preference will be shared with a provider who will <br />
          determine the best treatment for you.
        </p>
        <div className={styles.mainCardContainer}>
          {medicationOptions.map((items) => {
            if(product.daily === true){
              if(items.title === "Viagra"){
               return <div></div>; 
              }else{
                  return (
              <div className={styles.card} key={items.title} onClick={onNext}>
                <OrderFlowCard content={items} SingleImage />
              </div>
            );
              }
              
            } else{
               if(items.title === "Viagra"){
                  return (
                    <div className={styles.card} key={items.title} onClick={()=> {setProductName(true)}}>
                      <OrderFlowCard content={items} SingleImage />
                    </div>
                  );
               }else {
                  return (
                    <div className={styles.card} key={items.title} onClick={()=> {setProductName(false)}}>
                      <OrderFlowCard content={items} SingleImage />
                    </div>
                  );
               }
          
            }

          })}
        </div>
        <div className={styles.mainCard}>
          <div className={styles.onlyTextContainer}>
            Please choose for me based on my health questionnaire
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
