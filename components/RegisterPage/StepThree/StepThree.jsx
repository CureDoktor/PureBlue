import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./StepThree.styles.module.scss";
const StepThree = ({ handleChange, formData, states }) => {
  const [val, setVal] = useState("New York");
  const [country, setCountry] = useState();

  const checkCountry = (event) => {
    const { value, name } = event.target;

    if (value === "AK" || value === "SC") {
      setCountry(false);
    } else {
      setCountry(true);
      handleChange(event);
    }
  };

  return (
    <>
      <h1 className={styles.h1}>Which state do you live in?</h1>
      <div className={styles.inputContainer}>
        <Form.Group>
          <Form.Select
            className={styles.formControl}
            value={formData.state}
            name="state"
            onChange={checkCountry}
          >
            {states.map((state) => {
              return (
                <option value={`${state.abbreviation}`}>{state.name}</option>
              );
            })}
          </Form.Select>
        </Form.Group>
        {country === true ? (
          <img src="/assets/registerPage/checkMark.png" alt="check" />
        ) : (
          <span style={{ color: "red", position: "absolute", top: "60px" }}>
            Unfortunately we cannot ship in this country!
          </span>
        )}
      </div>
      {country === true && (
        <div className={styles.news}>
          <img src="/assets/registerPage/like.png" alt="" />
          <h4>Great news!</h4>
          <h6>Your state qualifies for telehealth treatment!</h6>
        </div>
      )}
    </>
  );
};

export default StepThree;
