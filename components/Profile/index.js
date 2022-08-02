import Link from "next/link";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { PencilFill } from "react-bootstrap-icons";
import ShipInfo from "../ShipInfo";
import PayInfo from "../PayInfo";
import BillInfo from "../BillInfo";
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
  const [save, setSave] = useState(false);
  const [shipInfo, setShipInfo] = useState(false);
  const [billInfo, setBillInfo] = useState(false);
  const [payInfo, setPayInfo] = useState(false);
  const saveEnable = () => {
    setSave(true);
  };

  const editField = (field, save) => {
    console.log(field, save);
    if (save === 1) {
      if (field === 1) {
        setShipInfo(true);
      } else if (field === 2) {
        setBillInfo(true);
      } else {
        setPayInfo(true);
      }
    } else {
      if (field === 1) {
        setShipInfo(false);
      } else if (field === 2) {
        setBillInfo(false);
      } else {
        setPayInfo(false);
      }
    }
  };

  return (
    <div className={styles.profile}>
      <Row className="ml-0 mr-0">
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
                onChange={saveEnable}
              />
              <Form.Check
                type="switch"
                label="Marketing E-mails"
                id="disabled-custom-switch"
                onChange={saveEnable}
              />
              <div className={styles.buttonHolder}>
                <br />
                <br />
                {save && <Button className={styles.buttons}>Save</Button>}
              </div>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.rectangleTwo}>
            <Row>
              <Col md={9}>
                <p>SHIPPING INFO</p>
                <p className={styles.highlight}>John Irwin Achas</p>
                <p>(631)355-4940</p>
                <p>One icon</p>
                <p>Foothill Farms, CA, 92610</p>
              </Col>
              <Col>
                <Button className={styles.edit} onClick={() => editField(1, 1)}>
                  <PencilFill /> EDIT
                </Button>
              </Col>
            </Row>
            {shipInfo && (
              <ShipInfo
                saveInfo={() => {
                  editField(1, 0);
                }}
              />
            )}
          </div>
          <div className={styles.rectangleTwo}>
            <Row>
              <Col md={9}>
                <p>BILLING INFO</p>
                <p className={styles.highlight}>Marie Gaviola</p>
                <p>100 Riviera Dr S Massapequa</p>
                <p>Massapequa, NY, 11758</p>
              </Col>
              <Col>
                <Button className={styles.edit} onClick={() => editField(2, 1)}>
                  <PencilFill /> EDIT
                </Button>
              </Col>
            </Row>
            {billInfo && (
              <BillInfo
                saveInfo={() => {
                  editField(2, 0);
                }}
              />
            )}
          </div>
          <div className={styles.rectangleTwo}>
            <Row>
              <Col md={9}>
                <p>PAYMENT INFO</p>
                <Image src="/assets/order/cc.png" width={180} height={20} />
              </Col>
              <Col>
                <Button className={styles.edit} onClick={() => editField(3, 1)}>
                  <PencilFill /> EDIT
                </Button>
              </Col>
            </Row>
            <br />
            <br />
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
            {payInfo && (
              <PayInfo
                saveInfo={() => {
                  editField(3, 0);
                }}
              />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
