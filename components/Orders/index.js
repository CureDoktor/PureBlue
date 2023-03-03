import Link from "next/link";
import Head from "next/head";
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
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import Axios from "axios";

export default function Orders() {
  const authCtx = useContext(AuthContext);
  const [Orders, setOrders] = useState([
    {
      "amount": 0,
      "cardNumber": "",
      "created_at": "",
      "creditCardType": "",
      "id": 1,
      "product_title": "",
      "status": "",
      "transactionNumber": null,
    },
  ]);
  const gettingOrderInfo = async () => {
    const route = "/api/order/get-orders";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log(res.data);
          setOrders(res.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Not Good!");
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    gettingOrderInfo();
  }, []);
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
        {Orders.map((element) => {
          return (
            <tbody key={element.id}>
              <tr>
                <td>{element.transactionNumber}</td>
                <td>{element.product_title}</td>
                <td>{element.creditCardType}</td>
                <td>{element.amount}</td>
                <td>{element.status}</td>
                <td>{element.created_at}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}
