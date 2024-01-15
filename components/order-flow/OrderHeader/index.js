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
export default function OrderHeader(props) {
  const router = useRouter();
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
                src="/assets/order/WhiteLogo.png"
                alt="Proselect logo"
                className={styles.logo}
              />
            </a>
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
              <Link href="/order-flow" passHref>
                <Nav.Link className={styles.link}>order</Nav.Link>
              </Link>
              {props.header ? (
                <Link href="/account" passHref>
                  <Nav.Link className={styles.link}>Account</Nav.Link>
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
