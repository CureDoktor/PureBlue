import Head from "next/head";
import Link from "next/link";
import styles from "./styles.module.scss";
import {
  Col,
  Container,
  FormSelect,
  Image,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Row,
} from "react-bootstrap";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "none" }}>
      <div className="container">
        <main style={{ padding: "20px" }} className={styles.main}>
          To obtain ED treatments, one must undergo an online consultation with
          a healthcare provider and receive a prescription. The cost per dose is
          determined by the product and subscription plan selected. Lions Pride
          USA LLC is not affiliated with any manufacturers of the Prescription
          Medications mentioned, and the trademarks and logos belong to their
          respective owners. Lions Pride USA LLC does not provide advice,
          endorsements, or recommendations for any specific prescription drug,
          pharmacy, or other information. It is advised to seek medical advice
          before making any changes to medication or prescription. Lions Pride
          USA LLC is not an insurance provider or Medicaid/Medicare prescription
          drug plan. Users must pay the price pres ented during the checkout
          process.
        </main>
      </div>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.imageContainer}>
            <Image
              src="/assets/homepage/logo-footer.png"
              height={45}
              width={210}
              fluid
              className={styles.image}
            />
          </div>
          <div className={styles.telephone}>
            <p>QUESTIONS?</p>
            <Link href="tel:1-888-534-8977">
              <a className={styles.number}>1-888-534-8977</a>
            </Link>
          </div>
          <Container>
            <Row className={styles.footerRow}>
              <div className={styles.links}>
                <Link className={styles.link} href="/">
                  <a>Home</a>
                </Link>
                <Link className={styles.link} href="/about">
                  <a>About Us</a>
                </Link>
                <Link className={styles.link} href="/faq">
                  <a>FAQs</a>
                </Link>
                <Link className={styles.link} href="/contact">
                  <a>Contact Us</a>
                </Link>
                <Link className={styles.link} href="/login">
                  <a>LOGIN</a>
                </Link>
                <Link className={styles.link} href="/telehealth">
                  <a>Telehealth</a>
                </Link>
                <Link className={styles.link} href="/terms">
                  <a>Terms of Use</a>
                </Link>
                <Link className={styles.link} href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </div>
            </Row>
            <p className={styles.copyright}>
              PureBlue. © 2022. All Rights Reserved
            </p>
          </Container>
        </div>
      </footer>
    </div>
  );
}
