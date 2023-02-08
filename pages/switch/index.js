import Head from "next/head";
import { useContext, useState, useEffect, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ToggleButton from "react-bootstrap/ToggleButton";
import { AccordionContext, Form } from "react-bootstrap";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
export default function Home() {
  const authCtx = useContext(AuthContext);
  const [medications, setMedications] = useState([{}]);
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
          console.log(res.data);
          setMedications(res.data);
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
    gettingMedications();
  }, []);

  useEffect(() => {
    //console.log(chosenMed);
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
            });
          } else {
            console.log("cure");
          }
        }

        //console.log(chosenMed);
      } else {
        //console.log("Ne radi");
      }
    });

    let objectMaking = [];
    let objectMakingTimes = [];
    similarStrong.forEach((object) => objectMaking.push(returnObject(object)));
    similarDosage.forEach((object) =>
      objectMakingTimes.push(returnObject(object))
    );

    //console.log(objectMaking);
    setStrong1(objectMaking);
    setTimes(objectMakingTimes);
  }

  const backToCheckout = () => {};

  const medications2 = [
    {
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
    },
    {
      id: 2,
      product_title: "Viagra 25 mg, 8 days supply",
      product_tag: "Viagra",
      partner_medication_id: "5c98465d-3646-4a56-b5fc-4fde79d7601a",
      product_dosage_tag: "beginner",
      product_dosage_mg: "25.0",
      product_dosages_per_month: 8,
      product_qty: 8,
      product_price: "560.00",
      product_image: "Viagra_25mg_8",
    },
    {
      id: 3,
      product_title: "Viagra 25. mg, 12 days supply",
      product_tag: "Viagra",
      partner_medication_id: "21c34916-5cf9-4161-8420-a3df2f94cb5e",
      product_dosage_tag: "beginner",
      product_dosage_mg: "25.0",
      product_dosages_per_month: 12,
      product_qty: 12,
      product_price: "840.00",
      product_image: "Viagra_25mg_12",
    },
    {
      id: 4,
      product_title: "Viagra 50 mg, 4 days supply",
      product_tag: "Viagra",
      partner_medication_id: "3b0ac017-ca78-4399-b1c3-59a6c6f6c851",
      product_dosage_tag: "intermediate",
      product_dosage_mg: "50.0",
      product_dosages_per_month: 4,
      product_qty: 8,
      product_price: "560.00",
      product_image: "Viagra_50mg_8",
    },
    {
      id: 5,
      product_title: "Viagra 50 mg, 8 days supply",
      product_tag: "Viagra",
      partner_medication_id: "ab6f5f70-d667-44e6-9fa2-7a5760b1bb0c",
      product_dosage_tag: "intermediate",
      product_dosage_mg: "50.0",
      product_dosages_per_month: 8,
      product_qty: 16,
      product_price: "1120.00",
      product_image: "Viagra_50mg_16",
    },
    {
      id: 6,
      product_title: "Viagra 50 mg, 12 days supply",
      product_tag: "Viagra",
      partner_medication_id: "63d71331-82a3-463e-9017-6ebab5eecc88",
      product_dosage_tag: "intermediate",
      product_dosage_mg: "50.0",
      product_dosages_per_month: 12,
      product_qty: 24,
      product_price: "1680.00",
      product_image: "Viagra_50mg_24",
    },
    {
      id: 7,
      product_title: "Viagra 100mg, 4 days supply",
      product_tag: "Viagra",
      partner_medication_id: "0a54406f-b803-48c9-856f-f6f65806a2b1",
      product_dosage_tag: "strong",
      product_dosage_mg: "100.0",
      product_dosages_per_month: 4,
      product_qty: 16,
      product_price: "1120.00",
      product_image: "Viagra_100mg_16",
    },
    {
      id: 8,
      product_title: "Viagra 100 mg, 8 days supply",
      product_tag: "Viagra",
      partner_medication_id: "e10f2968-4ff7-4214-ad5d-d12703a80803",
      product_dosage_tag: "strong",
      product_dosage_mg: "100.0",
      product_dosages_per_month: 8,
      product_qty: 32,
      product_price: "2240.00",
      product_image: "Viagra_100mg_32",
    },
    {
      id: 9,
      product_title: "Viagra 100 mg, 12 days supply",
      product_tag: "Viagra",
      partner_medication_id: "a20a49d8-85bc-4439-b128-80aaa3944ce7",
      product_dosage_tag: "strong",
      product_dosage_mg: "100.0",
      product_dosages_per_month: 12,
      product_qty: 48,
      product_price: "3360.00",
      product_image: "Viagra_100mg_32",
    },
    {
      id: 10,
      product_title: "Sildenafil 20 mg, 4 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "f9886533-1675-4ffa-9355-6517699e9737",
      product_dosage_tag: "beginner",
      product_dosage_mg: "20.0",
      product_dosages_per_month: 4,
      product_qty: 4,
      product_price: "8.00",
      product_image: "Sildenafil_20mg_4",
    },
    {
      id: 11,
      product_title: "Sildenafil 20 mg, 8 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "32bb9528-f9a7-48b4-8c12-1b360814e989",
      product_dosage_tag: "beginner",
      product_dosage_mg: "20.0",
      product_dosages_per_month: 8,
      product_qty: 8,
      product_price: "16.00",
      product_image: "Sildenafil_20mg_8",
    },
    {
      id: 12,
      product_title: "Sildenafil 20 mg, 12 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "a82005a6-da59-49ee-90b6-b75b78a1d7af",
      product_dosage_tag: "beginner",
      product_dosage_mg: "20.0",
      product_dosages_per_month: 12,
      product_qty: 12,
      product_price: "24.00",
      product_image: "Sildenafil_20mg_12",
    },
    {
      id: 13,
      product_title: "Sildenafil 60 mg, 4 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "ad00639b-ef28-4666-a429-c5e72c6011ef",
      product_dosage_tag: "intermediate",
      product_dosage_mg: "60.0",
      product_dosages_per_month: 4,
      product_qty: 12,
      product_price: "24.00",
      product_image: "Sildenafil_60mg_12",
    },
    {
      id: 14,
      product_title: "Sildenafil 60 mg, 8 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "06490720-1693-4522-8c38-cbaf335ab295",
      product_dosage_tag: "intermediate",
      product_dosage_mg: "60.0",
      product_dosages_per_month: 8,
      product_qty: 24,
      product_price: "48.00",
      product_image: "Sildenafil_60mg_24",
    },
    {
      id: 15,
      product_title: "Sildenafil 60 mg, 12 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "f456a7fd-2f5a-4b32-a02a-3c8594b311e0",
      product_dosage_tag: "intermediate",
      product_dosage_mg: "60.0",
      product_dosages_per_month: 12,
      product_qty: 36,
      product_price: "72.00",
      product_image: "Sildenafil_60mg_36",
    },
    {
      id: 16,
      product_title: "Sildenafil 100 mg, 4 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "ad00639b-ef28-4666-a429-c5e72c6011ef",
      product_dosage_tag: "strong",
      product_dosage_mg: "100.0",
      product_dosages_per_month: 4,
      product_qty: 20,
      product_price: "40.00",
      product_image: "Sildenafil_100mg_20",
    },
    {
      id: 17,
      product_title: "Sildenafil 100 mg, 8 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "a94155f9-d9ec-4bf6-9db7-246f020095e3",
      product_dosage_tag: "strong",
      product_dosage_mg: "100.0",
      product_dosages_per_month: 8,
      product_qty: 40,
      product_price: "80.00",
      product_image: "Sildenafil_100mg_40",
    },
    {
      id: 18,
      product_title: "Sildenafil 100 mg, 12 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "fbcab72e-b955-41ca-8a1f-c7d544801574",
      product_dosage_tag: "strong",
      product_dosage_mg: "100.0",
      product_dosages_per_month: 12,
      product_qty: 60,
      product_price: "120.00",
      product_image: "Sildenafil_100mg_60",
    },
    {
      id: 19,
      product_title: "Cialis 2.5 mg, 30 day supply",
      product_tag: "Cialis",
      partner_medication_id: "0a730fb5-beed-440b-b062-161d3542e37",
      product_dosage_tag: "beginner",
      product_dosage_mg: "2.5",
      product_dosages_per_month: 30,
      product_qty: 30,
      product_price: "1020.00",
      product_image: "Cialis_2.5mg_30",
    },
    {
      id: 20,
      product_title: "Cialis 5 mg, 30 day supply",
      product_tag: "Cialis",
      partner_medication_id: "ade5d263-a115-4f4b-9073-11b44676ae33",
      product_dosage_tag: "intermediate",
      product_dosage_mg: "5.0",
      product_dosages_per_month: 60,
      product_qty: 60,
      product_price: "2040.00",
      product_image: "Cialis_5mg_60",
    },
    {
      id: 21,
      product_title: "Cialis 10 mg, 30 day supply",
      product_tag: "Cialis",
      partner_medication_id: "6d5fcfdb-c080-4616-8152-2bbc10ca7a04",
      product_dosage_tag: "strong",
      product_dosage_mg: "10.0",
      product_dosages_per_month: 120,
      product_qty: 120,
      product_price: "4080.00",
      product_image: "Cialis_10mg_120",
    },
    {
      id: 22,
      product_title: "Tadalafil 2.5 mg, 30 days supply",
      product_tag: "Tadalafil",
      partner_medication_id: "e52d3947-95f3-46ca-8f14-242920840d0f",
      product_dosage_tag: "beginner",
      product_dosage_mg: "2.5",
      product_dosages_per_month: 30,
      product_qty: 30,
      product_price: "300.00",
      product_image: "Tadalafil_2.5mg_30",
    },
    {
      id: 23,
      product_title: "Tadalafil 5 mg, 30 days supply",
      product_tag: "Tadalafil",
      partner_medication_id: "792d494a-6f15-4054-a9d1-7b2b09fa781a",
      product_dosage_tag: "intermediate",
      product_dosage_mg: "5.0",
      product_dosages_per_month: 60,
      product_qty: 60,
      product_price: "600.00",
      product_image: "Tadalafil_5mg_60",
    },
    {
      id: 24,
      product_title: "Tadalafil 10 mg, 30 days supply",
      product_tag: "Tadalafil",
      partner_medication_id: "057ba97e-ef66-44fc-9f4a-7d134e83b363",
      product_dosage_tag: "strong",
      product_dosage_mg: "10.0",
      product_dosages_per_month: 120,
      product_qty: 120,
      product_price: "1200.00",
      product_image: "Tadalafil_10mg_120",
    },
    {
      id: 25,
      product_title: "Sildenafil 80 mg, 12 days supply",
      product_tag: "Sildenafil",
      partner_medication_id: "9baa0675-4dc1-4d25-a410-953fc45259b3",
      product_dosage_tag: "advanced",
      product_dosage_mg: "80.0",
      product_dosages_per_month: 12,
      product_qty: 48,
      product_price: "89.95",
      product_image: "Sildenafil_80mg_12",
    },
  ];

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
        <link rel="icon" href="/favicon.ico" />
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
                        <Col md={12}>
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
                          <Col md={4}>
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
                    {chosenMed.product_dosage_tag}" level{" "}
                    {chosenMed.product_dosages_per_month} times a month
                  </h3>
                  <h1>
                    <span className={styles.currency}>$</span>
                    {chosenMed.product_price}
                  </h1>
                  <p>Change your answers to discover more pricing options.</p>
                  <Button
                    onClick={() => {
                      console.log(chosenMed.id);
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
