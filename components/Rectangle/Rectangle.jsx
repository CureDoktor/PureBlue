import React from "react";
import style from "./style.module.scss";
const Rectangle = () => {
  return (
    <div className={style.Rectangle}>
      <div>
        <img src="/assets/rectangle/pen.png" alt="image" />
        <p>
          <b>Submitted Medical Profile</b>
        </p>
      </div>
      <div className={style.line}></div>
      <div>
        <img src="/assets/rectangle/id.png" alt="image" />
        <p>
          <b>Verified Identity</b>
        </p>
      </div>
      <div className={style.line}></div>
      <div>
        <img src="/assets/rectangle/time.png" alt="image" />
        <p className={style.len}>
          <b>
            Prescription Approved or Modified by Physician
            <span className={style.color}> 24-48 hours</span>
          </b>
        </p>
      </div>
      <div className={style.line}></div>
      <div>
        <img src="/assets/rectangle/truck.png" alt="image" />
        <p className={style.len2}>
          <b>
            Order Shipped !{" "}
            <span className={style.color1}>5-7 days after approval!</span>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Rectangle;
