import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Check, PatchCheck, ArrowRight } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { AccordionContext, Form } from "react-bootstrap";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
import Router, { useRouter } from "next/router";
export default function VisitForm() {
  const [questions, setQuestions] = useState({});
  const [showQuestions, setShowQuestions] = useState(false);
  const [checkedState, setCheckedState] = useState(false);
  const router = useRouter();
  var question_i = 0;

  const authCtx = useContext(AuthContext);
  const gettingQuestions = async () => {
    const route = "/api/case/get-questions";

    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          console.log(res.data);
          setQuestions(res.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Not Good!");
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    try {
    } catch (error) {}
  }, []);

  const [formQuestions, setFormQuestions] = useState({
    Are_you_seeking_treatment_for_improved_sexual_activity: "",
    Are_you_experiencing_erectile_dysfunction_symptoms: "",
    Are_you_currently_taking_any_medication_for_ED: "",
    What_are_those_medication_for_ED_you_are_taking: "",
    Specify_other_medication_for_ED_you_are_taking: "",
    Can_you_walk_1_mile_on_a_flat_surface_in_20_minutes: "",
    How_long_does_it_take_you_to_climb_2_flights_of_stairs: "",
    Are_you_currently_taking_any_nitrate_medications: "",
    Are_you_currently_taking_any_prescription_medications: "",
    What_prescription_medications_you_are_taking: "",
    Are_you_taking_any_other_medications_vitamins_or_supplements: "",
    All_non_prescription_medications_or_drugs_you_take: "",
    Specify_non_prescription_medication: "",
    Do_you_have_allergies: "",
    allergies_details: "",
    Have_you_ever_been_told_you_are_not_healthy_enough_to_have_sexual_intercourse:
      "",
    Do_you_have_any_other_medical_conditions_or_surgeries: "",
    Records_of_Medical_Condition_and_Surgeries: "",
    Do_you_take_any_of_the_following_medications: "",
    Have_you_ever_been_diagnosed_with_low_blood_pressure: "",
    Have_you_ever_been_diagnosed_with_high_blood_pressure: "",
    How_do_you_manage_your_hypertension_without_medication: "",
    Do_you_have_any_heart_conditions_or_experience_abnormal_heart_beats_fast_irregular_unusually_slow:
      "",
    Have_you_experienced_chest_pain_pressure_or_difficulty_breathing_while_active:
      "",
    Have_you_experienced_any_episodes_of_fainting_severe_lightheadedness_dizziness:
      "",
    Have_you_experienced_any_blurry_abnormal_vision_or_severe_unexplained_headaches:
      "",
    Is_there_anything_else_you_would_like_to_tell_the_doctor: "",
    additional_notes: "",
  });

  const checkboxChange = (event) => {
    event.target.blur();
    const { value, name, id } = event.target;

    var arrayCheckbox = document.getElementsByName(name);
    var maskArray = [];

    arrayCheckbox.forEach((element) => {
      if (element.checked == true) {
        maskArray.push(element.value);
      }
    });

    if (value === "None Apply") {
      var arrMark = document.getElementsByName(name);
      for (var i = 0; i < arrMark.length; i++) {
        arrMark[i].checked = false;
      }
      event.target.checked = true;
    } else {
      var none_apply = document.querySelectorAll(
        "input[name='" + name + "'][value='None Apply']"
      );
      if (none_apply.length > 0) {
        none_apply[0].checked = false;
      }

      var arrayCheckbox = document.getElementsByName(name);
      var maskArray = [];

      arrayCheckbox.forEach((element) => {
        if (element.checked == true) {
          maskArray.push(element.value);
        }
      });
      console.log(maskArray);
      //event.target.checked = true;
    }
    setFormQuestions({
      ...formQuestions,
      [name]: maskArray,
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextArea = (event) => {
    const { value, name } = event.target;

    setFormQuestions({
      ...formQuestions,
      [name]: value,
    });
  };

  const handleQuestions = (event) => {
    const { value, name } = event.target;
    var showMore = event.target.getAttribute("data-showmore");
    var validationRegex = event.target.getAttribute("data-regex");
    var validationReqValue = event.target.getAttribute("data-required_value");
    var validationErrorMessage =
      event.target.getAttribute("data-error_message");
    console.log("Cao1");

    if (showMore != "null") {
      const obj = JSON.parse(showMore);

      Object.entries(obj).map(([key, value]) => {
        console.log(value[0]);
        if (event.target.value === key) {
          const element = document.getElementById(value[0]);

          element.style.display = "block";
        } else {
          const element = document.getElementById(value[0]);

          element.style.display = "none";
        }
      });
    }

    if (validationReqValue != null) {
      console.log("Cao2");
      if (value != validationReqValue) {
        console.log("Cao3");
        alert(validationErrorMessage);
      }
    }

    setFormQuestions({
      ...formQuestions,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const route = "/api/case/medical-form";
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
    };
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), payload })
        .then((res) => {
          console.log(res.data);
          gettingQuestions();
          setShowQuestions(true);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          alert(error.response.data.errors);
        });
    } catch (err) {
      alert("Username or password are not good! 22" + err);
    }
  };

  const handleQuestionsSubmit = async (event) => {
    console.log("OKEJ U PITANJIMA SMO");
    event.preventDefault();
    const route = "/api/case/save-questions";
    const payload = {
      Are_you_seeking_treatment_for_improved_sexual_activity:
        formQuestions.Are_you_seeking_treatment_for_improved_sexual_activity,
      Are_you_experiencing_erectile_dysfunction_symptoms:
        formQuestions.Are_you_experiencing_erectile_dysfunction_symptoms,
      Are_you_currently_taking_any_medication_for_ED:
        formQuestions.Are_you_currently_taking_any_medication_for_ED,
      What_are_those_medication_for_ED_you_are_taking:
        formQuestions.What_are_those_medication_for_ED_you_are_taking,
      Specify_other_medication_for_ED_you_are_taking:
        formQuestions.Specify_other_medication_for_ED_you_are_taking,
      Can_you_walk_1_mile_on_a_flat_surface_in_20_minutes:
        formQuestions.Can_you_walk_1_mile_on_a_flat_surface_in_20_minutes,
      How_long_does_it_take_you_to_climb_2_flights_of_stairs:
        formQuestions.How_long_does_it_take_you_to_climb_2_flights_of_stairs,
      Are_you_currently_taking_any_nitrate_medications:
        formQuestions.Are_you_currently_taking_any_nitrate_medications,
      Are_you_currently_taking_any_prescription_medications:
        formQuestions.Are_you_currently_taking_any_prescription_medications,
      What_prescription_medications_you_are_taking:
        formQuestions.What_prescription_medications_you_are_taking,
      Are_you_taking_any_other_medications_vitamins_or_supplements:
        formQuestions.Are_you_taking_any_other_medications_vitamins_or_supplements,
      All_non_prescription_medications_or_drugs_you_take:
        formQuestions.All_non_prescription_medications_or_drugs_you_take,
      Specify_non_prescription_medication:
        formQuestions.Specify_non_prescription_medication,
      Do_you_have_allergies: formQuestions.Do_you_have_allergies,
      allergies_details: formQuestions.allergies_details,
      Have_you_ever_been_told_you_are_not_healthy_enough_to_have_sexual_intercourse:
        formQuestions.Have_you_ever_been_told_you_are_not_healthy_enough_to_have_sexual_intercourse,
      Do_you_have_any_other_medical_conditions_or_surgeries:
        formQuestions.Do_you_have_any_other_medical_conditions_or_surgeries,
      Records_of_Medical_Condition_and_Surgeries:
        formQuestions.Records_of_Medical_Condition_and_Surgeries,
      Do_you_take_any_of_the_following_medications:
        formQuestions.Do_you_take_any_of_the_following_medications,
      Have_you_ever_been_diagnosed_with_low_blood_pressure:
        formQuestions.Have_you_ever_been_diagnosed_with_low_blood_pressure,
      Have_you_ever_been_diagnosed_with_high_blood_pressure:
        formQuestions.Have_you_ever_been_diagnosed_with_high_blood_pressure,
      How_do_you_manage_your_hypertension_without_medication:
        formQuestions.How_do_you_manage_your_hypertension_without_medication,
      Do_you_have_any_heart_conditions_or_experience_abnormal_heart_beats_fast_irregular_unusually_slow:
        formQuestions.Do_you_have_any_heart_conditions_or_experience_abnormal_heart_beats_fast_irregular_unusually_slow,
      Have_you_experienced_chest_pain_pressure_or_difficulty_breathing_while_active:
        formQuestions.Have_you_experienced_chest_pain_pressure_or_difficulty_breathing_while_active,
      Have_you_experienced_any_episodes_of_fainting_severe_lightheadedness_dizziness:
        formQuestions.Have_you_experienced_any_episodes_of_fainting_severe_lightheadedness_dizziness,
      Have_you_experienced_any_blurry_abnormal_vision_or_severe_unexplained_headaches:
        formQuestions.Have_you_experienced_any_blurry_abnormal_vision_or_severe_unexplained_headaches,
      Is_there_anything_else_you_would_like_to_tell_the_doctor:
        formQuestions.Is_there_anything_else_you_would_like_to_tell_the_doctor,
      additional_notes: formQuestions.additional_notes,
    };
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token(), payload })
        .then((res) => {
          //console.log(res.data);
          //router.push("/switch");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          const cure = error.response.data.errors;
          const rest = Object.entries(cure);
          var values = "";
          rest.map(([question, answer]) => {
            values = values + question + " : " + answer + "  ";
          });
          alert(values);
        });
    } catch (err) {
      alert("Username or password are not good! 22" + err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue - Visit Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.registerPage}>
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
            <div className="text-center">
              <h2>Please Complete Medical Profile</h2>
              <p className={styles.grayText}>
                No waiting rooms. No expensive doctors visits. Prescription
                treatments sent to your door, discreetly. This is the future of
                tele-medicine.
              </p>
            </div>
            <Col md={{ span: 6, offset: 3 }}>
              <div className={styles.formField}>
                {!showQuestions && (
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="firstName">
                        <Form.Label>
                          Patient First Name *{" "}
                          <small>(As it appears on your ID)</small>
                        </Form.Label>
                        <Form.Control
                          required
                          name="firstName"
                          type="name"
                          onChange={handleChange}
                          placeholder="Enter First Name"
                          value={formData.email}
                          className={styles.formControl}
                        />
                        <Form.Control.Feedback type="invalid">
                          Incorrect First name
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="lastName">
                        <Form.Label>
                          {" "}
                          Patient Last Name *{" "}
                          <small>(As it appears on your ID)</small>
                        </Form.Label>
                        <Form.Control
                          required
                          name="lastName"
                          type="name"
                          onChange={handleChange}
                          placeholder="Enter Last name"
                          value={formData.email}
                          className={styles.formControl}
                        />
                        <Form.Control.Feedback type="invalid">
                          Incorrect Last name
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="dob">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control
                          required
                          name="dob"
                          type="date"
                          onChange={handleChange}
                          placeholder="Enter Date of birth"
                          value={formData.email}
                          className={styles.formControl}
                        />
                        <Form.Control.Feedback type="invalid">
                          Incorrect Birthday
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Button className="d-block mx-auto py-3 mt-5" type="submit">
                      Next <ArrowRight />
                    </Button>
                  </Form>
                )}
                <br />
                <br />
                <Form onSubmit={handleQuestionsSubmit}>
                  {showQuestions &&
                    Object.entries(questions).map(([name, question]) => {
                      question_i++;
                      if (question.type === "radio") {
                        var labela = <div>{question.label}</div>;
                        if (question.validation != null) {
                          if (question.validation.message != null) {
                            var error_message = (
                              <div>{question.validation.message}</div>
                            );
                          } else {
                            error_message = "";
                          }
                        }

                        var options = Object.entries(question.answers).map(
                          ([key, value]) => {
                            var yesNo = "";
                            if (value === "YES" || value === "NO") {
                              yesNo = "col-md-3";
                            }
                            var validations = {
                              regex: null,
                              required_value: null,
                              message: null,
                            };
                            if (question.validation != null) {
                              validations = question.validation;
                            }

                            return (
                              <div key={value.label + key} className={yesNo}>
                                <Form.Check>
                                  <Form.Check.Input
                                    required
                                    type="radio"
                                    className="btn-check"
                                    data-regex={validations.regex}
                                    data-required_value={
                                      validations.required_value
                                    }
                                    data-error_message={validations.message}
                                    data-showmore={JSON.stringify(
                                      question.show_more
                                    )}
                                    name={name}
                                    id={name + key}
                                    onChange={handleQuestions}
                                    value={key}
                                  />
                                  <Form.Check.Label
                                    htmlFor={name + key}
                                    className={
                                      styles.buttons + " btn" + " btn-primary"
                                    }
                                  >
                                    {value}
                                  </Form.Check.Label>
                                  <Form.Control.Feedback type="invalid">
                                    Please choose .
                                  </Form.Control.Feedback>
                                </Form.Check>
                              </div>
                            );
                          }
                        );
                        return (
                          <div id={name} key={question.label}>
                            {labela}
                            <br /> <Row>{options}</Row>
                            <div className={styles.error_message}>
                              {error_message}
                            </div>
                            <br /> <br /> <br /> <br />
                          </div>
                        );
                      } else if (question.type === "checkbox") {
                        var labela = <div>{question.label}</div>;
                        var options = Object.entries(question.answers).map(
                          ([key, value], index) => {
                            return (
                              <div key={value.label + key} className="col-12">
                                <Form.Check>
                                  <Form.Check.Input
                                    type="checkbox"
                                    className="btn-check"
                                    name={name}
                                    id={name + index}
                                    onChange={checkboxChange}
                                    value={key}
                                    checked={checkedState[index]}
                                  />
                                  <Form.Check.Label
                                    htmlFor={name + index}
                                    className={
                                      styles.buttons + " btn" + " btn-primary"
                                    }
                                  >
                                    {value}
                                  </Form.Check.Label>
                                </Form.Check>
                              </div>
                            );
                          }
                        );
                        return (
                          <div id={name} key={question.label}>
                            {labela} <Row>{options}</Row>
                            <br /> <br /> <br /> <br />
                          </div>
                        );
                      } else if (question.type === "textarea") {
                        var textarea = (
                          <div>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>{question.label}</Form.Label>
                              <Form.Control
                                onChange={handleTextArea}
                                name={name}
                                as="textarea"
                                rows={3}
                              />
                            </Form.Group>
                          </div>
                        );
                        return (
                          <div id={name} key={question.label}>
                            <div>{textarea}</div>
                            <br />
                            <br />
                          </div>
                        );
                      }
                    })}
                  {showQuestions && (
                    <Button type="submit">Submit Questions</Button>
                  )}
                </Form>
              </div>
            </Col>
          </div>
        </Container>
      </main>
    </div>
  );
}
