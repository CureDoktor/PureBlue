import styles from "./PackageAd.styles.module.scss";

const PackageAd = () => {
  return (
    <section className={styles.packageAd}>
      <div>
        <img src="/assets/pageThree/details/money.png" alt="ad" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.pColor}>
          Get the BEST VALUE for your money and upgrade now to a BIGGER package!
        </p>
        <p>
          PureBlue’s upgraded packages ensure that you are READY for action,
          anytime – anywhere!
        </p>
      </div>
    </section>
  );
};

export default PackageAd;
