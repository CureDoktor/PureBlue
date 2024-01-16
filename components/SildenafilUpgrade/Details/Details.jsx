import PackageAd from "../../Common/PackageAd";
import ServiceBox from "../../Common/ServiceBox";
import UpgradePkg from "../../Common/UpgradePkg/UpgradePkg";
import styles from "./Details.styles.module.scss";
const Details = () => {
  const upgradeArray = [
    {
      id: 1,
      title: "3 Month Package",
      tBox: "/assets/pageThree/upgradePkg/light.svg",
      doses: `12 doses of 25.0mg Sildenafil (oral - tablet)`,
      savings: "10% Savings ($9.6 discount)",
      additional: "Only pay an additional $86.40",
    },
    {
      id: 2,
      title: "6 Month Package",
      tBox: "/assets/pageThree/upgradePkg/brown.svg",
      doses: "24 doses of 25.0mg Sildenafil (oral - tablet)",
      savings: "20% Savings ($48 discount)",
      additional: "Only pay an additional $192.00",
    },
    {
      id: 3,
      title: "12 Month Package",
      doses: "48 doses of 25.0mg Sildenafil (oral - tablet)",
      savings: "30% Savings ($158.4 discount)",
      additional: "Only pay an additional $369.60",
      tBox: "/assets/pageThree/upgradePkg/light.svg",
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
