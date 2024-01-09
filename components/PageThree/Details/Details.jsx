import UpgradePkg from "../UpgradePkg";
import styles from "./Details.styles.module.scss";
const Details = () => {
  let icon = "/assets/pageThree/details/check.png";
  const serviceArr = [
    { name: "Safe and Effective", icon },
    { name: "Superior Confidence", icon },
    { name: "U.S.-made Medication", icon },
  ];
  return (
    <div className={styles.mainContainer}>
      <UpgradePkg />

      <div className={styles.optOutText}>
        <p>
          No, do not upgrade my order. Proceed with my monthly treatment plan.
        </p>
      </div>

      <div className={styles.para}>
        <p>
          Your upgrade today grants you incredible <span>SAVINGS</span>, plus
          the <span>CONVENIENCE</span> of having{" "}
          <span>
            FDA-approved Generic Viagra (Sildenafil Citrate oral – tablet)
          </span>
          on hand and <span>READY</span> for your E.D. needs in the coming
          months!
        </p>
      </div>

      <section className={styles.service}>
        {serviceArr.map((items, index) => (
          <div key={index} className={styles.serviceBox}>
            <img src={items.icon} alt="icon" />
            <p>{items.name}</p>
          </div>
        ))}
      </section>

      <section className={styles.packageAd}>
        <div>
          <img src="/assets/pageThree/details/money.png" alt="ad" />
        </div>
        <div>
          <p className={styles.pColor}>
            Get the BEST VALUE for your money and upgrade now to a BIGGER
            package!
          </p>
          <p>
            PureBlue’s upgraded packages ensure that you are READY for action,
            anytime – anywhere!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Details;
