import Link from "next/link";
import Head from "next/head";
import React from "react";
import Table from "react-bootstrap/Table";
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

export default function Orders() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Transaction Number</th>
            <th>Product Name & qty</th>
            <th>CC Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
