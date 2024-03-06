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

export default function Verification(props) {
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

  return <div className={styles.profile}>User Verification</div>;
}
