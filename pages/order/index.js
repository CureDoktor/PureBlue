import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState, React } from "react";
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
import Axios from "axios";
import AuthContext from "../../store/auth-context";
import Router, { useRouter } from "next/router";
import ShipInfo from "../../components/ShipInfo";
import { searchParamsUrl } from "../../components/searchParams";

export default function Order(props) {
  const [wrongStateHolder, setWrongStateHolder] = useState(false);
  const [wrongStateHolderBilling, setWrongStateHolderBilling] = useState(false);
  const [product, setProduct] = useState({
    id: 1,
    partner_medication_id: "eb37cfd0-6b3a-472f-8cf6-2bdd1a0c806a",
    product_dosage_mg: "25.0",
    product_dosage_tag: "beginner",
    product_dosages_per_month: 4,
    product_image: "Viagra_25mg_4",
    product_price: "280.00",
    product_qty: 4,
    product_tag: "Viagra",
    product_title: "Viagra 25 mg, 4 day supply",
  });
  var Image_source =
    "/assets/order/bottles/" +
    product.product_image +
    "/" +
    product.product_image +
    "_bottle.png";
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const switchProduct = () => {
    router.push("/switch" + searchParamsUrl());
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    shippingAddress: "",
    shippingCityName: "",
    shippingState: "",
    shippingZip: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (
      name == "shippingState" &&
      (value.match(/south carolina/gi) || value.match(/alaska/gi))
    ) {
      setWrongStateHolder(true);
    } else {
      setWrongStateHolder(false);
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  async function submitHandler(event) {
    event.preventDefault();
    const route = "/api/user/updateShippingInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {})
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

  const getProduct = async () => {
    const route = "/api/case/get-product";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log(res);
          setProduct(res.data);
        })
        .catch((error) => {
          console.log(error);
          props.handleShow(error.response);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handlePayChange = (event) => {
    const { value, name } = event.target;
    setFormPayData({
      ...formPayData,
      [name]: value,
    });
  };

  const [formPayData, setFormPayData] = useState({
    payment_processor: "credit_card",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const orderWithUserProfile = async () => {
    const route = "/api/order/order-from-profile";
    try {
      const rese = await Axios.post(route, {
        Token: authCtx.Token(),
      })
        .then((res) => {
          router.push("/account" + searchParamsUrl());
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  };

  async function submitPayHandler(event) {
    event.preventDefault();
    const route = "/api/user/updatePaymentInfo";
    const formData = formPayData;
    try {
      const rese = await Axios.post(route, {
        Token: authCtx.Token(),
        formData,
      })
        .then((res) => {
          orderWithUserProfile();
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

  const handleBillChange = (event) => {
    const { value, name } = event.target;

    if (
      name == "billingState" &&
      (value.match(/south carolina/gi) || value.match(/alaska/gi))
    ) {
      setWrongStateHolderBilling(true);
    } else {
      setWrongStateHolderBilling(false);
      setFormBillData({
        ...formBillData,
        [name]: value,
      });
    }
  };

  const [formBillData, setFormBillData] = useState({
    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingCityName: "",
    billingState: "",
    billingZip: "",
  });

  async function submitBillHandler(event) {
    event.preventDefault();
    const route = "/api/user/updateBillingInfo";
    var formData = formBillData;
    try {
      const rese = await Axios.post(route, {
        Token: authCtx.Token(),
        formData,
      })
        .then((res) => {})
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue - Order</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main className={styles.orderPage}>
        {/* <Modals error_message="Cureeee" /> */}
        <Container>
          <div className={styles.fieldOne}>
            <Col md={{ span: 7, offset: 5 }}>
              <div className={styles.callUs}>
                <Link href="tel: 1-888-534-8977">
                  Call toll free to order:{" "}
                  <span className={styles.blueText}>1-888-534-8977</span>
                </Link>
              </div>
            </Col>
            <Row>
              <Col md={6}>
                <div className="d-flex pb-5 justify-content-center">
                  <Image src={Image_source} height={280} width={220} />
                </div>
                <Row>
                  <Col md={8}>
                    <h3>{product.product_title} </h3>
                    <ul>
                      <li>
                        <Check className={styles.checkmark} />
                        {product.product_title}
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
                    <Button onClick={switchProduct} className={styles.switch}>
                      SWITCH
                    </Button>
                  </Col>
                </Row>
                <div className={styles.totalPrice}>
                  <Row className={styles.row}>
                    <Col xs={6}>Price</Col>
                    <Col xs={6}>${product.product_price}</Col>
                  </Row>
                  <Row className={styles.row}>
                    <Col xs={6}>Shipping</Col>
                    <Col xs={6}>$0</Col>
                  </Row>
                  <Row className={styles.row}>
                    <Col xs={6}>Service Charge including Tax</Col>
                    <Col xs={6}>$0</Col>
                  </Row>
                  <Row className={styles.row}>
                    <Col xs={6}>Grand Total</Col>
                    <Col xs={6}>${product.product_price}</Col>
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
                <div className={styles.formField}>
                  <div className={styles.formHeader}>
                    <p>1. Shipping Address</p>
                  </div>
                  <div className={styles.formBody}>
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
                              Unfortunately our services are not offered in this
                              state. We hope to change that in the near future.
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
                  </div>
                </div>
                <div className={styles.formField}>
                  <div className={styles.formHeader}>
                    <p>2. Billing Address</p>
                  </div>
                  <div className={styles.formBody}>
                    <Form onSubmit={submitBillHandler}>
                      <Row className="mb-3 pt-5">
                        <Form.Group as={Col} controlId="billingFirstName">
                          <Form.Control
                            required
                            name="billingFirstName"
                            type="text"
                            onChange={handleBillChange}
                            placeholder="Billing First Name"
                            value={formData.email}
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
                            onChange={handleBillChange}
                            placeholder="Billing Last Name"
                            value={formData.email}
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
                            onChange={handleBillChange}
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
                        <Form.Group as={Col} controlId="billingCityName">
                          <Form.Control
                            required
                            name="billingCityName"
                            type="text"
                            onChange={handleBillChange}
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
                        <Form.Group as={Col} controlId="billingState">
                          <Form.Control
                            required
                            name="billingState"
                            type="text"
                            onChange={handleBillChange}
                            placeholder="Enter State"
                            value={formData.email}
                            className={styles.formControl}
                          />
                          <Form.Control.Feedback type="invalid">
                            Incorrect State
                          </Form.Control.Feedback>
                          {wrongStateHolderBilling && (
                            <small style={{ color: "red" }}>
                              Unfortunately our services are not offered in this
                              state. We hope to change that in the near future.
                            </small>
                          )}
                        </Form.Group>
                        <Form.Group as={Col} controlId="billingZip">
                          <Form.Control
                            required
                            name="billingZip"
                            type="text"
                            onChange={handleBillChange}
                            placeholder="Enter Zipcode"
                            value={formData.email}
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
                  </div>
                </div>
                <div className={styles.formField}>
                  <div className={styles.formHeader}>
                    <p>3. Secure Payment</p>
                  </div>
                  <div className={styles.formBody}>
                    <Form onSubmit={submitPayHandler}>
                      <br />
                      <br />
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="creditCardNumber">
                          <Form.Control
                            required
                            name="creditCardNumber"
                            type="number"
                            onChange={handlePayChange}
                            placeholder="Enter Credit Card Number"
                            value={formData.email}
                            className={styles.formControl}
                          />
                          <Form.Control.Feedback type="invalid">
                            Incorrect Credit Card Number
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <div className="d-flex pb-4">
                        <Image
                          src="/assets/amex.jpg"
                          height={40}
                          width={70}
                          className="pe-1"
                        />
                        <Image
                          src="/assets/discover.jpg"
                          height={40}
                          width={70}
                          className="pe-1"
                        />
                        <Image
                          src="/assets/mastercard.jpg"
                          height={40}
                          width={70}
                          className="pe-1"
                        />
                        <Image src="/assets/visa.jpg" height={40} width={70} />
                      </div>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="expirationDate">
                          <Form.Control
                            required
                            name="expirationDate"
                            type="text"
                            onChange={handlePayChange}
                            placeholder="exp. MM/DD"
                            value={formData.email}
                            className={styles.formControl}
                          />
                          <Form.Control.Feedback type="invalid">
                            Incorrect Expiration Date
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group maxLength="4" as={Col} controlId="cvv">
                          <Form.Control
                            required
                            name="cvv"
                            maxLength={4}
                            type="number"
                            onChange={handlePayChange}
                            placeholder="Enter CVV"
                            value={formData.email}
                            className={styles.formControl}
                          />
                          <Form.Control.Feedback type="invalid">
                            Incorrect CVV
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Button type="submit" className={styles.button}>
                        SAVE AND CONTINUE
                      </Button>
                    </Form>
                    {/* <div key={`inline-radio`} className="mb-3">
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
                      <Button className={styles.button}>PAY NOW</Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </main>
    </div>
  );
}
