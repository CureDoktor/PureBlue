import Link from "next/link";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import {
  Col,
  Container,
  FormSelect,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Row,
} from "react-bootstrap";
import styles from "./styles.module.scss";

export default function Membership() {
  return (
    <div className={styles.membership}>
      <Row>
        <Col md={6}>
          <div className={styles.rectangle}>
            <h2>Treatment</h2>
            <div className="d-flex justify-content-center">
              <Image src="/assets/order/bottle.png" width={87} height={172} />
            </div>
            <p>Tadalafil</p>
            <Button className={styles.buttons}>
              You can't switch plan while order is on Authorization
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.rectangleTwo}>
            <h2>Status</h2>
            <div className={styles.buttonHolder}>
              <Button className={styles.buttons}>Pending</Button>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>Order Status</b>
                </Col>
                <Col>
                  <p>Authorized</p>
                </Col>
              </Row>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>ID Verification</b>
                </Col>
                <Col>
                  <p>Please Upload Your Id</p>
                </Col>
              </Row>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>Medical Status:</b>
                </Col>
                <Col>
                  <p>case_waiting</p>
                </Col>
              </Row>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>Created</b>
                </Col>
                <Col>
                  <p>06-23-2022 15:48:34</p>
                </Col>
              </Row>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>Subscription Status:</b>
                </Col>
                <Col>
                  <p></p>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
