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
  const [initialRender, setInitialRender] = useState(true);
  const [InitialProduct, setInitialProduct] = useState("");
  const [selectedProductId, setSelectedProductId] = useState();
  const [chosingProduct, setChosingProduct] = useState([
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
  const [chosenMed, setChosenMed] = useState({
    monthly: "",
    retail_price: "",
    saving: "",
    plan_name: "",
    actial_pricee: 0,
    id: 0,
  });

  const authCtx = useContext(AuthContext);

  const handleProductChange = (event) => {
    setSelectedProductId(event.target.value);

    const { value, name } = event.target;
    medications.map((element) => {
      if (element.id == value) {
        var monthlyy = 0;
        var retail_pricee = 0;
        var savingg = 0;
        var actual_pricee = element.product_price;
        var elementId = element.id;
        element.metadata.map((param) => {
          if (param.name === "Monthly") {
            monthlyy = param.value;
          } else if (param.name === "Retail Price") {
            retail_pricee = param.value;
          } else if (param.name === "% Saving") {
            savingg = param.value;
          }
        });

        element.product_price;

        var plan_namee = "";
        if (element.product_qty / element.product_dosages_per_month == 1) {
          plan_namee = "1 Month";
        } else if (
          element.product_qty / element.product_dosages_per_month ==
          3
        ) {
          plan_namee = "3 Months";
        } else if (
          element.product_qty / element.product_dosages_per_month ==
          6
        ) {
          plan_namee = "6 Months";
        } else if (
          element.product_qty / element.product_dosages_per_month ==
          12
        ) {
          plan_namee = "12 Months";
        }

        var cure = {
          id: elementId,
          monthly: monthlyy,
          actual_price: actual_pricee,
          retail_price: retail_pricee,
          saving: savingg,
          plan_name: plan_namee,
        };
        klaviyo.push(["track", "Product Changed", cure]);
        setChosenMed(cure);
      }
    });
  };

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
          props.props.handleShow(error.response.data);
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
    if (name == "expirationDate") {
      const numericValue = value.replace(/\D/g, "");
      // Check if the value is longer than 4 characters, if so, trim it
      const trimmedValue = numericValue.slice(0, 4);
      // Insert "/" after the first 2 characters
      const formattedValue = trimmedValue.replace(/(\d{2})/, "$1/");
      // Update the state with the formatted value

      setFormData({
        ...formData,
        [name]: formattedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const [formData, setFormData] = useState({
    payment_processor: "credit_card",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  useEffect(() => {
    if (chosingProduct.length > 0) {
      // Create a synthetic event object
      const syntheticEvent = {
        target: {
          name: "product_tag",
          value: chosingProduct[0].id, // Assuming you want to select the first product
        },
      };

      // Trigger handleProductChange with the synthetic event
      handleProductChange(syntheticEvent);
      setSelectedProductId(chosingProduct[0].id);
    }
  }, [chosingProduct]);

  const route = "/api/user/getUserInfo";

  async function submitHandler(event) {
    event.preventDefault();
    const route = "/api/user/updatePaymentInfo";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), formData })
        .then((res) => {
          handleOrderFromProfile();
        })
        .catch((error) => {
          props.props.handleShow(error.response.data);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

  async function handleOrderFromProfile() {
    const route = "/api/order/order-from-profile";
    const data = {
      product_id: chosenMed.id,
      case_id: parseInt(authCtx.Case()),
    };
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), data })
        .then((res) => {
          klaviyo.push(["track", "Completed Order Form", chosenMed]);
          onNext();
        })
        .catch((error) => {
          props.props.handleShow(error.response.data);
        });
    } catch (err) {
      return alert("Something went wrong!" + err);
    }
  }

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
            {chosingProduct.map((element, index) => {
              var monthlyCost = 0;

              element.metadata.map((metadata) => {
                if (metadata.name === "Monthly") {
                  monthlyCost = metadata.value;
                }
              });
              var plan_name = "";
              if (
                element.product_qty / element.product_dosages_per_month ==
                1
              ) {
                plan_name = "1 Month";
              } else if (
                element.product_qty / element.product_dosages_per_month ==
                3
              ) {
                plan_name = "3 Months";
              } else if (
                element.product_qty / element.product_dosages_per_month ==
                6
              ) {
                plan_name = "6 Months";
              } else if (
                element.product_qty / element.product_dosages_per_month ==
                12
              ) {
                plan_name = "12 Months";
              }

              return (
                <Col md={12} key={element.id}>
                  <input
                    key={element.id}
                    id={`radios-${element.id}`}
                    type="radio"
                    name="product_tag"
                    value={element.id}
                    style={{ display: "none" }}
                    checked={selectedProductId == element.id}
                    onChange={handleProductChange}
                  />

                  <label
                    htmlFor={`radios-${element.id}`}
                    className={styles.mainCardsContainer}
                    style={{ width: "100%" }}
                  >
                    <div key={element.id} className={styles.card}>
                      <span>{plan_name}</span>
                      <span>${monthlyCost}/mo</span>
                    </div>
                  </label>
                </Col>
              );
            })}
          </Form.Group>
        </div>
        <br />
        <div className={styles.monthlyDetailsCard}>
          <span>{chosenMed.plan_name} supply</span>
          <span>
            <span className={styles.cutPrice}>${chosenMed.retail_price}</span> $
            {chosenMed.actual_price}
          </span>
        </div>
        <div className={styles.DoctorFee}>
          <span>Doctor fee waived</span>
          <span className={styles.discount}>
            <img
              src="../assets/sildenafilOrderFlow/Image157/Image157.png"
              className={styles.image}
            />
            -${chosenMed.retail_price - chosenMed.actual_price}
          </span>
        </div>
        <div className={styles.totalMain}>
          <div className={styles.total}>
            <span>Total</span>
            <span className={styles.totalBlue}>
              You're saving {chosenMed.saving}
            </span>
          </div>
          <span>
            <span className={styles.cutPrice}>${chosenMed.retail_price}</span> $
            {chosenMed.actual_price}
          </span>
        </div>
        <div className={styles.refundMain}>
          <div className={styles.refund}>
            <span>Full refund if not prescribed</span>
            <button>Details</button>
          </div>
          <span>${chosenMed.actual_price}</span>
        </div>
        <Form onSubmit={submitHandler}>
          <br />
          <br />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="creditCardNumber">
              <Form.Control
                required
                name="creditCardNumber"
                type="text"
                maxLength="16"
                onChange={handleChange}
                placeholder="Enter Credit Card Number"
                value={formData.creditCardNumber}
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
                placeholder="exp. MM/YY"
                value={formData.expirationDate}
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
                type="text"
                maxLength="4"
                onChange={handleChange}
                placeholder="Enter CVV"
                value={formData.cvv}
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
