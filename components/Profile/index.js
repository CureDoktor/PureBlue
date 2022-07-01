import Link from "next/link";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Form from "react-bootstrap/Form";
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

export default function Profile() {
  return (
    <div className={styles.membership}>
      <Row>
        <Col md={6}>
          <div className={styles.rectangle}>
            <h2>Personal Information</h2>
            <h1>
              <b>John Irwin Achas</b>
            </h1>
            <p>
              <b>Email:</b> Irwinachas@gmail.com
            </p>
            <p>
              <b>Phone Number:</b> (631)355-4940
            </p>
            <p>
              <b>DOB:</b> 01 12 1977
            </p>
            <p>
              <b>Password:</b> ********
            </p>
          </div>
          <div className={styles.rectangle}>
            <h2>Notifications</h2>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="SMS Notifications"
              />
              <Form.Check
                type="switch"
                label="Marketing E-mails"
                id="disabled-custom-switch"
              />
              <div className={styles.buttonHolder}>
                <br />
                <br />
                <Button className={styles.buttons}>Save</Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.rectangleTwo}>
            <p>SHIPPING INFO</p>
            <p className={styles.highlight}>John Irwin Achas</p>
            <p>(631)355-4940</p>
            <p>One icon</p>
            <p>Foothill Farms, CA, 92610</p>
          </div>
          <div className={styles.rectangleTwo}>
            <p>BILLING INFO</p>
            <p className={styles.highlight}>Marie Gaviola</p>
            <p>100 Riviera Dr S Massapequa</p>
            <p>Massapequa, NY, 11758</p>
          </div>
          <div className={styles.rectangleTwo}>
            <p>PAYMENT INFO</p>
            <div className={styles.buttonHolder}>
              <Button className={styles.buttons}>Pending</Button>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>CC#:</b>
                </Col>
                <Col>
                  <p>5474********6349</p>
                </Col>
              </Row>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>Exp. Date :</b>
                </Col>
                <Col>
                  <p> 08/26</p>
                </Col>
              </Row>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>CVC :</b>
                </Col>
                <Col>
                  <p>****</p>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
