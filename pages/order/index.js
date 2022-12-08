import Head from "next/head";
import Link from "next/link";
import { useContext, useState, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Check, PatchCheck } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { AccordionContext, Form } from "react-bootstrap";

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const gender = [
    { name: "Yes", value: "yes" },
    { name: "No", value: "no" },
  ];

  function cc() {
    return (
      <div>
        <p>Credit or Debit Card</p>
        <Image src="/assets/order/cc.png" width={180} height={20} />
      </div>
    );
  }
  function pp() {
    return <Image src="/assets/order/pp.png" width={80} height={20} />;
  }

  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        className="headerOne"
        style={{
          backgroundColor: isCurrentEventKey ? "#fff" : "#fff",
          border: "0px",
          color: "#000",
          fontWeight: "800",
          padding: "0px 12px 0px 12px",
          width: "100%",
          textAlign: "left",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue - Order</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.orderPage}>
        <Container>
          <div className={styles.fieldOne}>
            <Col md={{ span: 7, offset: 5 }}>
              <div className={styles.callUs}>
                <Link href="tel: 1-888-534-8977">
                  <a>
                    Call toll free to order:{" "}
                    <span className={styles.blueText}>1-888-534-8977</span>
                  </a>
                </Link>
              </div>
            </Col>
            <Row>
              <Col md={6}>
                <div className="d-flex pb-5 justify-content-center">
                  <Image
                    src="/assets/order/bottle.png"
                    height={180}
                    width={100}
                  />
                </div>
                <Row>
                  <Col md={8}>
                    <h3>17 x Sildenafil </h3>
                    <ul>
                      <li>
                        <Check className={styles.checkmark} />
                        Seventeen 30 MG Sildenafil
                      </li>
                      <li>
                        <Check className={styles.checkmark} />
                        Discreet shipping to your house
                      </li>
                      <li>
                        <Check className={styles.checkmark} />
                        FREE online physician consultation.
                      </li>
                      <li>
                        <Check className={styles.checkmark} />
                        Monthly refills
                      </li>
                      <li>
                        <Check className={styles.checkmark} />
                        24/7 support
                      </li>
                    </ul>
                  </Col>
                  <Col md={4}>
                    <Button className={styles.switch}>SWITCH</Button>
                  </Col>
                </Row>
                <div className={styles.totalPrice}>
                  <Row className={styles.row}>
                    <Col xs={6}>Price</Col>
                    <Col xs={6}>$50.00/MO</Col>
                  </Row>
                  <Row className={styles.row}>
                    <Col xs={6}>Shipping</Col>
                    <Col xs={6}>$29.95</Col>
                  </Row>
                  <Row className={styles.row}>
                    <Col xs={6}>Service Charge including Tax</Col>
                    <Col xs={6}>$4.25</Col>
                  </Row>
                  <Row className={styles.row}>
                    <Col xs={6}>Grand Total</Col>
                    <Col xs={6}>$84.20</Col>
                  </Row>
                </div>
                <ul>
                  <li>
                    <Check className={styles.checkmark} />
                    Automatic refills every 30 days.
                  </li>
                  <li>
                    <Check className={styles.checkmark} />
                    Cancel anytime. No gimmicks.
                  </li>
                  <li>
                    <Check className={styles.checkmark} />
                    Payment does not guarantee a prescription.
                  </li>
                  <li>
                    <Check className={styles.checkmark} />
                    100% refund if no prescription is written.
                  </li>
                </ul>
                <p className={styles.valid}>
                  Valid US Government issued ID verification required after
                  checkout.
                </p>
              </Col>
              <Col md={6}>
                <Form>
                  <div className={styles.formField}>
                    <div className={styles.formHeader}>
                      <p>1. The Basics</p>
                    </div>
                    <div className={styles.formBody}>
                      <Row className="mb-3">
                        <Col md={8}>
                          <Form.Group as={Col} controlId="formGridFirstname">
                            <Form.Label>Coupon Code</Form.Label>
                            <Form.Control
                              type="name"
                              className={styles.formControl}
                              placeholder="XXXXXXXXX"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <br />
                          <br />
                          <Button className={styles.switch}>APPLY</Button>
                        </Col>
                      </Row>
                      <Form.Label>Choose Shipping Option</Form.Label>
                      <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                          inline
                          className={styles.radioButton}
                          label="USPS Ground (3-4 Business Days)"
                          name="group1"
                          type="radio"
                          id={`inline-radio-1`}
                        />
                        <Form.Check
                          inline
                          className={styles.radioButton}
                          label="USPS Ground (2-3 Business Days)"
                          name="group1"
                          type="radio"
                          id={`inline-radio-2`}
                        />
                        <Form.Check
                          inline
                          className={styles.radioButton}
                          label="UPS Next Business Day Overnight"
                          name="group1"
                          type="radio"
                          id={`inline-radio-3`}
                        />
                      </div>
                      <p className={styles.grayText}>
                        Next Day Shipping if ordered before 12PM CST Monday -
                        Thursday <br />
                        This will save you shipping time, but physician review
                        still takes 24-48 hours.
                      </p>
                      <Row className="mb-3">
                        <Col>
                          <Form.Group as={Col} controlId="formGridFirstname">
                            <Form.Label>
                              PatientPhone *{" "}
                              <small>(verified after checkout)</small>
                            </Form.Label>
                            <Form.Control
                              type="name"
                              className={styles.formControl}
                              placeholder="XXX-XXX-XXXX"
                            />
                          </Form.Group>
                          <Button className={styles.button}>
                            SAVE AND CONTINUE
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <div className={styles.formHeader}>
                      <p>2. Shipping Address</p>
                    </div>
                    <div className={styles.formBody}>
                      <Form.Label>
                        Ship To Name:
                        <small> must be your legal name (edit name)</small>
                      </Form.Label>
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
                          <Form.Select
                            className={styles.formControl}
                            defaultValue="State"
                          >
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
                      <Button className={styles.button}>
                        SAVE AND CONTINUE
                      </Button>
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <div className={styles.formHeader}>
                      <p>3. Billing Address</p>
                    </div>
                    <div className={styles.formBody}>
                      <Form.Label>Bill To:</Form.Label>
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
                          <Form.Select
                            className={styles.formControl}
                            defaultValue="State"
                          >
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
                      <Button className={styles.button}>
                        SAVE AND CONTINUE
                      </Button>
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <div className={styles.formHeader}>
                      <p>4. Secure Payment</p>
                    </div>
                    <div className={styles.formBody}>
                      <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                          inline
                          className={styles.radioButton}
                          label={cc()}
                          name="group2"
                          type="radio"
                          id={`inline-radio-4`}
                        />
                        <Form.Check
                          inline
                          className={styles.radioButton}
                          label={pp()}
                          name="group2"
                          type="radio"
                          id={`inline-radio-5`}
                        />
                      </div>
                      <Button className={styles.button}>PAY NOW</Button>
                    </div>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </main>
    </div>
  );
}
