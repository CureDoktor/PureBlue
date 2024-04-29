import Link from "next/link";
import Head from "next/head";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useContext, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { CaretDownFill, List } from "react-bootstrap-icons";
import Image from "next/image";
import styles from "./styles.module.scss";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
import { useRouter } from "next/navigation";
import { searchParamsUrl } from "../searchParams";

export default function Case(props) {
  const [CaseAnswers, setCaseAnswers] = useState("");
  const [pause, setPause] = useState(false);
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const getCase = async () => {
    const route = "/api/case/get-case";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
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

  const pauseSubscription = async (case_id, days_delay) => {
    const route = "/api/case/send-to-mdi";
    const headers = {
      "Content-Type": "application/json",
      case: case_id,
      delaydays: days_delay,
    };
    try {
      const rese = await Axios.post(
        route,
        { Token: authCtx.Token() },
        { headers }
      )
        .then((res) => {
          setPause(true);
        })
        .catch((error) => {
          alert(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  return (
    <div>
      <Accordion defaultActiveKey={["1"]}>
        {Object.entries(CaseAnswers).map(([key, value]) => {
          return (
            <div key={value.id}>
              <Accordion.Item eventKey={value.id}>
                <Accordion.Header className="">
                  <Row className="w-100 align-items-center">
                    <Col md={3}>
                      <Button>{value.status}</Button>
                    </Col>
                    <Col md={{ span: 6, offset: 0 }}>
                      {value.medications[0].product_title}
                    </Col>
                  </Row>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col className={styles.switchPlan} md={4}>
                      <div>
                        {value.last_order.product_title.includes(
                          "Sildenafil"
                        ) ||
                        value.last_order.product_title.includes(
                          "sildenafil"
                        ) ? (
                          <Image
                            src="/assets/sildenafil-bottle.png"
                            width={150}
                            height={240}
                          />
                        ) : (
                          <Image
                            src="/assets/tadalafil-bottle.png"
                            width={150}
                            height={240}
                          />
                        )}
                      </div>
                      <br />
                      {value.medications[0].product_title}
                      {value.actions?.switch_product && (
                        <Button
                          onClick={() => {
                            router.push(
                              `/switch?case_id=${value.id}` + searchParamsUrl()
                            );
                          }}
                        >
                          Switch Plan
                        </Button>
                      )}
                      <Button>
                        Hassle Free Reneval Date
                        <br /> {value.subscription?.next_iteration_date}
                      </Button>
                    </Col>
                    <Col md={7}>
                      <Row>
                        <Col md={4}>
                          <div className={styles.field}>
                            Order Status <br /> {value.last_order.status}
                          </div>
                        </Col>
                        <Col md={4}>
                          {" "}
                          <div className={styles.field}>
                            Medical Status <br />
                            {value.status}
                          </div>
                        </Col>
                        <Col md={4}>
                          {" "}
                          <div className={styles.field}>
                            Created On <br /> {value.created_at}
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <div className={styles.field}>
                            Shipping Status <br />{" "}
                            {value.last_order_shipping[0].order_status}
                          </div>
                        </Col>
                        <Col md={4}>
                          {" "}
                          <div className={styles.field}>
                            Tracking Number <br />
                            {value.last_order_shipping[0].tracking_number}
                          </div>
                        </Col>
                        <Col md={4}>
                          {" "}
                          <div className={styles.field}>
                            Case Details <br /> (answers)
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <div className={styles.field}>
                            Subscription Status <br />
                            {value.subscription?.status}
                          </div>
                        </Col>
                        <Col md={4}>
                          {" "}
                          <div className={styles.field}>
                            Delivery <br /> {value.subscription?.interval}
                          </div>
                        </Col>{" "}
                        {value.actions.subscription?.delay ? (
                          <Col md={4}>
                            {" "}
                            <div className={styles.field}>
                              <div>
                                Pause for 30 days <br />
                                <br />{" "}
                                {pause ? (
                                  <Button>&#10003;</Button>
                                ) : (
                                  <Button
                                    onClick={() => {
                                      pauseSubscription(
                                        value.id,
                                        value.subscription.days_delay
                                      );
                                    }}
                                  >
                                    Pause
                                  </Button>
                                )}
                              </div>
                            </div>
                          </Col>
                        ) : (
                          ""
                        )}
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
}
