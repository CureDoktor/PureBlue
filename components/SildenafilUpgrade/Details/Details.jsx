import PackageAd from "../../Common/PackageAd";
import ServiceBox from "../../Common/ServiceBox";
import UpgradePkg from "../../Common/UpgradePkg/UpgradePkg";
import styles from "./Details.styles.module.scss";
const Details = () => {
  const upgradeArray = [
    {
      id: 1,
      title: "3 Month Package",
      tBox: "/assets/pageThree/upgradePkg/light.png",
      doses: `<strong>12 doses</strong> of 25.0mg Sildenafil (oral - tablet)`,
      savings: `10% Savings <br/><strong>($9.6 discount)</strong>`,
      additional: `Only pay an additional <br/><strong>$86.40</strong>`,
    },
    {
      id: 2,
      title: "6 Month Package",
      tBox: "/assets/pageThree/upgradePkg/brown.png",
      doses: `<strong >24 doses</strong> of 25.0mg Sildenafil (oral - tablet)`,
      savings: `20% Savings <br/><strong>($48 discount)</strong>`,
      additional: `Only pay an additional <br/><strong>$192.00</strong>`,
    },
    {
      id: 3,
      title: "12 Month Package",
      doses: `<strong>48 doses</strong> of 25.0mg Sildenafil (oral - tablet)`,
      savings: `30% Savings <br/><strong>($158.4 discount)</strong>`,
      additional: `Only pay an additional <strong>$369.60</strong>`,
      tBox: "/assets/pageThree/upgradePkg/light.png",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <UpgradePkg upgradeArray={upgradeArray} />

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

      <ServiceBox />

      <PackageAd />
    </div>
  );
};

export default Details;
