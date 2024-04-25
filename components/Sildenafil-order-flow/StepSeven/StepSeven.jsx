import React from "react";
import OrderFlowForm from "../../Common/OrderFlow/OrderFlowForm";
import styles from "./StepSeven.styles.module.scss";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import ShipInfo from "../../ShipInfo";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../../store/auth-context";
import Axios from "axios";

const StepSeven = ({ onNext, props }) => {
  const [country, setCountry] = useState(true);
  const [enableButton, setEnableButton] = useState(true);
  const checkCountry = (event) => {
    const { value, name } = event.target;
    console.log(value);
    if (value === "AK") {
      setEnableButton(false);
      setCountry(false);
      handleChange(event);
    } else {
      setCountry(true);
      setEnableButton(true);
      handleChange(event);
    }
  };

  const [wrongStateHolder, setWrongStateHolder] = useState(false);
  const [states, setStates] = useState([
    {
      "abbreviation": "NE",
      "name": "Nebraska",
      "state_id": "782679a1-8679-4ac9-a0e4-92226b4a2f67",
      "message": "",
      "is_active": 1,
    },
  ]);

  const getStates = async () => {
    const route = "/api/states";
    try {
      const rese = await Axios.post(route)
        .then((res) => {
          setStates(
            res.data.data.sort(function (a, b) {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
          );
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    getStates();
  }, []);
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
    firstName: localStorage.getItem("firstName")
      ? localStorage.getItem("firstName")
      : "",
    lastName: localStorage.getItem("lastName")
      ? localStorage.getItem("lastName")
      : "",
    shippingAddress: "",
    shippingCityName: "",

    shippingState: localStorage.getItem("state")
      ? localStorage.getItem("state")
      : "",
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
      scenario: "?scenario=step-one",
    };
    try {
      const rese = await Axios.post(
        route,
        { Token: authCtx.Token(), formData },
        { headers }
      )
        .then((res) => {
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
              value={formData.firstName}
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
              value={formData.lastName}
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
              value={formData.phone}
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
              value={formData.shippingAddress}
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
              value={formData.shippingCityName}
              className={styles.formControl}
            />
            <Form.Control.Feedback type="invalid">
              Incorrect City
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <div>
              <Form.Select
                className={styles.formControl}
                value={formData.shippingState}
                name="shippingState"
                onChange={checkCountry}
              >
                {states.map((state) => {
                  return (
                    <option
                      key={state.abbreviation}
                      value={`${state.abbreviation}`}
                    >
                      {state.name}
                    </option>
                  );
                })}
              </Form.Select>

              {!country && (
                <small style={{ color: "red" }}>
                  Unfortunately our services are not offered in this state. We
                  hope to change that in the near future.
                </small>
              )}
            </div>
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
                value={formData.shippingZip}
                className={styles.formControl}
              />
              <Form.Control.Feedback type="invalid">
                Incorrect Zipcode
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Group>
        </Row>
        <Button
          type="submit"
          disabled={!enableButton}
          className={styles.button}
        >
          SAVE AND CONTINUE
        </Button>
      </Form>
    </div>
  );
};

export default StepSeven;
