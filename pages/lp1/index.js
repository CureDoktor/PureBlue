import Head from "next/head";
import Link from "next/link";
import { useContext, useState, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import {
  Check,
  PatchCheck,
  CheckCircleFill,
  CaretDownFill,
  ExclamationTriangleFill,
} from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { AccordionContext, Form } from "react-bootstrap";
import CheckForm from "../../components/CheckForm";
import { searchParamsUrl } from "../../components/searchParams";
export default function LP1() {
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
          backgroundColor: isCurrentEventKey ? "#0077f0" : "#0077f0",
          border: "0px",
          color: "white",
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
        <title>Pure Blue</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main>
        <div className={styles.fieldOneBg}>
          <Container className={styles.container}>
            <div className={styles.fieldOne}>
              <Col md={8}>
                <div className={styles.fieldOneText}>
                  <div className={styles.callUs}>
                    <p>
                      Introducing PureBlue, your online clinic for men's health
                    </p>
                  </div>
                  <h2>ONLINE PRESCRIPTION SERVICE FOR ED MEDICATIONS</h2>
                  <Row>
                    <Col md={9}>
                      <ul>
                        <li>
                          {" "}
                          <CheckCircleFill className={styles.checkmarks} />
                          Same Day Prescription Approval
                        </li>
                        <li>
                          <CheckCircleFill className={styles.checkmarks} />
                          We do not require payment <br /> until the
                          prescription is approved
                        </li>
                        <li>
                          <CheckCircleFill className={styles.checkmarks} />
                          Starting at $1.30 a pill
                        </li>
                      </ul>
                      <p className={styles.firstMedication}>
                        <span className={styles.blueText}>First, </span>pick a
                        medication that works for you
                      </p>
                      <Row className={styles.pillChoice}>
                        <Col>
                          <Image
                            src="/assets/homepage/VIAGRA.png"
                            width={300}
                            height={160}
                          />
                          <b>Only use when it's needed!</b>
                        </Col>
                        <Col>
                          <Image
                            src="/assets/homepage/CIALIS.png"
                            width={300}
                            height={160}
                          />
                          <b>Always be prepared!</b>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={3} className={styles.bottle}>
                      <Image
                        src="/assets/homepage/bottle.png"
                        width={217}
                        height={406}
                        className="d-none d-md-block"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>
          </Container>
        </div>
        <div className="d-block d-md-none">
          <Image
            src="/assets/homepage/welcome-pure-blue.png"
            width={520}
            height={277}
            className="d-block d-md-none"
          />
        </div>
        <div className={styles.fieldTwo}>
          <Container className={styles.container}>
            <h2>
              Welcome to Pure<span className={styles.blueText}>Blue</span>
            </h2>
            <h3>We provide E.D. medication that you can trust</h3>
          </Container>
        </div>
        {/* <div className={styles.fieldThree}>
          <Container>
            <Col md={{ span: 7, offset: 5 }}></Col>
          </Container>
        </div> */}
        <div className={styles.fieldFour}>
          <Container className={styles.fourBG}>
            <Col md={{ span: 6, offset: 6 }}>
              <h4>
                PureBlue provides secure, discreet, and fast delivery of your
                E.D. medication to your home.
              </h4>
              <Row>
                <Col xs={3} md={2}>
                  <Image
                    src="/assets/homepage/img1.png"
                    width={85}
                    height={70}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <p>
                    Using our 100% online ordering process, you can boost your
                    confidence and performance in bed without ever leaving your
                    home.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={3} md={2}>
                  <Image
                    src="/assets/homepage/img2.png"
                    width={85}
                    height={70}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <p>
                    PureBlue offers a 30-day money back guarantee to ensure you
                    are satisfied with our products or services.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={3} md={2}>
                  <Image
                    src="/assets/homepage/img3.png"
                    width={85}
                    height={70}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <p>
                    There will be no charge until your prescription for FDA
                    approved E.D. medications is approved.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={3} md={2}>
                  <Image
                    src="/assets/homepage/img4.png"
                    width={85}
                    height={70}
                  />
                </Col>
                <Col xs={9} md={10}>
                  <p>
                    Our PureBlue care team is available seven days a week to
                    provide the highest possible service to our customers.
                  </p>
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
        <div className={styles.bluePart}></div>
        <div className={styles.fieldFive}>
          <Container className={styles.containerFive}>
            <ul className={styles.ulPart}>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
                Our treatments begin at $1.30 per pill
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
                Take our 3-minute health quiz to receive a prescription
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
                Rush shipping is available at no charge
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
                No payment is due until the prescription is approved
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
                Licensed U.S. physicians
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
                We ship orders within 24 hours, discretely
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
                Licensed and FDA-approved USA pharmacy
              </li>
            </ul>
            <Row>
              <Col md={6} className="pt-md-5">
                <div className="text-center">
                  <Image
                    src="/assets/homepage/lets-get-started.png"
                    width={523}
                    height={159}
                    className="d-none d-md-block"
                  />
                </div>
              </Col>
              <Col className={styles.centerMob}>
                <Image
                  src="/assets/homepage/3-bottles.png"
                  width={250}
                  height={250}
                />
              </Col>
              <Image
                src="/assets/homepage/lets-get-started-mobile.png"
                width={523}
                height={159}
                className="d-block d-md-none pt-4"
              />
              <p className={styles.stepOne}>
                <span className={styles.blueText}>Step 1:</span> Pick a
                medication
              </p>
              <Row>
                <Col md={4} xs={6}>
                  <div className="text-center">
                    <Image
                      src="/assets/homepage/VIAGRA.png"
                      width={320}
                      height={170}
                    />
                  </div>
                </Col>
                <Col md={4} xs={6}>
                  <div className="text-center">
                    <Image
                      src="/assets/homepage/CIALIS.png"
                      width={320}
                      height={170}
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.ul}>
                    <ul>
                      <li>No more pharmacy trips</li>
                      <li>Generic and brand-name prescriptions</li>
                      <li>
                        Read more about important safety information, click
                        here.
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
        <div className={styles.fieldSeven}>
          <Container>
            <h2>How Does it Work?</h2>
            <br />
            <br />
            <div className={styles.steps}>
              <Row>
                <Col md={3}>
                  <Image
                    src="/assets/homepage/step1.png"
                    width={370}
                    height={290}
                    className={styles.stepImages}
                  />
                </Col>
                <Col md={9}>
                  <h3>Online consultations at your convenience</h3>
                  <p>
                    By completing our simple 3-minute questionnaire, you can
                    bypass the doctor's office altogether. Within a few hours of
                    completing the questionnaire, a doctor will review your
                    medical history.
                  </p>
                </Col>
              </Row>
            </div>
            <div className={styles.steps}>
              <Row>
                <Col md={3}>
                  <Image
                    src="/assets/homepage/step2.png"
                    width={370}
                    height={290}
                    className={styles.stepImages}
                  />
                </Col>
                <Col md={9}>
                  <h3>The prescription is valid for one year</h3>
                  <p>
                    You will receive ongoing medical care from your doctor 365
                    days a year and a prescription for high quality E.D.
                    medications valid for a period of one year.
                  </p>
                </Col>
              </Row>
            </div>
            <div className={styles.steps}>
              <Row>
                <Col md={3}>
                  <Image
                    src="/assets/homepage/step3.png"
                    width={370}
                    height={290}
                    className={styles.stepImages}
                  />
                </Col>
                <Col md={9}>
                  <h3>
                    Payment is not required until the prescription is approved
                  </h3>
                  <p>
                    Upon reviewing your three-minute health quiz, our physician
                    will approve your prescription and the pharmacy will ship
                    your medication to you for free.
                  </p>
                </Col>
              </Row>
            </div>
            <div className={styles.steps}>
              <Row>
                <Col md={3}>
                  <Image
                    src="/assets/homepage/step4.png"
                    width={370}
                    height={290}
                    className={styles.stepImages}
                  />
                </Col>
                <Col md={9}>
                  <h3>There is no waiting at a pharmacy or doctor's office</h3>
                  <p>
                    The medication will be shipped within 24 hours of your order
                    and delivered directly to your door. Avoid embarrassment and
                    inconvenience by eliminating the need to wait for your
                    physician and the pharmacy to process your order.{" "}
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className={styles.fieldEight}>
          <Container>
            <h2 className="text-center pb-5">Frequently Asked Questions</h2>
            <br />
            <br />
            <Accordion defaultActiveKey="0">
              <div className={styles.cardHeader}></div>
              <Card className={styles.cardHeader}>
                <Card.Header className={styles.header}>
                  <ContextAwareToggle className={styles.headerOne} eventKey="0">
                    <Row>
                      <Col className={styles.textPart} xs={11} sm={11}>
                        What exactly is E.D. and how does it happen?
                      </Col>
                      <Col xs={1} sm={1} className={styles.plus}>
                        <CaretDownFill className={styles.caret} />
                      </Col>
                    </Row>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Approximately 20 million men in the United States suffer
                    from erectile dysfunction (ED). The risk of developing E.D.
                    increases as we get older, but it can happen at any age as
                    well. Men with ED have difficulties obtaining or maintaining
                    a long-lasting erection, which prevents them from engaging
                    in sexual relations with their partners. <br />
                    <br />
                    An individual may suffer from erectile dysfunction for a
                    variety of reasons, including diabetes, hypertension,
                    abnormal testosterone, thyroid hormone, and psychological
                    stress. <br />
                    <br /> In addition to stress in a relationship and loss of
                    self-confidence, experiencing difficulty obtaining or
                    maintaining an erection can indicate other serious health
                    problems that need to be addressed immediately. PureBlue
                    physicians will discreetly and comprehensively review all
                    your responses to your personal questionnaire in order to
                    identify any additional health concerns you may have.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.cardHeader}>
                <Card.Header className={styles.header}>
                  <ContextAwareToggle className={styles.headerOne} eventKey="1">
                    <Row>
                      <Col className={styles.textPart} xs={11} sm={11}>
                        How does PureBlue differ from going to the doctor?
                      </Col>
                      <Col xs={1} sm={1} className={styles.plus}>
                        <CaretDownFill className={styles.caret} />
                      </Col>
                    </Row>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Nothing is more frustrating than waiting weeks for an
                    appointment with your personal physician, then explaining
                    your reasons for going. <br />
                    <br />
                    At PureBlue, we provide easy-to-use online telemedicine
                    services that are convenient, confidential, and easy to use.
                    Our licensed physicians review the medical intake form that
                    you just completed on your phone and can approve you for
                    treatment on the same day.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.cardHeader}>
                <Card.Header className={styles.header}>
                  <ContextAwareToggle className={styles.headerOne} eventKey="2">
                    <Row>
                      <Col className={styles.textPart} xs={11} sm={11}>
                        How safe is PureBlue's E.D. Telemedicine service?
                      </Col>
                      <Col xs={1} sm={1} className={styles.plus}>
                        <CaretDownFill className={styles.caret} />
                      </Col>
                    </Row>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Erectile Disfunction medication is prescribed by a U.S.
                    physician. Please make sure to disclose any health
                    conditions that you currently have. Our Telemedicine service
                    for Erectile Disfunction patients is very safe and easy to
                    use if you complete the questionnaire in a complete and
                    accurate manner. Please be aware that this is for your
                    protection.
                    <br />
                    <br />
                    You must be healthy enough to engage in sexual activity in
                    order to receive prescription medication for your E.D. Our
                    doctors will determine whether you are healthy enough to
                    engage in sexual activity after carefully reviewing your
                    answers.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.cardHeader}>
                <Card.Header className={styles.header}>
                  <ContextAwareToggle className={styles.headerOne} eventKey="3">
                    <Row>
                      <Col className={styles.textPart} xs={11} sm={11}>
                        Will I be required to meet with the doctor in person?
                      </Col>
                      <Col xs={1} sm={1} className={styles.plus}>
                        <CaretDownFill className={styles.caret} />
                      </Col>
                    </Row>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    As a result of your medical questionnaire, we will be able
                    to prescribe you E.D. medication without requiring you to
                    visit a doctor or conduct a video conference.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.cardHeader}>
                <Card.Header className={styles.header}>
                  <ContextAwareToggle className={styles.headerOne} eventKey="4">
                    <Row>
                      <Col className={styles.textPart} xs={11} sm={11}>
                        How long will it take for a doctor to review my medical
                        intake form?
                      </Col>
                      <Col xs={1} sm={1} className={styles.plus}>
                        <CaretDownFill className={styles.caret} />
                      </Col>
                    </Row>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    During normal business hours, a licensed US doctor will
                    review your medical intake form within two hours, while
                    during non-business hours, it will usually take 24 hours.
                    Having made the decision to begin treatment for your e.d.,
                    we understand how eager you are to begin. You will receive a
                    response from our team as soon as possible after we review
                    your prescription. Our pharmacy will ship your medication
                    directly to you via USPS First Class Mail as soon as your
                    prescription is approved by one of our doctors.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.cardHeader}>
                <Card.Header className={styles.header}>
                  <ContextAwareToggle className={styles.headerOne} eventKey="5">
                    <Row>
                      <Col className={styles.textPart} xs={11} sm={11}>
                        What is the expiration date of my PureBlue E.D.
                        prescription?
                      </Col>
                      <Col xs={1} sm={1} className={styles.plus}>
                        <CaretDownFill className={styles.caret} />
                      </Col>
                    </Row>
                  </ContextAwareToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    Upon approval by a physician, PureBlue's online medical
                    intake form and prescription will be valid for 12 months.
                    You will need to complete another short medical
                    questionnaire after 12 months to obtain another
                    prescription.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
        </div>
        <div className={styles.fieldNine}>
          <Container>
            <div className={styles.important}>
              <ExclamationTriangleFill className={styles.triangle} /> The
              following safety information is important{" "}
            </div>
            <p>
              If you are taking medications that contain nitrates, guanylate
              cyclase stimulators, or have an allergic reaction to sildenafil,
              tadalafil, or other ingredients in either medication, you should
              not take Sildenafil (sildenafil citrate) or Tadalafil. To ensure
              that you are healthy enough to engage in sexual activity, you
              should discuss your health with your doctor -{" "}
              <Link href={"/about" + searchParamsUrl()}>Learn more</Link>
            </p>
          </Container>
        </div>
        <div className={styles.fieldTen}>
          <Container className="px-0">
            <div className="d-block d-md-none">
              <Image
                src="/assets/homepage/3-bottles-bg.png"
                width={500}
                height={510}
                className="d-block d-md-none"
              />
            </div>
            <div>
              <Row className={styles.nowStarted}>
                <Col md={7} className="px-md-0">
                  <div className="d-none d-md-block">
                    <Image
                      src="/assets/homepage/now-get-started.png"
                      width={718}
                      height={124}
                      className={styles.stepImages}
                    />
                  </div>
                  <div className="d-block d-md-none">
                    <Image
                      src="/assets/homepage/get-started-mobile.png"
                      width={414}
                      height={242}
                      className={styles.stepImages}
                    />
                  </div>
                  <ul>
                    <li>
                      <CheckCircleFill className={styles.checkmarks} />
                      There is no need to visit the doctor in person
                    </li>
                    <li>
                      <CheckCircleFill className={styles.checkmarks} />
                      You do not have to wait in line
                    </li>
                    <li>
                      <CheckCircleFill className={styles.checkmarks} />
                      It's Time to Say Goodbye to Awkward Situations
                    </li>
                  </ul>
                  <Row className={styles.pillChoice}>
                    <Col md={6}>
                      <Image
                        src="/assets/homepage/VIAGRA.png"
                        width={280}
                        height={150}
                      />
                      <p>
                        <b>Only use when it's needed!</b>
                      </p>
                    </Col>
                    <Col md={6}>
                      <Image
                        src="/assets/homepage/CIALIS.png"
                        width={280}
                        height={150}
                      />
                      <p>
                        <b>Always be prepared!</b>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md={5} className="px-md-0">
                  <div className="d-none d-md-block">
                    <Image
                      src="/assets/homepage/3-bottles-bg.png"
                      width={500}
                      height={510}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="d-block d-md-none">
            <div className={styles.bluePart}></div>
          </div>
        </div>
      </main>
    </div>
  );
}
