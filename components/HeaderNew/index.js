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
export default function HeaderNew(props) {
  const router = useRouter();
  const sentToLogin = () => {
    props.logout();
  };
  return (
    <>
      <header className={`w-100 d-block ${styles['header']}`}>
        <Container>
          <div className={`d-flex flex-wrap justify-content-between`}>
            <div className={styles['logo']}>
              <Link href={"/"}>
                <Image
                    src="/assets/headerNew/logo.png"
                    alt="Proselect logo"
                    className={styles.logo}
                />
              </Link>
            </div>
            <div className={styles['header-tel']}>QUESTIONS?<br/>
              <a href="tel: 1-888-534-8977" className={`fw-bold`}>1-888-534-8977</a></div>
          </div>
        </Container>
      </header>
    </>
  );
}
