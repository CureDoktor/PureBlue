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
import Form from "react-bootstrap/Form";

export default function PayInfo(props) {
  return (
    <div>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstname">
          <Form.Control
            type="name"
            className={styles.formControl}
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastname">
          <Form.Control
            type="lastname"
            className={styles.formControl}
            placeholder="Last Name"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstname">
          <Form.Control
            type="name"
            className={styles.formControl}
            placeholder="Street Address 1"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstname">
          <Form.Control
            type="name"
            className={styles.formControl}
            placeholder="Street Address 2"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstname">
          <Form.Control
            type="name"
            className={styles.formControl}
            placeholder="City"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Select className={styles.formControl} defaultValue="State">
            <option>State</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFirstname">
          <Form.Control
            type="name"
            className={styles.formControl}
            placeholder="Zipcode"
          />
        </Form.Group>
      </Row>
      <Button className={styles.button} onClick={props.SaveInfo}>
        SAVE AND CONTINUE
      </Button>
    </div>
  );
}
