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
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Axios from "axios";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

export default function Membership(props) {
  const [UserInfo, setUserInfo] = useState("");
  const [Case, setCase] = useState({
    status: "",
    created_at: "",
  });
  const authCtx = useContext(AuthContext);
  const gettingUserInfo = async () => {
    const route = "/api/user/getUserInfo";
    var caseId = authCtx.Case();
    const headers = {
      "Content-Type": "application/json",
      case: "?case_id=" + caseId,
    };

    try {
      const rese = await Axios.post(
        route,
        { Token: authCtx.Token() },
        { headers }
      )
        .then((res) => {
          setUserInfo(res.data.data);
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  const getCase = async () => {
    const route = "/api/case/get-case";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setCase({
            status: res.data.data.status,
            created_at: res.data.data.created_at,
          });
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      props.handleShow(err);
    }
  };

  useEffect(() => {
    getCase();
    gettingUserInfo();
  }, []);

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
              You cant switch plan while order is on Authorization
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
                  <p>{UserInfo.verification_status}</p>
                </Col>
              </Row>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>Medical Status:</b>
                </Col>
                <Col>
                  <p>{Case.status}</p>
                </Col>
              </Row>
            </div>
            <div className={styles.orderInfo}>
              <Row>
                <Col>
                  <b>Created</b>
                </Col>
                <Col>
                  <p>{Case.created_at}</p>
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
