import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
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
import { CaretDownFill, List } from "react-bootstrap-icons";
import styles from "./styles.module.scss";
import Router, { useRouter } from "next/router";
export default function Header(props) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sentToLogin = () => {
    props.logout();
  };
  return (
    <>
      <Navbar sticky="top" expand="lg" className={styles.container}>
        <Container className={styles.navbar}>
          <Link href="/">
            <a>
              <Image
                src="/assets/homepage/logo.png"
                alt="Proselect logo"
                className={styles.logo}
              />
            </a>
          </Link>
          {/* <div className={styles.tablet}>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ marginLeft: 20, borderRadius: 15 }}
              className={styles.toggle}
            />
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className={styles.collapse}>
            <Nav className={styles.nav}>
              <Link href="/" passHref>
                <Nav.Link className={styles.link}>Home</Nav.Link>
              </Link>
              <Link href="/about" passHref>
                <Nav.Link className={styles.link}>About Us</Nav.Link>
              </Link>
              <Link href="/faq" passHref>
                <Nav.Link className={styles.link}>FAQs</Nav.Link>
              </Link>
              <Link href="/contact" passHref>
                <Nav.Link className={styles.link}>Contact</Nav.Link>
              </Link>
              {props.header && (
                <Link href="/account" passHref>
                  <Nav.Link className={styles.link}>Account</Nav.Link>
                </Link>
              )}
              {props.header ? (
                <Button onClick={sentToLogin}>
                  {props.header ? "LOGOUT" : "LOGIN"}
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  LOGIN
                </Button>
              )}
            </Nav>
          </Navbar.Collapse> */}

          {/* --------------custom header----------  */}
          <section className={styles.headLinks}>
            <img src="/assets/header/account.png" />
            <img src="/assets/header/cart.png" />
            <img
              src="/assets/header/hamburger.png"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.hamburger}
            />
            {isMenuOpen && (
              <div className={isMenuOpen ? styles.menuActive : styles.menu}>
                <Link href="/" passHref>
                  <a
                    className={styles.menuItem}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/about" passHref>
                  <a
                    className={styles.menuItem}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </a>
                </Link>
                <Link href="/faq" passHref>
                  <a
                    className={styles.menuItem}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQs
                  </a>
                </Link>
                <Link href="/contact" passHref>
                  <a
                    className={styles.menuItem}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </Link>
                {props.header && (
                  <Link href="/account" passHref>
                    <a
                      className={styles.menuItem}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Account
                    </a>
                  </Link>
                )}
                {props.header ? (
                  <Button
                    className="my-2"
                    onClick={() => {
                      sentToLogin();
                      setIsMenuOpen(false);
                    }}
                  >
                    LOGOUT
                  </Button>
                ) : (
                  <Button
                    className="my-2"
                    onClick={() => {
                      router.push("/login");
                      setIsMenuOpen(false);
                    }}
                  >
                    LOGIN
                  </Button>
                )}
              </div>
            )}
          </section>
        </Container>
      </Navbar>
    </>
  );
}
