import Link from "next/link";
import Head from "next/head";
import React from "react";
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
  const sentToLogin = () => {
    props.logout();
  };
  return (
    <>
      <Navbar sticky="top" expand="lg" className={styles.container}>
        <Container className={styles.navbar}>
          <Link href="/">
            <Image
              src="/assets/homepage/logo.png"
              alt="Proselect logo"
              className={styles.logo}
            />
          </Link>
          <div className={styles.tablet}>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ marginLeft: 20, borderRadius: 15 }}
              className={styles.toggle}
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className={styles.collapse}>
            <Nav className={styles.nav}>
              {/* <NavDropdown
              title={
                <>
                  Test one
                  <CaretDownFill style={{ fontSize: 12, marginLeft: 5 }} />
                </>
              }
              id="basic-nav-dropdown"
              className={styles.link}
            >
              <Link href="/car-insurance" passHref>
                <NavDropdown.Item className={styles.dropdownLink}>
                  Test one
                </NavDropdown.Item>
              </Link>
              <Link href="/company-insurance" passHref>
                <NavDropdown.Item className={styles.dropdownLink}>
                  Test one
                </NavDropdown.Item>
              </Link>
              <Link href="/household-insurance" passHref>
                <NavDropdown.Item className={styles.dropdownLink}>
                  Test one
                </NavDropdown.Item> 
              </Link>
              <Link href="/legal-expenses-insurance" passHref>
                <NavDropdown.Item className={styles.dropdownLink}>
                  Test one
                </NavDropdown.Item>
              </Link>
              <Link href="/life-insurance" passHref>
                <NavDropdown.Item className={styles.dropdownLink}>
                  Test one  
                </NavDropdown.Item>
              </Link>
            </NavDropdown> */}
              <Link className={styles.link} href="/" passHref>
                Home
              </Link>
              <Link className={styles.link} href="/about" passHref>
                About Us
              </Link>
              <Link className={styles.link} href="/faq" passHref>
                FAQs
              </Link>
              <Link className={styles.link} href="/contact" passHref>
                Contact
              </Link>
              {props.header ? (
                <Link className={styles.link} href="/account" passHref>
                  Account
                </Link>
              ) : (
                ""
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

              {/* {props.header ? (
                <Button onClick={sentToLogin}>LOGOUT</Button>
              ) : (
                ""
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
