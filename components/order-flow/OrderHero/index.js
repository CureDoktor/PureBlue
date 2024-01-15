import Image from "next/image";

import styles from "./styles.module.scss";

export default function OrderHero(props) {
  return (
    <div className={styles.container}>
      <div className={styles.sec1}>
        <div>
          <h1 className={styles.mainHeading}>COMPLETE YOUR ORDER</h1>
        </div>
        <div className={styles.imgContainer}>
          <div>
            <h1>Get Genuine ED Pills Now</h1>
            <ul className={styles.ul}>
              <li>✓ 100% Online Service</li>
              <li>✓ No Appointment Needed</li>
              <li>✓ No Doctor’s fees – No Hidden Charges</li>
              <li>✓ Free 2-day Rushed Shipping</li>
              <li></li>
            </ul>
          </div>
          <div className={styles.imgDiv}>
            <Image
              className={styles.heroImg}
              src="/assets/order/orderHeroImg.png"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
