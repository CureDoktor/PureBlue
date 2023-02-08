import Link from "next/link";
import Head from "next/head";
import React, { useState, useContext } from "react";
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
import { CaretDownFill, List, PencilFill } from "react-bootstrap-icons";
import AuthContext from "../../store/auth-context";
import styles from "./styles.module.scss";

import Form from "react-bootstrap/Form";
import Axios from "axios";

export default function PayInfo(props) {
  const [payInfo, setPayInfo] = useState(false);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    payment_processor: "credit_card",
    creditCardType: "",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const authCtx = useContext(AuthContext);
  const route = "/api/user/getUserInfo";

  async function submitHandler(event) {
    event.preventDefault();
    const route = "/api/user/updatePaymentInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          console.log(res.data);
          setPayInfo(false);
          props.reloadInfo();
        })
        .catch((error) => {
          console.log(error);
          return alert("Not Good!");
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

  const fields = (
    <>
      <Form onSubmit={submitHandler}>
        <br />
        <br />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="creditCardNumber">
            <Form.Control
              required
              name="creditCardNumber"
              type="number"
              onChange={handleChange}
              placeholder="Enter Credit Card Number"
              value={formData.email}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect Credit Card Number
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="creditCardType">
            <Form.Control
              required
              name="creditCardType"
              type="text"
              onChange={handleChange}
              placeholder="Enter Credit Card Type"
              value={formData.email}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect Credit Card Type
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="expirationDate">
            <Form.Control
              required
              name="expirationDate"
              type="text"
              onChange={handleChange}
              placeholder="exp. MM/DD"
              value={formData.email}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect Expiration Date
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="cvv">
            <Form.Control
              required
              name="cvv"
              type="number"
              onChange={handleChange}
              placeholder="Enter CVV"
              value={formData.email}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect CVV
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button
          type="submit"
          className={styles.button}
          onClick={props.saveInfo}
        >
          SAVE AND CONTINUE
        </Button>
      </Form>
    </>
  );

  return (
    <>
      <div className={styles.rectangleTwo}>
        <Row>
          <Col md={9}>
            <b>PAYMENT INFO </b>
            <Image src="/assets/order/cc.png" width={180} height={20} />
          </Col>
          <Col>
            <Button className={styles.edit} onClick={() => setPayInfo(true)}>
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
              <p>{props.info.creditCardNumber}</p>
            </Col>
          </Row>
        </div>
        <div className={styles.orderInfo}>
          <Row>
            <Col>
              <b>Exp. Date :</b>
            </Col>
            <Col>
              <p>{props.info.expirationDate}</p>
            </Col>
          </Row>
        </div>
        <div className={styles.orderInfo}>
          <Row>
            <Col>
              <b>CVC :</b>
            </Col>
            <Col>
              <p>{props.info.cvv}</p>
            </Col>
          </Row>
        </div>
        {payInfo && fields}
      </div>
    </>
  );
}
