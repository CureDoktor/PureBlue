import Link from "next/link";
import styles from "./styles.module.scss";
import LegitScriptCertificate from "../LegitScriptCertificate";
import { Container, Image, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { searchParamsUrl } from "../searchParams";
import React from "react";

export default function FooterNew() {
  const router = useRouter();
  const currentPathname = router.asPath;
  const currentYear = new Date().getFullYear();
  const url = searchParamsUrl();
  return (
      <>
        <footer className={`${styles['footer']} w-100 d-flex`}>
          <Container className={`${styles['container']}`}>
            <div className={`${styles['footer-top']} d-flex flex-wrap justify-content-between`}>
              <div className={`${styles['footer-top-left']} w-100`}>
                <div className={`w-100 d-flex flex-wrap justify-content-between`}>
                  <div className={`${styles['footer-logo']}`}>
                    <Image
                        src="/assets/footerNew/logo-white.png"
                    />
                  </div>
                  <div className={`${styles['footer-tel']} fw-bold d-lg-none`}> QUESTIONS?<br />
                    <a href="tel:1-888-534-8977">1-888-534-8977</a> </div>
                </div>
                <p>Your fast and affordable source for ED treatment.
                  Delivered discreetly to your door.</p>
                <div className={`w-100 d-flex flex-wrap justify-content-between`}>
                  <div className={`${styles['footer-tel']} fw-bold d-none d-lg-block`}> QUESTIONS?<br /><a href="tel:1-888-534-8977">1-888-534-8977</a> </div>
                  <div className={`${styles['card-box']}`}>
                    <div className={`${styles['title']} fw-bold`}>PAYMENT METHODS</div>
                    <div className={`${styles['card-img']}`}>
                      <Image
                          src="/assets/footerNew/card.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles['footer-top-right']} w-100`}>
                <div className={`w-100 d-flex flex-wrap justify-content-between`}>
                  <div className={`${styles['menu-col']}`}>
                    <div className={`${styles['title']} fw-bold`}>Our Site</div>
                    <div className={`${styles['footer-nav']}`}>
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">FAQs</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles['menu-col']}`}>
                    <div className={`${styles['title']} fw-bold`}>About</div>
                    <div className={`${styles['footer-nav']}`}>
                      <ul>
                        <li><a href="#">About PureBlue</a></li>
                        <li><a href="#">Terms And Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Site Map</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${styles['cerified-logo']} d-block`}>
                  <Image
                      src="/assets/footerNew/cerified-logo.png"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles['footer-bottom']} w-100 d-block text-center`}> PureBlue. &copy; { currentYear }. All Rights Reserved </div>
          </Container>
        </footer>
      </>
  );
}
