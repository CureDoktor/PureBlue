import Link from "next/link";
import styles from "./styles.module.scss";
import LegitScriptCertificate from "../LegitScriptCertificate";
import { Container, Image, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { searchParamsUrl } from "../searchParams";

export default function Footer() {
  const router = useRouter();
  const currentPathname = router.asPath;
  const currentYear = new Date().getFullYear();
  return (
    <div style={{ backgroundColor: "none" }}>
      {currentPathname != "/sildenafil-order-flow/" &&
        currentPathname != "/questions/" &&
        currentPathname != "/landing-page-v2/" && (
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
            <Link className={styles.number} href="tel:1-888-534-8977">
              1-888-534-8977
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
                <Link className={styles.link} href={"/" + searchParamsUrl()}>
                  Home
                </Link>
                <Link
                  className={styles.link}
                  href={"/about" + searchParamsUrl()}
                >
                  About Us
                </Link>
                <Link className={styles.link} href={"/faq" + searchParamsUrl()}>
                  FAQs
                </Link>
                <Link
                  className={styles.link}
                  href={"/contact" + searchParamsUrl()}
                >
                  Contact Us
                </Link>
                <Link
                  className={styles.link}
                  href={"/login" + searchParamsUrl()}
                >
                  LOGIN
                </Link>
                <Link
                  className={styles.link}
                  href={"/telehealth" + searchParamsUrl()}
                >
                  Telehealth
                </Link>
                <Link
                  className={styles.link}
                  href={"/terms" + searchParamsUrl()}
                >
                  Terms of Use
                </Link>
                <Link
                  className={styles.link}
                  href={"/privacy" + searchParamsUrl()}
                >
                  Privacy Policy
                </Link>
              </div>
            </Row>
            <p className={styles.copyright}>
              PureBlue. © {currentYear}. All Rights Reserved
            </p>
          </Container>
        </div>
      </footer>
    </div>
  );
}
