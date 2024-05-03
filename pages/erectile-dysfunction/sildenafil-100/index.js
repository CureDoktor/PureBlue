import { useContext, useState, React } from "react";
import {
  AccordionContext,
  Card,
  Col,
  Container,
  Row,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import styles from "./styles.module.scss";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useRouter } from "next/navigation";
import { searchParamsUrl } from "../../../components/searchParams";
export default function Sildenafil() {
  const router = useRouter();
  const getMyTreatment = () => {
    router.push("/transition-page" + searchParamsUrl());
  };

  const [expandedItems, setExpandedItems] = useState([]);
  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      callback && callback(eventKey);
      toggleItem(eventKey);
    });

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        className="headerOne"
        style={{
          backgroundColor: "#f7f7f7",
          border: "0px",
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

  const toggleItem = (eventKey) => {
    setExpandedItems((prevItems) =>
      prevItems.includes(eventKey)
        ? prevItems.filter((item) => item !== eventKey)
        : [...prevItems, eventKey]
    );
  };

  const newsDescription = [
    "Medication prescribed by US-licensed medical professionals ",
    "Completely online – no in-person visits needed",
    "Fast, discreet, and safe.",
  ];

  const handleClickScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cardData = [
    {
      question: "Exactly what is E.D. and how does it occur?",
      answer: (
        <div>
          Approximately 20 million men in the United States suffer from erectile
          dysfunction (ED). Men with ED have a hard time achieving or
          maintaining an erection long enough to engage in sexual relations with
          their partners. The risk of developing E.D. increases as we get older,
          but it can happen at any age as well.
          <br />
          <br /> Several factors can cause erectile dysfunction, including
          diabetes, hypertension, testosterone, and thyroid hormone levels that
          are abnormal, as well as emotional distress.
          <br />
          <br />
          Having trouble getting or maintaining an erection can be a sign of
          other serious health problems that need to be addressed immediately,
          beyond stress in a relationship and loss of personal confidence. In
          order to identify any additional health concerns that you may have,
          your TryPureBlue physician will discreetly and comprehensively review
          all your responses to your personal questionnaire.
        </div>
      ),
    },
    {
      question:
        " What are the benefits of using TryPureBlue instead of going to my doctor?",
      answer: (
        <div>
          There is nothing worse than waiting around for weeks just to see your
          personal doctor, then having to explain to them why you are there for
          your appointment.
          <br />
          <br />
          We offer a convenient, discreet, and easy-to-use online telemedicine
          service at TryPureBlue. Our licensed doctors can review the 10-minute
          medical intake form that you just filled out on your phone and begin
          your treatment on the same day. Get started now rather than waiting
          weeks.{" "}
        </div>
      ),
    },
    {
      question: "Are TryPureBlue’s E.D. Telemedicine services safe to use?",
      answer: (
        <div>
          All Erectile Disfunction medication is prescribed by a U.S. physician.
          If you answer the questionnaire in a complete and accurate manner, our
          Telemedicine service for E.D. patients is completely safe and easy to
          use. Please make sure to disclose any health conditions that you
          currently have. This is for your protection.
          <br />
          <br /> In order to be prescribed medications to treat your E.D., it is
          important for you to be healthy enough to engage in sexual activity.
          Our doctors will carefully review all your answers to ensure that you
          are healthy enough to do so.
        </div>
      ),
    },
    {
      question:
        "How will the consultation work? Will I need to see the doctor in person or video chat?",
      answer:
        "We will be able to prescribe you E.D. medication based on your medical questionnaire and without you having to visit a doctor or do a video call.",
    },
    {
      question: "When will a doctor review my medical intake form?",
      answer:
        "Your medical intake form will be reviewed by a licensed U.S. doctor within two hours during normal business hours, and usually within 24 hours during non-business hours. We understand that now that you've made the decision to begin treating your E.D., you're eager to get started. We will review your prescription as soon as possible and respond accordingly. Upon approval of your prescription by one of our doctors, our pharmacy will ship your medication directly to you via USPS First Class Mail that same day.",
    },
    {
      question: "When does my TryPureBlue E.D. prescription expire?",
      answer:
        "TryPureBlue's online medical intake form and prescription are good for 12 months once approved by a Doctor. After 12 months, you will need to provide another short medical questionnaire to receive another prescription.",
    },
  ];

  return (
    <>
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <Container>
            <Row>
              <Col sm={6}>
                <h2>
                  Order Sildenafil <span>(Generic Viagra)</span> in 3 minutes or
                  less!
                </h2>
                <Image
                  className={styles.Image}
                  src="/images/sildenafil-100.png"
                  height={306}
                  width={298}
                />
                <Row>
                  <Col span={6}>
                    <h3>
                      100mg Generic form of Viagra{" "}
                      <span>(Sildenafil Citrate)</span>
                    </h3>
                  </Col>
                  <Col span={6}>
                    <div className={styles.oneMothPrice}>
                      <span className={styles.month}>Per dose:</span>
                      <span className={styles.price}>$4.00</span>
                    </div>
                  </Col>
                </Row>
                <div>
                  <Button onClick={getMyTreatment}>Shop Now</Button>
                </div>
              </Col>
              <Col sm={6}>
                <div className={styles.mainPartTwo}>
                  <div className={styles.question}>
                    <div className={styles.numberContainer}>
                      <Row>
                        <Col>
                          <div className={styles.number}>1</div>
                        </Col>
                        <Col>
                          <div className={styles.grayNumber}>2</div>
                        </Col>
                        <Col>
                          <div className={styles.grayNumber}>3</div>
                        </Col>
                        <Col>
                          <div className={styles.grayNumber}>4</div>
                        </Col>
                      </Row>
                    </div>
                    <h2>
                      What improvements to your sex life would satisfy you the
                      most?
                    </h2>
                    <div className={styles.buttonsHolder}>
                      <Button
                        onClick={() => {
                          handleClickScroll("section-two");
                        }}
                      >
                        Harder erections
                      </Button>
                      <Button
                        onClick={() => {
                          handleClickScroll("section-two");
                        }}
                      >
                        Longer-lasting-erections
                      </Button>
                      <Button
                        onClick={() => {
                          handleClickScroll("section-two");
                        }}
                      >
                        Both
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className={styles.sectionTwo} id="section-two">
        <div className={styles.question} style={{ maxWidth: "594px" }}>
          <div className={styles.numberContainer}>
            <Row>
              <Col>
                <div className={styles.number}>1</div>
              </Col>
              <Col>
                <div className={styles.number}>2</div>
              </Col>
              <Col>
                <div className={styles.grayNumber}>3</div>
              </Col>
              <Col>
                <div className={styles.grayNumber}>4</div>
              </Col>
            </Row>
          </div>
          <h2>
            Do you want to save on doctor’s fees, pharmacy fees, and other fees,
            when buying ED medication?
          </h2>
          <div className={styles.buttonsHolder}>
            <Button
              onClick={() => {
                handleClickScroll("section-three");
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                handleClickScroll("section-three");
              }}
            >
              No
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.sectionThree} id="section-three">
        <div className={styles.question} style={{ maxWidth: "594px" }}>
          <div className={styles.numberContainer}>
            <Row>
              <Col>
                <div className={styles.number}>1</div>
              </Col>
              <Col>
                <div className={styles.number}>2</div>
              </Col>
              <Col>
                <div className={styles.number}>3</div>
              </Col>
              <Col>
                <div className={styles.grayNumber}>4</div>
              </Col>
            </Row>
          </div>
          <h2>
            Do you prefer to have your medication shipped directly to you, from
            a US-based pharmacy?
          </h2>
          <div className={styles.buttonsHolder}>
            <Button
              onClick={() => {
                handleClickScroll("section-four");
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                handleClickScroll("section-four");
              }}
            >
              No
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.sectionTwo} id="section-four">
        <div className={styles.question} style={{ maxWidth: "554px" }}>
          <div className={styles.numberContainer}>
            <Row>
              <Col>
                <div className={styles.number}>1</div>
              </Col>
              <Col>
                <div className={styles.number}>2</div>
              </Col>
              <Col>
                <div className={styles.number}>3</div>
              </Col>
              <Col>
                <div className={styles.number}>4</div>
              </Col>
            </Row>
          </div>
          <h2>
            Do you prefer US-made, doctor-trusted, and FDA-approved medication?
          </h2>
          <span className={styles.span}>(We know you do!)</span>
          <div className={styles.buttonsHolder}>
            <Button
              onClick={() => {
                handleClickScroll("section-five");
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                handleClickScroll("section-five");
              }}
            >
              No
            </Button>
          </div>
        </div>
      </section>
      <div
        className={styles.whiteContainer}
        style={{ backgroundColor: "#F5F5F5", maxWidth: "100%" }}
        id="section-five"
      >
        <div className={styles.greyContainer} style={{ maxWidth: "1200px" }}>
          <div className={styles.textContainer}>
            <div>
              <p className={styles.greatNews}>All set!</p>
              <p className={styles.covered}>We have what you need.</p>
            </div>
          </div>
          <div className={styles.points2}>
            {newsDescription?.map((items) => {
              return (
                <p className={styles.details}>
                  <img src="/assets/landingPageV2/tick/tick.png" />
                  <span>{items}</span>
                </p>
              );
            })}
            <button onClick={getMyTreatment}>Find my treatment</button>
            <p style={{ marginTop: "25px" }}>
              *Products needing a prescription require a short consultation with
              an online physician
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="section-6-ed-sildenafil">
          <div className="container padding-11">
            <div className="text-center font-35 fw-semibold ls2 pb-92">
              HOW DOES PUREBLUE WORK?
            </div>
            <div className="row justify-content-center px-md-5">
              <div className="col-9 col-md-4 px-2 px-md-5 mb-5">
                <div className="h-100 step-box">
                  <span className="step-blue-box">Step 1</span>
                  <div>
                    <img
                      src="/images/img1.png"
                      className="img-fluid d-block mx-auto"
                      alt=""
                    />
                  </div>
                  <div
                    style={{ fontWeight: "bold" }}
                    className="font-20 font-weight-bold ls2 color-grey padding-12"
                  >
                    Choose your treatment plan
                  </div>
                  <div className="grey-line"></div>
                  <div className="font-17 ls3 color-grey">
                    Select from our available ED treatment plans that fit your
                    preference and budget.
                  </div>
                </div>
              </div>
              <div className="col-9 col-md-4 px-2 px-md-5 mb-5 my-45-md">
                <div className="h-100 step-box">
                  <span className="step-blue-box">Step 2</span>
                  <div>
                    <img
                      src="/images/img2.png"
                      className="img-fluid d-block mx-auto"
                      alt=""
                    />
                  </div>
                  <div
                    style={{ fontWeight: "bold" }}
                    className="font-20 font-weight-bold ls2 color-grey padding-12"
                  >
                    Fill out a quick 3-minute health evaluation form
                  </div>
                  <div className="grey-line"></div>
                  <div className="font-17 ls3 color-grey">
                    Your assigned US-licensed physician will review your form to
                    determine the treatment that fits your needs.
                  </div>
                </div>
              </div>
              <div className="col-9 col-md-4 px-2 px-md-5 mb-5">
                <div className="h-100 step-box">
                  <span className="step-blue-box">Step 3</span>
                  <div>
                    <img
                      src="/images/img3.png"
                      className="img-fluid d-block mx-auto"
                      alt=""
                    />
                  </div>
                  <div
                    style={{ fontWeight: "bold" }}
                    className="font-20 font-weight-bold ls2 color-grey padding-12"
                  >
                    Complete your order
                  </div>
                  <div className="grey-line"></div>
                  <div className="font-17 ls3 color-grey">
                    If approved, you can proceed with your order and your
                    medication will be shipped directly and discreetly from a
                    US-based pharmacy to your doorstep.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={styles.fieldNine}
        style={{ backgroundColor: "#F2F2F2", maxWidth: "100%" }}
      >
        <Container className={styles.container}>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>

          <div className={styles.expand}>
            <Accordion defaultActiveKey={null}>
              {cardData?.map((card, index) => (
                <Card className={styles.cardHeader} key={index}>
                  <ContextAwareToggle
                    className={styles.headerOne}
                    eventKey={index.toString()}
                  >
                    <Row className={styles.rowCard}>
                      <Col xs={2} sm={1} className={styles.plus}>
                        <p>
                          {expandedItems.includes(index.toString()) ? "-" : "+"}
                        </p>
                      </Col>
                      <Col className={styles.textPart} xs={10} sm={11}>
                        {card.question}
                      </Col>
                    </Row>
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body className={styles.dragTxt}>
                      {card.answer}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </div>
        </Container>

        <section className={styles.alert}>
          <div className={styles.alertBox}>
            <img src="/assets/homeRemain/alert.png" alt="alert" />
            <h2>The following safety information is important</h2>
          </div>

          <div>
            <p>
              You should not take Sildenafil (sildenafil citrate) or Tadalafil
              if you are taking medications that contain nitrates, guanylate
              cyclase stimulators, or if you have an allergic reaction to
              sildenafil, tadalafil, or any ingredients in either medication.
              You should speak with your doctor about your health so that you
              are healthy enough to have sex. -{" "}
              <span style={{ fontWeight: "500px" }}>Read more.</span>
            </p>
          </div>
        </section>
      </div>
      <div className={styles.whiteContainer}>
        <div className={styles.greyContainer}>
          <div className={styles.textContainer}>
            <div>
              <p className={styles.greatNews}>All set!</p>
              <p className={styles.covered}>We have what you need.</p>
            </div>
          </div>
          <div className={styles.points2}>
            {newsDescription?.map((items) => {
              return (
                <p className={styles.details}>
                  <img src="/assets/landingPageV2/tick/tick.png" />
                  <span>{items}</span>
                </p>
              );
            })}
            <button onClick={getMyTreatment}>Find my treatment</button>
            <p style={{ marginTop: "25px" }}>
              *Products needing a prescription require a short consultation with
              an online physician
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
