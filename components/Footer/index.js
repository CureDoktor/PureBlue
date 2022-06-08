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
    <div>
      <main className={styles.main}></main>
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
            <Link href="tel:1-800-234-7654">
              <a className={styles.number}>1-800-234-7654</a>
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
