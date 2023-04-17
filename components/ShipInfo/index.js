import Link from "next/link";
import Head from "next/head";
import { PencilFill } from "react-bootstrap-icons";
import React, { useState, useContext, useEffect } from "react";
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
import Form from "react-bootstrap/Form";
import AuthContext from "../../store/auth-context";
import Axios from "axios";

export default function ShipInfo(props) {
  const [shipInfo, setShipInfo] = useState(false);
  const [wrongStateHolder, setWrongStateHolder] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name == "shippingState" && value.match(/south carolina/gi)) {
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
    firstName: "",
    lastName: "",
    shippingAddress: "",
    shippingCityName: "",
    shippingState: "",
    shippingZip: "",
    phone: "",
  });

  const authCtx = useContext(AuthContext);
  const route = "/api/user/getUserInfo";

  async function submitHandler(event) {
    event.preventDefault();
    const route = "/api/user/updateShippingInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          setShipInfo(false);
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
    <Form onSubmit={submitHandler}>
      <Row className="mb-3 pt-5">
        <Form.Group as={Col} controlId="firstName">
          <Form.Control
            required
            name="firstName"
            type="text"
            onChange={handleChange}
            placeholder="First Name"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="lastName">
          <Form.Control
            required
            name="lastName"
            type="text"
            onChange={handleChange}
            placeholder="Last Name"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Last Name
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="phone">
          <Form.Control
            required
            name="phone"
            type="text"
            onChange={handleChange}
            placeholder="Enter Phone Number"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Phone Number
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="shippingAddress">
          <Form.Control
            required
            name="shippingAddress"
            type="text"
            onChange={handleChange}
            placeholder="Enter Street Address"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Street Address
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="shippingCityName">
          <Form.Control
            required
            name="shippingCityName"
            type="text"
            onChange={handleChange}
            placeholder="Enter City"
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect City
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="shippingState">
          <Form.Control
            required
            name="shippingState"
            type="text"
            onChange={handleChange}
            placeholder="Enter State"
            value={formData.email}
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
        <Form.Group as={Col} controlId="formGridFirstname">
          <Form.Group as={Col} controlId="shippingZip">
            <Form.Control
              required
              name="shippingZip"
              type="text"
              onChange={handleChange}
              placeholder="Enter Zipcode"
              value={formData.email}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect Zipcode
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Group>
      </Row>
      <Button type="submit" className={styles.button}>
        SAVE AND CONTINUE
      </Button>
    </Form>
  );

  return (
    <div className={styles.rectangleTwo}>
      <Row>
        <Col md={9}>
          <b>SHIPPING INFO</b>
          <br />
          <p className={styles.highlight}>
            {props.info.firstName} {props.info.lastName}
          </p>
          <p>{props.info.phone}</p>
          <p>{props.info.shippingState}</p>
          <p>
            {props.info.shippingAddress}, {props.info.shippingCityName},
            {props.info.shippingZip}
          </p>
        </Col>
        <Col>
          <Button className={styles.edit} onClick={() => setShipInfo(true)}>
            <PencilFill /> EDIT
          </Button>
        </Col>
      </Row>
      {shipInfo && fields}
    </div>
  );
}
