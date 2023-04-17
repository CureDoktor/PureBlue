import Link from "next/link";
import Head from "next/head";
import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
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
import styles from "./styles.module.scss";
import Form from "react-bootstrap/Form";
import Axios from "axios";

export default function BillInfo(props) {
  const [billInfo, setBillInfo] = useState(false);
  const [wrongStateHolder, setWrongStateHolder] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name == "billingState" && value.match(/south carolina/gi)) {
      setWrongStateHolder(true);
    } else {
      setWrongStateHolder(false);
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [formData, setFormData] = useState({
    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingCityName: "",
    billingState: "",
    billingZip: "",
  });

  const authCtx = useContext(AuthContext);
  const route = "/api/user/getUserInfo";

  async function submitHandler(event) {
    event.preventDefault();
    const route = "/api/user/updateBillingInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          setBillInfo(false);
          props.reloadInfo();
        })
        .catch((error) => {
          return alert("Not Good!");
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

  const fields = (
    <Form onSubmit={submitHandler}>
      <Row className="mb-3 pt-5">
        <Form.Group as={Col} controlId="billingFirstName">
          <Form.Control
            required
            name="billingFirstName"
            type="text"
            onChange={handleChange}
            placeholder="Billing First Name"
            value={formData.billingFirstName}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="billingLastName">
          <Form.Control
            required
            name="billingLastName"
            type="text"
            onChange={handleChange}
            placeholder="Billing Last Name"
            value={formData.billingLastName}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Last Name
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="billingAddress">
          <Form.Control
            required
            name="billingAddress"
            type="text"
            onChange={handleChange}
            placeholder="Enter Street Address"
            value={formData.billingAddress}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Street Address
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="billingCityName">
          <Form.Control
            required
            name="billingCityName"
            type="text"
            onChange={handleChange}
            placeholder="Enter City"
            value={formData.billingCityName}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect City
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="billingState">
          <Form.Control
            required
            name="billingState"
            type="text"
            onChange={handleChange}
            placeholder="Enter State"
            value={formData.billingState}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect State
          </Form.Control.Feedback>
          {wrongStateHolder && (
            <small style={{ color: "red" }}>
              Unfortunately our services are not offered in this state. We hope
              to change that in the near future.
            </small>
          )}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="billingZip">
          <Form.Control
            required
            name="billingZip"
            type="text"
            onChange={handleChange}
            placeholder="Enter Zipcode"
            value={formData.billingZip}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Zipcode
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" className={styles.button}>
        SAVE AND CONTINUE
      </Button>
    </Form>
  );

  return (
    <div>
      <div className={styles.rectangleTwo}>
        <Row>
          <Col md={9}>
            <b>BILLING INFO</b>
            <p className={styles.highlight}>
              {props.info.billingFirstName} {props.info.billingLastName}
            </p>
            <p>{props.info.billingAddress}</p>
            <p>
              {props.info.billingCityName}, {props.info.billingState},
              {props.info.billingZip}
            </p>
          </Col>
          <Col>
            <Button className={styles.edit} onClick={() => setBillInfo(true)}>
              <PencilFill /> EDIT
            </Button>
          </Col>
        </Row>
        {billInfo && fields}
      </div>
    </div>
  );
}
