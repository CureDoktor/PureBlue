import Link from "next/link";
import styles from "./styles.module.scss";
import LegitScriptCertificate from "../LegitScriptCertificate";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";

export default function Footer() {
  let imgArr = [
    { imgUrl: "/assets/amex.jpg" },
    { imgUrl: "/assets/discover.jpg" },
    { imgUrl: "/assets/mastercard.jpg" },
    { imgUrl: "/assets/visa.jpg" },
  ];
  return (
    <div style={{ backgroundColor: "none" }}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className="">
            <div className={styles.imageContainer}>
              <Image
                src="/assets/footer/logo.png"
                height={45}
                width={210}
                fluid
                className={styles.image}
              />
              <p>
                Your fast and affordable source for ED treatment.
                <br /> Delivered discreetly to your door.
              </p>
            </div>
            <div className={styles.telephone}>
              <div>
                <p>QUESTIONS?</p>
                <Link href="tel:1-888-534-8977">
                  <a className={styles.number}>1-888-534-8977</a>
                </Link>
              </div>
              <div>
                <p>PAYMENT METHODS</p>
                <div className="m-auto">
                  <div className="pb-4 d-block">
                    {imgArr.map((item, index) => {
                      return (
                        <Image
                          key={index}
                          src={item.imgUrl}
                          height={40}
                          width={70}
                          className="pe-1"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.linkContainer}>
            <Row className="justify-content-md-center">
              <Col md={6} className={styles.links}>
                <h5>Our Site</h5>
                <Nav className="flex-column">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/faqs">FAQs</Nav.Link>
                </Nav>
              </Col>
              <Col md={6} className={styles.links}>
                <h5>About</h5>
                <Nav className="flex-column">
                  <Nav.Link href="/about">About Pureblue</Nav.Link>
                  <Nav.Link href="/terms">Terms And Conditions</Nav.Link>
                  <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
                  <Nav.Link href="/sitemap">Site Map</Nav.Link>
                </Nav>
              </Col>
            </Row>

            <Row className={`my-3 ${styles.certificate}`}>
              <Col md={12}>
                <LegitScriptCertificate />
              </Col>
            </Row>
          </div>
        </div>

        <p className={styles.copyright}>
          PureBlue. © 2022. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

{
  /* <div className="container">
        <main style={{ padding: "20px" }} className={styles.main}>
          To obtain ED treatments, one must undergo an online consultation with
          a healthcare provider and receive a prescription. The cost per dose is
          determined by the product and subscription plan selected. Pure Blue
          LLC is not affiliated with any manufacturers of the Prescription
          Medications mentioned, and the trademarks and logos belong to their
          respective owners. Pure Blue LLC does not provide advice,
          endorsements, or recommendations for any specific prescription drug,
          pharmacy, or other information. It is advised to seek medical advice
          before making any changes to medication or prescription. Pure Blue LLC
          is not an insurance provider or Medicaid/Medicare prescription drug
          plan. Users must pay the price presented during the checkout process.
        </main>
      </div> */
}
{
  /* <Container>
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
          </Container> */
}
