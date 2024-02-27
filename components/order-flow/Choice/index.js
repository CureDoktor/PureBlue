import React from "react";
import { useState } from "react";
import Styles from "./styles.module.scss";
import arrow from "../../../public/assets/order/Group 5 (1).png";
import Image from "next/image";
const Choice = ({ text }) => {
  const [selected, setselected] = useState(1);
  const [selected2, setselected2] = useState(1);

  return (
    <div className={Styles.main}>
      <div className={Styles.heading}>
        <h1 className={Styles.whitee}>
          Your treatment,
          <span className={Styles.bluee}>your choice.</span>
        </h1>
      </div>

      <p className={Styles.subHeading}>
        Choose from the available ED treatments as approved by your assigned
        US-licensed physician.
      </p>
      <div className={Styles.stepDiv}>
        <div className={Styles.stepHead}>
          <span className={Styles.step}>STEP 1</span>{" "}
          <span>Choose your strength</span>{" "}
        </div>
        <div className={Styles.steps}>
          <div className={Styles.medName}>
            <h3>Generic Viagra</h3>
            <h4>{text}</h4>
          </div>
          <div className={Styles.opts}>
            <div
              style={
                selected === 1
                  ? { border: "2px solid #0077F0", background: "#FFFFFF" }
                  : {}
              }
            >
              <input
                type="radio"
                name="med"
                id="medi1"
                onChange={() => setselected(1)}
              />
              <label for="medi1">25mg $3.75/per dose</label>{" "}
            </div>
            <div
              style={
                selected === 2
                  ? {
                      border: "2px solid #0077F0",
                      background: "#FFFFFF",
                      justifyContent: "space-between",
                    }
                  : { justifyContent: "space-between" }
              }
            >
              <span>
                <input
                  type="radio"
                  name="med"
                  id="medi2"
                  onChange={() => setselected(2)}
                />
                <label for="medi2">25mg $3.75/per dose </label>
              </span>{" "}
              <Image src={arrow}></Image>{" "}
            </div>
            <div
              style={
                selected === 3
                  ? { border: "2px solid #0077F0", background: "#FFFFFF" }
                  : {}
              }
            >
              <input
                type="radio"
                name="med"
                id="medi3"
                onChange={() => setselected(3)}
              />
              <label for="medi3">25mg $3.75/per dose</label>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.stepDiv} style={{ height: "305px" }}>
        <div className={Styles.stepHead}>
          <span className={Styles.step}>STEP 2</span>{" "}
          <span>How many pills (doses) do you want?</span>{" "}
        </div>
        <div className={Styles.steps}>
          <div className={Styles.opts}>
            <div
              style={
                selected2 === 1
                  ? { border: "2px solid #0077F0", background: "#FFFFFF" }
                  : {}
              }
            >
              <input
                type="radio"
                name="med"
                id="step1"
                onChange={() => setselected2(1)}
              />
              <label for="step1">25mg $3.75/per dose</label>{" "}
            </div>
            <div
              style={
                selected2 === 2
                  ? {
                      border: "2px solid #0077F0",
                      background: "#FFFFFF",
                      justifyContent: "space-between",
                    }
                  : { justifyContent: "space-between" }
              }
            >
              {" "}
              <span>
                <input
                  type="radio"
                  name="med"
                  id="step2"
                  onChange={() => setselected2(2)}
                />
                <label for="step2">25mg $3.75/per dose </label>
              </span>{" "}
              <Image src={arrow}></Image>{" "}
            </div>
            <div
              style={
                selected2 === 3
                  ? { border: "2px solid #0077F0", background: "#FFFFFF" }
                  : {}
              }
            >
              <input
                type="radio"
                name="med"
                id="step3"
                onChange={() => setselected2(3)}
              />
              <label for="step3">25mg $3.75/per dose</label>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.summarySec}>
        <div className={Styles.summaryDesc}>
          <h2>Based on your selections, here is the summary of your Order:</h2>
        </div>
        <div className={Styles.summary}>
          <div className={Styles.summaryHead}>Order Summary</div>
          <div className={Styles.bulletDiv}>
            <ul>
              <span className={Styles.topBlock}>sw</span>

              <li className={Styles.lii}>
                12 pills/ monthly (cancel or pause anytime){" "}
              </li>
              <li className={Styles.lii}>$5.75/ per dose (pill) </li>
              <li className={Styles.lii}>
                {" "}
                VIP 25% discount has been applied (Normally $92.00){" "}
              </li>
              <li className={Styles.lii}>VIP Rushed Shipping </li>

              <li className={Styles.lii}>Total $69.00 today</li>

              <li className={Styles.lii}>
                Rebills Monthly for $69.00 every 30 days. (cancel or pause
                anytime)
              </li>
              <li className={Styles.lii}>
                Easily change dosage by simply calling us or through your online
                login – you will create after checkout{" "}
              </li>
              <li className={Styles.lii}>
                VIP Phone Number – 1-888-534-8977 for any assistance{" "}
              </li>

              <span className={Styles.block}>sfffw</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
