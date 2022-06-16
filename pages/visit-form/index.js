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
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstname">
                      <Form.Label>
                        Patient First Name *{" "}
                        <small>(As it appears on your ID)</small>
                      </Form.Label>
                      <Form.Control
                        type="name"
                        className={styles.formControl}
                        placeholder="Enter name"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridLastname">
                      <Form.Label>
                        Patient Last Name *{" "}
                        <small>(As it appears on your ID)</small>
                      </Form.Label>
                      <Form.Control
                        type="lastname"
                        className={styles.formControl}
                        placeholder="Enter lastname"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridBirthday">
                      <Form.Label>Birthday</Form.Label>
                      <Form.Control
                        type="date"
                        className={styles.formControl}
                        placeholder="Enter birthday"
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group as={Col} controlId="formGridSexualActivity">
                    <Form.Label>
                      Are you seeking treatment for improved sexual activity?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Are you currently taking any medication for ED (erectile
                      dysfunction)?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <br />
                  <Form.Group
                    as={Col}
                    controlId="formGridED"
                    className={styles.checkbox}
                  >
                    <Form.Label>
                      Please identify all ED medications or drugs you take?
                    </Form.Label>
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Viagra"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Cialis"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label="Levitra"
                          name="group1"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                      </div>
                    ))}
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Sildenafil"
                          name="group1"
                          type={type}
                          id={`inline-${type}-4`}
                        />
                        <Form.Check
                          inline
                          label="Tadalafil"
                          name="group1"
                          type={type}
                          id={`inline-${type}-5`}
                        />
                        <Form.Check
                          inline
                          label="Other Medications"
                          name="group1"
                          type={type}
                          id={`inline-${type}-6`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstname">
                      <Form.Label>
                        Please specify other ED medications or drugs you take?
                      </Form.Label>
                      <Form.Control
                        type="textbox"
                        className={styles.formControl}
                      />
                    </Form.Group>
                  </Row>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Can you walk 1 mile on a flat surface in 20 minutes?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Are you currently taking any nitrate medications?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Are you currently taking any prescription medications?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Are you taking any other medications, vitamins or
                      supplements?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Do you have any allergies (medication, environmental,
                      foods, other)?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Have you ever been told you are not healthy enough to have
                      sexual intercourse?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Do you have any other medical conditions or surgeries?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <br />
                  <Form.Group
                    as={Col}
                    controlId="formGridED"
                    className={styles.checkbox}
                  >
                    <Form.Label>
                      Please identify all ED medications or drugs you take?
                    </Form.Label>
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="I Do Not Take Any Of These"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Nitroglycerin"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label="Isosorbide Dinitrate"
                          name="group1"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                      </div>
                    ))}
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Isosorbide Mononitrate"
                          name="group1"
                          type={type}
                          id={`inline-${type}-4`}
                        />
                        <Form.Check
                          inline
                          label="Riociguat"
                          name="group1"
                          type={type}
                          id={`inline-${type}-5`}
                        />
                        <Form.Check
                          inline
                          label="Ritonavir"
                          name="group1"
                          type={type}
                          id={`inline-${type}-6`}
                        />
                      </div>
                    ))}
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Amyl Nitrate"
                          name="group1"
                          type={type}
                          id={`inline-${type}-7`}
                        />
                        <Form.Check
                          inline
                          label="Poppers"
                          name="group1"
                          type={type}
                          id={`inline-${type}-8`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                  <br />
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Have you ever been diagnosed with low blood pressure?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Have you ever been diagnosed with high blood pressure?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Do you have any heart conditions or experience abnormal
                      heart beats (fast, irregular, unusually slow)?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Have you experienced chest pain/pressure or difficulty
                      breathing while active?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Have you experienced any episodes of fainting, severe
                      lightheadedness-dizziness?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Is there anything else you would like to tell the doctor?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Do you have any other medical conditions or surgeries?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Do you have any other medical conditions or surgeries?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridED">
                    <Form.Label>
                      Do you have any other medical conditions or surgeries?
                    </Form.Label>
                    <Row>
                      {gender.map((radio, idx) => (
                        <Col xs={3}>
                          <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            name="radio"
                            className={styles.buttons}
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) =>
                              setRadioValue(e.currentTarget.value)
                            }
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                  <br />
                  <br />
                  <Button
                    variant="primary"
                    className={styles.submitBtn}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </div>
        </Container>
      </main>
    </div>
  );
}