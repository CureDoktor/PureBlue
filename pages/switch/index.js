import Head from "next/head";
import { useContext, useState, useEffect, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ToggleButton from "react-bootstrap/ToggleButton";
import { AccordionContext, Form } from "react-bootstrap";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
import Router, { useRouter } from "next/router";
export default function Switch(props) {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [medications, setMedications] = useState([{}]);
  const [caseId, setCaseId] = useState(null);
  const [chosenMed, setChosenMed] = useState({
    id: 1,
    product_title: "Viagra 25 mg, 4 day supply",
    product_tag: "Viagra",
    partner_medication_id: "eb37cfd0-6b3a-472f-8cf6-2bdd1a0c806a",
    product_dosage_tag: "beginner",
    product_dosage_mg: "25.0",
    product_dosages_per_month: 4,
    product_qty: 4,
    product_price: "280.00",
    product_image: "Viagra_25mg_4",
  });

  const [strong1, setStrong1] = useState([
    { name: "Begginer", value: "begginer" },
    { name: "Intermediate", value: "intermediate" },
    { name: "Strong", value: "strong" },
  ]);

  const [times, setTimes] = useState([
    { name: "4", value: 4 },
    { name: "8", value: 8 },
    { name: "12", value: 12 },
  ]);

  const returnObject = (value) => {
    let obj = {
      name: value,
      value: value,
    };

    return obj;
  };

  const gettingMedications = async () => {
    const route = "/api/get-products";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setMedications(res.data.data);
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    gettingMedications();
    gettingOrderInfo();
  }, []);

  const gettingOrderInfo = async () => {
    const route = "/api/case/get-case";
    try {
      const rese = await Axios.post(route, { Token: authCtx.Token() })
        .then((res) => {
          setCaseId(res.data?.data[0].id);
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  useEffect(() => {
    findRightOne();
  }, [
    chosenMed.product_tag,
    chosenMed.product_dosages_per_month,
    chosenMed.product_dosage_tag,
  ]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setChosenMed({
      ...chosenMed,
      [name]: value,
    });
  };

  function findRightOne() {
    let similarStrong = [];
    let similarDosage = [];

    medications.find((element) => {
      if (element.product_tag === chosenMed.product_tag) {
        if (!similarStrong.includes(element.product_dosage_tag)) {
          similarStrong.push(element.product_dosage_tag);
        }

        if (element.product_dosage_tag === chosenMed.product_dosage_tag) {
          if (!similarDosage.includes(element.product_dosages_per_month)) {
            similarDosage.push(element.product_dosages_per_month);
          }
          if (
            element.product_dosages_per_month ==
            chosenMed.product_dosages_per_month
          ) {
            setChosenMed({
              ...chosenMed,
              product_price: element.product_price,
              id: element.id,
              partner_medication_id: element.partner_medication_id,
            });
          } else {
          }
        }
      } else {
      }
    });

    let objectMaking = [];
    let objectMakingTimes = [];
    similarStrong.forEach((object) => objectMaking.push(returnObject(object)));
    similarDosage.forEach((object) =>
      objectMakingTimes.push(returnObject(object))
    );

    setStrong1(objectMaking);
    setTimes(objectMakingTimes);
  }

  const backToCheckout = async (medicationId) => {
    const route = "/api/case/save-product";
    var currentProductId = { product_id: medicationId, caseId: caseId };
    try {
      const rese = await Axios.post(route, {
        Token: authCtx.Token(),
        payload: currentProductId,
      })
        .then((res) => {
          router.push("/order");
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  const medication = [
    { name: "Sildenafil (generic Viagra)", value: "Sildenafil" },
    { name: "Viagra", value: "Viagra" },
    { name: "Tadalafil (generic Cialis)", value: "Tadalafil" },
    { name: "Cialis", value: "Cialis" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue - Switch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main className={styles.registerPage}>
        <Container>
          <div className={styles.fieldOne}>
            <Row>
              <Col md={6} className={styles.fields}>
                <div className={styles.formField}>
                  <Form>
                    <Form.Group as={Col} controlId="formGridSexualActivity">
                      <Form.Label>
                        First decide your preferred medication, select one:
                      </Form.Label>
                      {medication.map((radio, idx) => (
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
                    <Form.Group as={Col} controlId="formGridSexualActivity">
                      <Form.Label>
                        How strong per serving you think you need, select one:
                      </Form.Label>
                      {strong1.map((radio, idx) => (
                        <Col md={12} key={idx}>
                          <ToggleButton
                            key={idx}
                            id={`radiod-${idx}`}
                            type="radio"
                            name="product_dosage_tag"
                            className={styles.buttons}
                            value={radio.value}
                            checked={
                              chosenMed.product_dosage_tag === radio.value
                            }
                            onChange={handleChange}
                          >
                            {radio.name}
                          </ToggleButton>
                        </Col>
                      ))}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridSexualActivity">
                      <Form.Label>
                        How many times you believe you will take the medication
                        each month, select one:
                      </Form.Label>
                      <Row>
                        {times.map((radio, idx) => (
                          <Col md={4} key={idx}>
                            <ToggleButton
                              key={idx}
                              id={`radioa-${idx}`}
                              type="radio"
                              name="product_dosages_per_month"
                              className={styles.buttons}
                              value={radio.value}
                              checked={
                                chosenMed.product_dosages_per_month ===
                                radio.value
                              }
                              onChange={handleChange}
                            >
                              {radio.name + " TIMES"}
                            </ToggleButton>
                          </Col>
                        ))}
                      </Row>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
              <Col md={6} className={styles.fields}>
                <div className={styles.whitePart}>
                  <h2>YOUR PRICE BASED ON ANSWERS</h2>
                  <h3>
                    You chose {chosenMed.product_tag} at "
                    {chosenMed.product_dosage_tag}" level
                    {chosenMed.product_dosages_per_month} times a month
                  </h3>
                  <h1>
                    <span className={styles.currency}>$</span>
                    {chosenMed.product_price}
                  </h1>
                  <p>Change your answers to discover more pricing options.</p>
                  <Button
                    onClick={() => {
                      backToCheckout(chosenMed.id);
                    }}
                    className={styles.backToCheckout}
                  >
                    BACK TO CHECKOUT
                  </Button>
                  <br />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </main>
    </div>
  );
}
