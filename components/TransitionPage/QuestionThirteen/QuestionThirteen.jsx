import React, { useState, useEffect } from "react";
import styles from "./QuestionThirteen.styles.module.scss";
import { thirteenQuestionDropDown } from "../data";
import * as Yup from "yup";
import Axios from "axios";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";

const QuestionThirteen = ({ onNext, setPreferredState, preferredState }) => {
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

  const validationSchema = Yup.object().shape({
    state: Yup.string()
      .required("Please select a state")
      .notOneOf(["AS", "SC"], "Your treatment is not allowed in this country"),
    checkbox: Yup.bool().oneOf(
      [true],
      "You must acknowledge the Terms and Conditions"
    ),
  });

  return (
    <div className={styles.container}>
      <button>Your $30 off promo code has been applied!</button>
      <p className={styles.heading}>
        Let’s make sure telehealth treatments are <br /> allowed in your state
      </p>
      <p className={styles.subHeading}>Select your state</p>
      <Formik
        initialValues={{ state: "", checkbox: false }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values.state);
          localStorage.setItem("state", values.state);
          setPreferredState(values.state);
          onNext();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.selectContainer}>
              <Field as="select" name="state" className={styles.select}>
                <option value="" disabled>
                  Select a state
                </option>
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
              </Field>
              <span name="state" className={styles.ErrorMessage}>
                <ErrorMessage name="state" />
              </span>
            </div>
            <div className={styles.checkBox}>
              <label>
                <Field type="checkbox" name="checkbox" />
                <span>
                  I acknowledge the Terms and Conditions, Privacy Policy, and
                  Telehealth Consent.
                </span>
              </label>
              <span name="checkbox" className={styles.ErrorMessage}>
                <ErrorMessage name="checkbox" />
              </span>
            </div>
            <button className={styles.continue} type="submit">
              Continue
            </button>
            <p className={styles.signIn}>
              Already have an account?{" "}
              <Link href="/login" style={{ color: "blue" }}>
                Sign In
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuestionThirteen;
