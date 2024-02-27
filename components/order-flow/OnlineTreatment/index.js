import React from "react";
import styles from "./styles.module.scss";
import modelPic from "../../../public/assets/order/treatment.png";
import logo1 from "../../../public/assets/order/100 satisfy.png";
import logo2 from "../../../public/assets/order/Made in USA.png";
import blueTick from "../../../public/assets/order/check-mark (2).png";

import Image from "next/image";
export default function OnlineTreatment(props) {
  return (
    <div className={styles.mainSection}>
      <div className={styles.secA}>
        <Image src={modelPic} className={styles.modelImg}></Image>
      </div>
      <div className={styles.secB}>
        <div className={styles.imageContainer}>
          <Image src={logo1}></Image>
          <Image src={logo2}></Image>
        </div>
        <div>
          <h1 className={styles.heading}>Safe. Convenient. Affordable. </h1>
          <h1 className={styles.heading}>
            The #1 Choice for Online ED Treatments in the US
          </h1>
        </div>
        <div>
          <p className={styles.subHeading}>
            PureBlue simplifies ED treatments to give you unmatched sexual
            confidence – all day, every day.
          </p>
        </div>
        <div>
          <p className={styles.desc}>
            With PureBlue, treating ED has never been simpler. Through our
            network of US-licensed physicians, US-based pharmacies, and
            American-made medication, you have all you need to treat without
            leaving the comfort and privacy of your home.
          </p>
          <p className={styles.desc}>
            PureBlue offers affordable generic medication, which saves you up to
            90% on ED medication costs, with FREE online consultation with
            US-licensed physicians and FREE overnight discreet shipping. No
            doctor’s fees, pharmacy fees, or refill fees. With PureBlue, you
            only pay for your medication!
          </p>
        </div>
        <div className={styles.tiksDiv}>
          <div className={styles.tiks}>
            <div className={styles.imgDivv}>
              <Image src={blueTick}></Image>
            </div>
            <div className={styles.text}>No Hidden Fees</div>
          </div>
          <div className={styles.tiks}>
            <div className={styles.imgDivv}>
              <Image src={blueTick}></Image>
            </div>
            <div className={styles.text}>
              Save up to 90% vs brand-name medication
            </div>
          </div>
          <div className={styles.tiks}>
            <div className={styles.imgDivv}>
              <Image src={blueTick}></Image>
            </div>
            <div className={styles.text}>
              PureGeneric Certified – 100% Generic Viagra and Viagra
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
