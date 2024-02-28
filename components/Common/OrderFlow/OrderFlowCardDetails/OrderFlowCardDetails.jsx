import React, { useState, useContext, useEffect } from "react";
import styles from "./OrderFlowCardDetails.styles.module.scss";
import ToggleButton from "react-bootstrap/ToggleButton";
import PayInfo from "../../../PayInfo";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import AuthContext from "../../../../store/auth-context";
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

const OrderFlowCardDetails = ({ onNext, props, product }) => {
  const [InitialProduct, setInitialProduct] = useState("");
  const [chosingProduct, setChosingProduct] = useState([{}]);
  const [chosenProduct, setChosenProduct] = useState([{}]);
  const [medications, setMedications] = useState([
    {
      id: 37,
      product_type: 1,
      pharmacy: "GENRX",
      product_title: "Tadalafil 20mg - 48 tablets every 12 months",
      product_tag: "Tadalafil",
      product_category: 1,
      partner_medication_id: "6d8a53e9-1121-4dce-8c57-04d57a43cb1f",
      product_dosage_tag: "Advanced",
      product_dosage_mg: "20.0",
      product_dosages_per_month: 4,
      product_qty: 48,
      days_supply: 365,
      refills: 0,
      one_time_charge: 0,
      initial_product_price: null,
      product_price: "468.00",
      product_image: "",
      metadata: [
        {
          name: "Monthly",
          value: "39",
        },
        {
          name: "Retail Price",
          value: "540",
        },
        {
          name: "% Saving",
          value: "13%",
        },
      ],
      is_active: 0,
    },
  ]);
  const [chosenMed, setChosenMed] = useState({});

  const handleProductChange = () => {
    
  }

  const gettingMedications = async () => {
    const route = "/api/get-products";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setMedications(res.data.data);
          if (product.viagra) {
            var name = "Generic Viagra 100mg";
          } else {
            if (product.daily) {
              var name = "Generic Cialis 5mg";
            } else {
              var name = "Generic Cialis 20mg";
            }
          }
          setInitialProduct(name);
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    var productArray = [];
    if (product.viagra) {
      var viagra = "Sildenafil";
    } else {
      var viagra = "Tadalafil";
    }
    if (product.daily) {
      var times = "Daily";
    } else {
      var times = "Advanced";
    }
    if (viagra === "Sildenafil") {
      if (times === "Advanced") {
        var dosage = "100.0";
      }
    } else {
      if (times === "Advanced") {
        var dosage = "20.0";
      } else {
        var dosage = "5.0";
      }
    }
    medications.map((element) => {
      if (element.product_dosages_per_month === product.times_per_month) {
        if (element.product_tag === viagra) {
          if (element.product_dosage_tag === times) {
            if (element.product_dosage_mg === dosage) {
              productArray.push(element);
            }
          }
        }
      }
    });
    setChosingProduct(productArray);
  }, [medications]);

  useEffect(() => {
    gettingMedications();
  }, []);

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
          setPayInfo(false);
          props.reloadInfo();
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }
  const planOptions = [
    { id: 1, period: "Monthly", cost: "$76/mo" },
    { id: 2, period: "3 Months", cost: "$85" },
    { id: 3, period: "6 months", cost: "$76/mo" },
    { id: 4, period: "12 months", cost: "$54/mo" },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <h5>{InitialProduct}</h5>
        <hr />
        <p>Choose shipping frequency</p>
        <div className={styles.mainCardsContainer}>
          <Form.Group as={Col} controlId="formGridSexualActivity">
            <Form.Label>
              First decide your preferred medication, select one:
            </Form.Label>
            {chosingProduct.map((radio, idx) => (
              <Col md={12} key={idx}>
                <ToggleButton
                  key={idx}
                  id={`radios-${idx}`}
                  type="radio"
                  name="product_tag"
                  className={styles.buttons}
                  value={radio.value}
                  checked={chosenMed.product_tag === radio.value}
                  onChange={handleChange}
                >
                  {radio.name}
                </ToggleButton>
              </Col>
            ))}
          </Form.Group>
        </div>
        <div className={styles.mainCardsContainer}>
          {planOptions.map((plan) => (
            <div key={plan.id} className={styles.card}>
              <span>{plan.period}</span>
              <span>{plan.cost}</span>
            </div>
          ))}
        </div>
        <hr />
        <div className={styles.monthlyDetailsCard}>
          <span>3 months supply</span>
          <span>
            <span className={styles.cutPrice}>$255</span> $228
          </span>
        </div>
        <div className={styles.DoctorFee}>
          <span>Doctor fee waived</span>
          <span className={styles.discount}>
            <img
              src="../assets/sildenafilOrderFlow/Image157/Image157.png"
              className={styles.image}
            />
            -$30
          </span>
        </div>
        <div className={styles.totalMain}>
          <div className={styles.total}>
            <span>Total</span>
            <span className={styles.totalBlue}>You're saving 11%</span>
          </div>
          <span>
            <span className={styles.cutPrice}>$255</span> $228
          </span>
        </div>
        <div className={styles.refundMain}>
          <div className={styles.refund}>
            <span>Full refund if not prescribed</span>
            <button>Details</button>
          </div>
          <span>$228</span>
        </div>
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
                htmlSize="4"
                autoComplete="on"
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
          <div className={styles.btnContainer} type="submit">
            <button>
              <span>Submit Order</span>
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default OrderFlowCardDetails;
