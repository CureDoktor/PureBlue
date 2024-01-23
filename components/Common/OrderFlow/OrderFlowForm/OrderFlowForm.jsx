import React, { useState } from "react";
import styles from "./OrderFlowForm.styles.module.scss";

const OrderFlowForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <div className={styles.secureInfoForm}>
          <div className={styles.group}>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="Address" />
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="City" />
            </div>
            <div className={styles.inputContainer}>
              <select className={styles.selectContainer}>
                <option>State</option>
              </select>
              <input type="number" placeholder="Zip" />
            </div>
            <div className={styles.input}>
              {/* <input type="text" placeholder="Country" /> */}
              <select className={styles.selectContainer}>
                <option>State</option>
              </select>
            </div>
            <div className={styles.input}>
              <input type="number" placeholder="Phone" />
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                Text me updates about PureBlue Products & services!
              </label>
            </div>
          </div>
        </div>
        <div className={styles.btnContainer} onClick={() => setIsOpen(true)}>
          <button>
            <span>Save and continue</span>
          </button>
        </div>

        {isOpen && <DiscountModal setIsOpen={setIsOpen} />}
      </div>
    </>
  );
};

export default OrderFlowForm;
