import Head from "next/head";
import { useContext, useState, useEffect, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ToggleButton from "react-bootstrap/ToggleButton";
import { AccordionContext, Form } from "react-bootstrap";
import Axios from "axios";
import { useSearchParams } from "next/navigation";
import AuthContext from "../../store/auth-context";
import Router, { useRouter } from "next/router";
export default function Switch(props) {
  const authCtx = useContext(AuthContext);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [medications, setMedications] = useState([{}]);
  const [initialRender, setInitialRender] = useState(true);
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

  const [months, setMonths] = useState([
    { name: "4", value: 4 },
    { name: "8", value: 8 },
    { name: "12", value: 12 },
  ]);

  const [monthValue, setMonthValue] = useState(1);

  const [medication, setMedication] = useState([
    { name: "Sildenafil (generic Viagra)", value: "Sildenafil" },
    { name: "Viagra", value: "Viagra" },
    { name: "Tadalafil (generic Cialis)", value: "Tadalafil" },
    { name: "Cialis", value: "Cialis" },
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
  const changeMonths = (e) => {
    setMonthValue(e.target.value);
  };

  useEffect(() => {
    gettingMedications();
  }, []);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return; // Skip the effect on initial render
    }

    let unique_product_tag = [];
    let unique_product_object = [];
    medications.map((element) => {
      if (!unique_product_tag.includes(element.product_tag)) {
        unique_product_tag.push(element.product_tag);
        unique_product_object.push(returnObject(element.product_tag));
      }
    });

    setMedication(unique_product_object);
  }, [medications]);

  useEffect(() => {
    findRightOne();
  }, [
    chosenMed.product_tag,
    chosenMed.product_dosages_per_month,
    chosenMed.product_dosage_tag,
    chosenMed.product_qty,
    monthValue,
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
    let similarMonths = [];

    medications.find((element) => {
      if (element.product_tag === chosenMed.product_tag) {
        if (!similarStrong.includes(element.product_dosage_tag)) {
          similarStrong.push(element.product_dosage_tag);
        }

        if (element.product_dosage_tag === chosenMed.product_dosage_tag) {
          if (
            !similarMonths.includes(
              element.product_qty / element.product_dosages_per_month
            )
          ) {
            similarMonths.push(
              element.product_qty / element.product_dosages_per_month
            );
          }

          if (
            monthValue ===
            chosenMed.product_qty / chosenMed.product_dosages_per_month
          ) {
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
            }
          }
        }
      }
    });

    let objectMaking = [];
    let objectMakingTimes = [];
    let objectMakingMonths = [];

    similarMonths.forEach((object) =>
      objectMakingMonths.push(returnObject(object))
    );

    similarStrong.forEach((object) => objectMaking.push(returnObject(object)));
    similarDosage.forEach((object) =>
      objectMakingTimes.push(returnObject(object))
    );

    setMonths(objectMakingMonths);
    setStrong1(objectMaking);
    setTimes(objectMakingTimes);
  }

  const backToCheckout = async (medicationId) => {
    const route = "/api/order/cancel-create-case";
    var caseId = searchParams.get("case_id");
    const headers = {
      "Content-Type": "application/json",
      case: caseId,
    };
    try {
      const rese = await Axios.post(
        route,
        {
          Token: authCtx.Token(),
          payload: { product_id: medicationId },
        },
        { headers }
      )
        .then((res) => {
          router.push("/account");
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

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
                            {radio.value}
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
                        How many months you need, select one:
                      </Form.Label>
                      {months.map((element) => (
                        <Col md={12} key={element.name}>
                          <ToggleButton
                            key={element.name}
                            id={`radiod-${element.name}`}
                            type="radio"
                            name="months"
                            className={styles.buttons}
                            value={element.value}
                            checked={
                              chosenMed.product_qty /
                                chosenMed.product_dosages_per_month ==
                              monthValue
                            }
                            onChange={changeMonths}
                          >
                            {element.name}
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
                                chosenMed.product_dosages_per_month ==
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
                    CHANGE PRODUCT
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
