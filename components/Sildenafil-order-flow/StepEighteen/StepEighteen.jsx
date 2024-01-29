import React from "react";
import styles from "./StepEighteen.styles.module.scss";

const StepEighteen = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <h6>Thank you for your order!</h6>
        <p>Your ID has been successfully submitted</p>
      </div>
      <div className={styles.paraDiv}>
        <p className={styles.para}>
          Within the next <span>24 hours</span>, one of our dedicated doctors
          will thoroughly review the details of your order, ensuring that it
          meets all the necessary requirements.
        </p>
        <p className={styles.para}>
          Once the doctor reviews and approves your medical profile you will
          receive an email confirming your prescription.
        </p>
        <p className={styles.para}>
          If there are any questions or concerns, the doctor will reach out to
          you immediately through text or email. Should you need any assistance
          or have any inquiries, please feel free to contact our customer
          support team at <span>info@trypureblue.com</span> or call us at
          <span> 1-888-534-8977.</span>
        </p>
      </div>
    </div>
  );
};

export default StepEighteen;
