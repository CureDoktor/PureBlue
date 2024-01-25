import Link from "next/link";
import styles from "./styles.module.scss";
import LegitScriptCertificate from "../LegitScriptCertificate";
import { Container, Image, Row } from "react-bootstrap";
import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  const currentPathname = router.asPath;
  return (
    <div style={{ backgroundColor: "none" }}>
      {currentPathname != "/sildenafil-order-flow/" &&
        currentPathname != "/questions/" && (
          <div className="container">
            <main style={{ padding: "20px" }} className={styles.main}>
              To obtain ED treatments, one must undergo an online consultation
              with a healthcare provider and receive a prescription. The cost
              per dose is determined by the product and subscription plan
              selected. Pure Blue LLC is not affiliated with any manufacturers
              of the Prescription Medications mentioned, and the trademarks and
              logos belong to their respective owners. Pure Blue LLC does not
              provide advice, endorsements, or recommendations for any specific
              prescription drug, pharmacy, or other information. It is advised
              to seek medical advice before making any changes to medication or
              prescription. Pure Blue LLC is not an insurance provider or
              Medicaid/Medicare prescription drug plan. Users must pay the price
              presented during the checkout process.
            </main>
          </div>
        )}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.imageContainer}>
            <LegitScriptCertificate />
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
            <p>PAYMENT METHODS</p>
            <div className="m-auto">
              <div className="pb-4 d-block">
                <Image
                  src="/assets/amex.jpg"
                  height={40}
                  width={70}
                  className="pe-1"
                />
                <Image
                  src="/assets/discover.jpg"
                  height={40}
                  width={70}
                  className="pe-1"
                />
                <Image
                  src="/assets/mastercard.jpg"
                  height={40}
                  width={70}
                  className="pe-1"
                />
                <Image src="/assets/visa.jpg" height={40} width={70} />
              </div>
            </div>
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
