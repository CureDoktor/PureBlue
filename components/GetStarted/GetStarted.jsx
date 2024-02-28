import styles from "./GetStarted.styles.module.scss";
import Banner from "./Banner";
import Mark from "./Mark";
import Lists from "./Lists";
import ListTwo from "./ListTwo";
import BannerTwo from "./BannerTwo";
import Work from "./Work";
import Frequently from "./FrequentlyAsked";
import Started from "./Started";

const GetStarted = () => {
  return (
    <div>
      <Banner />
      <Mark />
      <Lists />
      <div className={styles.ps}>
        <ListTwo />
        <BannerTwo />
      </div>
      <Work />
      <div style={{ background: "#F7F7F7" }}>
        <Frequently />
      </div>

      <Started />
    </div>
  );
};

export default GetStarted;
