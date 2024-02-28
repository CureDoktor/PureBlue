import Link from "next/link";
import Head from "next/head";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useContext, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { CaretDownFill, List } from "react-bootstrap-icons";
import styles from "./styles.module.scss";
import Axios from "axios";
import AuthContext from "../../store/auth-context";

export default function Case(props) {
  const [CaseAnswers, setCaseAnswers] = useState("");
  const authCtx = useContext(AuthContext);
  const getCase = async () => {
    const route = "/api/case/get-case";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log(res.data);
          setCaseAnswers(res.data.data);
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
  }, []);

  return (
    <div>
      <Accordion defaultActiveKey={["1"]}>
        {Object.entries(CaseAnswers).map(([key, value]) => {
          console.log(value);
          return (
            <div key={value.id}>
              <Accordion.Item eventKey={value.id}>
                <Accordion.Header className="">
                  <Row className="w-100 align-items-center">
                    <Col md={4}>
                      <Button>{value.status}</Button>
                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                      {value.medications[0].product_title}
                    </Col>
                  </Row>
                </Accordion.Header>
                <Accordion.Body></Accordion.Body>
              </Accordion.Item>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
}
