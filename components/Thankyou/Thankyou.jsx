import React from "react";
import styles from "./style.module.scss";
import Rectangle from "../Rectangle";
export const Thankyou=() =>{
  const icon = "/assets/thankyou/check.png";
  const checkArr = [
    {
      para: `Messages from your doctor for your <strong >prescription</strong> and <strong>medical profile</strong>`,
      icon,
    },
    { para: "<strong>Order Confirmation</strong>", icon },
    {
      para: "Order <strong>Shipment configuration</strong>  and tracking number",
      icon,
    },
  ];

  const data = checkArr.map((item, ind) => ({
    para: <span dangerouslySetInnerHTML={{ __html: item.para }} />,
    icon: item.icon,
  }));

  return (
    <>
    <div className={styles.mainContainer}>
      <div>
        <h2 className={styles.text}>
          <b>Thank You For Your Order !</b>
        </h2>
        <h5 className={styles.text1}>
          Your ID has been successfully submitted
        </h5>
      </div>

      <p className={styles.para}>
        Within the next{" "}
        <span className={styles.color}>
          <b>24 hours</b>
        </span>
        , one of our dedicated doctors will throughly review the details of
        your order, ensuring that it meets all the necessary requirements.
      </p>
      <p className={styles.para}>
        Once the doctor reviews and approves your medical profile you will
        receive an email confirming your prescription.
      </p>
      <p className={styles.para}>
        If there are any questions or concerns, the doctor will reach out to you
        immediately through text or email. Should you need any assistance or
        have any inquiries, please feel free to contact our customer support
        team at
        <span className={styles.color}>
          <b>info@trypureblue.com</b>
        </span>
        or
        <span className={styles.color}>
          <b>call us at 1-888-534-8977</b>
        </span>
        .
      </p>

      <div className={styles.para2}>
        <p className={styles.email}>Check your email or text inbox for:</p>

        <ul>
          {data.map((item, ind) => (
            <div key={ind} className={styles.li}>
              {/* <span>
              </span> */}
                <img src={item.icon} />
              <li>{item.para}</li>
            </div>
          ))}
        </ul>
      </div>

    </div>
    <div>
      <Rectangle />
      </div>
    </>
  );
}

export default Thankyou;
