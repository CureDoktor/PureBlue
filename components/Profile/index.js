import Link from "next/link";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import Axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { PencilFill } from "react-bootstrap-icons";
import ShipInfo from "../ShipInfo";
import PayInfo from "../PayInfo";
import BillInfo from "../BillInfo";
import Form from "react-bootstrap/Form";

import { Col, Button, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function Profile(props) {
  console.log(props);
  const authCtx = useContext(AuthContext);
  const gettingUserInfo = async () => {
    const route = "/api/user/getUserInfo";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setUserInfo(res.data.data);
        })
        .catch((error) => {
          props.handleShow.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    gettingUserInfo();
  }, []);

  const [save, setSave] = useState(false);
  const [billInfo, setBillInfo] = useState(false);
  const [payInfo, setPayInfo] = useState(false);
  const saveEnable = () => {
    setSave(true);
  };

  const [userInfo, setUserInfo] = useState({
    auth_customer_payment_id: null,
    auth_customer_profile_id: null,
    billingAddress: null,
    billingCityId: null,
    billingCityName: null,
    billingFirstName: null,
    billingLastName: null,
    billingSameAsShipping: null,
    billingState: null,
    billingZip: null,
    creditCardNumber: null,
    cvv: null,
    date_of_birth: null,
    email_notification: null,
    expirationDate: null,
    firstName: " ",
    id: 1,
    lastName: " ",
    patient_id: null,
    payment_processor: null,
    phone: "",
    shippingAddress: "",
    shippingCityId: "",
    shippingCityName: "",
    shippingMethod: null,
    shippingState: "",
    shippingZip: "",
    sms_notification: null,
    user_id: 2,
    verification_job_id: null,
    verification_status: null,
    verification_token: null,
  });

  const editField = (field, save) => {
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
              <b>
                {userInfo.firstName} {userInfo.lastName}
              </b>
            </h1>
            <p>
              <b>Email:</b> Irwinachas@gmail.com
            </p>
            <p>
              <b>Phone Number:</b> {userInfo.phone}
            </p>
            <p>
              <b>DOB:</b> {userInfo.date_of_birth}
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
          <ShipInfo
            handleShow={props.handleShow}
            reloadInfo={gettingUserInfo}
            info={userInfo}
          />
          <br />
          <br />
          <BillInfo
            handleShow={props.handleShow}
            reloadInfo={gettingUserInfo}
            info={userInfo}
          />
          <br />
          <br />
          <PayInfo
            handleShow={props.handleShow}
            reloadInfo={gettingUserInfo}
            info={userInfo}
          />
        </Col>
      </Row>
    </div>
  );
}
