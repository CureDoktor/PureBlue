import React from "react";
import OrderFlowForm from "../../Common/OrderFlow/OrderFlowForm";
import styles from "./StepSeven.styles.module.scss";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import ShipInfo from "../../ShipInfo";
import { useState, useContext } from "react";
import AuthContext from "../../../store/auth-context";
import Axios from "axios";

const StepSeven = ({ onNext, props }) => {
  console.log(props.props);
  const [shipInfo, setShipInfo] = useState(false);
  const [wrongStateHolder, setWrongStateHolder] = useState(false);

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
    const headers = {
      "Content-Type": "application/json",
      scenario: "?scenario=step-one", // Custom header with data
    };
    try {
      const rese = await Axios.post(
        route,
        { Token: authCtx.Token(), formData },
        { headers }
      )
        .then((res) => {
          setShipInfo(false);
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
    <div className={styles.mainContainer}>
      <h2>
        Shipping Info & <br /> Address
      </h2>
      <p>
        Where would you like to have your medication shipped,
        <br /> if prescribed? Use your legal name.
      </p>
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
              type="number"
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
                Unfortunately our services are not offered in this state. We
                hope to change that in the near future.
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
  );
};

export default StepSeven;
