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
import { searchParamsUrl } from "../searchParams";
export default function Header(props) {
  const router = useRouter();
  const sentToLogin = () => {
    props.logout();
  };
  return (
    <>
      <Navbar sticky="top" expand="lg" className={styles.container}>
        <Container className={styles.navbar}>
          <Link href={"/" + searchParamsUrl()}>
            <Image
              src="/assets/homepage/logo.png"
              alt="Proselect logo"
              className={styles.logo}
            />
          </Link>
          <div className={styles.tablet}>
            <Navbar.Toggle>
              <img
                aria-controls="basic-navbar-nav"
                src="/assets/moreOptionsIcon.png"
                alt="Proselect logo"
                className={styles.toggle}
              />
            </Navbar.Toggle>
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
              <Link
                className={styles.link}
                href={"/" + +searchParamsUrl()}
                passHref
              >
                Home
              </Link>
              <Link
                className={styles.link}
                href={"/about" + searchParamsUrl()}
                passHref
              >
                About Us
              </Link>
              <Link
                className={styles.link}
                href={"/faq" + searchParamsUrl()}
                passHref
              >
                FAQs
              </Link>
              <Link
                className={styles.link}
                href={"/contact" + searchParamsUrl()}
                passHref
              >
                Contact
              </Link>
              {props.header ? (
                <Link
                  className={styles.link}
                  href={"/account" + searchParamsUrl()}
                  passHref
                >
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
