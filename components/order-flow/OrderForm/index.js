import React from "react";
import styles from "./styles.module.scss";
import ForwardIcon from "../../../public/assets/forward.png";
import Button from "../../Button";
import Popup from "../PopupPage";
import Image from "next/image";
import { useState } from "react";
export const OrderForm = () => {
  const [modal, setmodal] = useState(false)
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>START YOUR ORDER</h1>
      <div className={styles.form}>
        <div className={styles.formHead}>
          <h1 className={styles.stepNo}>STEP 1</h1>
          <h1 className={styles.title}>SHIPPING DETAILS</h1>
        </div>
        <div>
          <div className={styles.group}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="First Name (As it appears on your ID)"
              />
              <input
                type="text"
                placeholder="Last Name (As it appears on your ID)"
              />
            </div>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Street Address (Including APT #)"
              />
              <input type="text" placeholder="Street Address 2" />
            </div>
            <div className={styles.combinedContainer}>
              <input
                className={styles.customInput}
                type="text"
                placeholder="Street Address (Including APT #)"
              />
              <div className={styles.customInput2}>
                <select name="shipping" id="cars">
                  <option selected disabled>
                    zipcode
                  </option>
                  <option value="volvo">Canada</option>
                  <option value="saab">Turkey</option>
                  <option value="opel">australia</option>
                  <option value="audi">italy</option>
                </select>
                <input type="text" placeholder="address" />
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <Button variant="gradient">
              CONTINUE TO STEP 2
              <span className={styles.buttonIcon}>
                <Image src={ForwardIcon} alt="Forward icon" layout="fill" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div onClick={()=>setmodal(true)}>
Modal
      </div>
      <Popup isOpen={modal}  onClose={()=>setmodal(false)}></Popup>

    </div>
  );
};
