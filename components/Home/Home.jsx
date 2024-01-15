import { Container } from "react-bootstrap";
import CardSection from "./CardSection";
import ButtonSection from "./ButtonSection";
import styles from "./Home.styles.module.scss";
import Frequently from "./FrequentlyAsked";
import Health from "./Health";
import Popular from "./Popular";
import Service from "./Service";
import Treatment from "./Treatment";
import Explore from "./Explore";
import SearchButton from "./SearchButton";
const HomePage = () => {
  return (
    <div>
      <Container className={styles.container}>
        <div className="my-5">
          <h1 className={styles.heading}>
            Your #1 Source for
            <span className="mx-2">Branded and Generic Medication</span>
          </h1>
          <p className="text-secondary mt-3 fw-medium">
            Your free online visit starts here. Tell us what we can help you
            with.
          </p>
          <SearchButton className="bg-primary" span="Find my treatment" />
        </div>
      </Container>
      <section className={styles.cardSection}>
        <Container className={styles.container}>
          <CardSection />
          <ButtonSection />
        </Container>
      </section>

      <section className={styles.imageContainer}></section>
      <div className={styles.explore}>
        <Explore />
      </div>

      <div>
        <Treatment />
      </div>
      <div>
        <Health />
      </div>

      <div>
        <Popular />
      </div>
      <div className={styles.service}>
        <Service />
      </div>
      <div style={{ background: "#F7F7F7" }}>
        <Frequently />
      </div>

      <Container className={styles.container}>
        <div className={`my-5 ${styles.lastSection}`}>
          <h1>
            <span>PureBlue </span>
            makes men’s health simpler, more convenient, and affordable.
          </h1>

          <SearchButton className="bg-dark" span="Explore treatments" />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;