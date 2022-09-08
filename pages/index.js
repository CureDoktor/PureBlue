import Head from "next/head";
import Link from "next/link";
import { useContext, useState, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import { Check, PatchCheck, CheckCircleFill } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { AccordionContext, Form } from "react-bootstrap";
import CheckForm from "../components/CheckForm";

export default function Home() {
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
        <link rel="icon" href="/favicon.ico" />
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
                        <Col md={6}>
                          <Image
                            src="/assets/homepage/VIAGRA.png"
                            width={300}
                            height={160}
                          />
                          <b>Only use when it's needed!</b>
                        </Col>
                        <Col md={6}>
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
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>
          </Container>
        </div>
        <div className={styles.fieldTwo}>
          <Container className={styles.container}>
            <h2>
              Welcome to Pure<span className={styles.blueText}>Blue</span>
            </h2>
            <h3>We provide E.D. medication that you can trust</h3>
          </Container>
        </div>
        <div className={styles.fieldThree}>
          <Container>
            <Col md={{ span: 7, offset: 5 }}></Col>
          </Container>
        </div>
        <div className={styles.fieldFour}>
          <Container className={styles.fourBG}>
            <Col md={{ span: 6, offset: 6 }}>
              <h4>
                PureBlue provides secure, discreet, and fast delivery of your
                E.D. medication to your home.
              </h4>
              <Row>
                <Col md={2}>
                  <Image
                    src="/assets/homepage/img1.png"
                    width={85}
                    height={70}
                  />
                </Col>
                <Col md={10}>
                  <p>
                    Using our 100% online ordering process, you can boost your
                    confidence and performance in bed without ever leaving your
                    home.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <Image
                    src="/assets/homepage/img2.png"
                    width={85}
                    height={70}
                  />
                </Col>
                <Col md={10}>
                  <p>
                    PureBlue offers a 30-day money back guarantee to ensure you
                    are satisfied with our products or services.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <Image
                    src="/assets/homepage/img3.png"
                    width={85}
                    height={70}
                  />
                </Col>
                <Col md={10}>
                  <p>
                    There will be no charge until your prescription for FDA
                    approved E.D. medications is approved.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <Image
                    src="/assets/homepage/img4.png"
                    width={85}
                    height={70}
                  />
                </Col>
                <Col md={10}>
                  <p>
                    Our PureBlue care team is available seven days a week to
                    provide the highest possible service to our customers.
                  </p>
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
        <div className={styles.fieldFive}>
          <Container>
            <ul>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
              </li>
              <li>
                <CheckCircleFill className={styles.checkmarks} />
              </li>
            </ul>
          </Container>
        </div>
        <div className={styles.fieldSix}>
          <Container>
            <h2>
              Sildenafil or tadalafil?
              <br /> Which E.D. treatment suits your lifestyle?
            </h2>
            <h2>
              Can You Get SAFE, Effective, <br />
              and High-Quality E.D. Pills Online? <br />
              <br />
              The TRUTH will surprise you!
            </h2>
            <h4>
              Learn the dark truth about 90% of E.D. pills online before you
              decide!
            </h4>
          </Container>
        </div>
        <div className={styles.fieldSeven}>
          <Container>
            <h2>
              Not all E.D. pills sold online are created equal – and here’s why.
            </h2>
            <p>
              <b>E.D. pills are the most counterfeited pills in the world</b>,
              and the generics market is full of counterfeit pills that rob you
              of your hard-earned money – and that’s not even the worst of it.
              Counterfeit pills are so dangerous that the government has stepped
              in to try and stop the influx of fake pills in the country – but
              you can still find these pills almost everywhere you look.
              <br />
              <br />
              Counterfeit pills are made by companies overseas and are shipped
              to the United States through illegal means, and despite the best
              efforts to put an end to the trade, more and more pills still get
              through. <br />
              <br />
              Think about it.
              <br />
              <br />
              <b>
                You don’t know what’s inside these pills – and the worst part
                is, you don’t know which these pills are.
              </b>{" "}
              The companies that made these pills are not bound by the same
              rules that American companies follow, and there’s no limit to the
              kind of damage these pills can do to your body.
            </p>
            <Image
              src="/assets/homepage/images.png"
              height={970}
              width={1200}
              layout="responsive"
            />
            <p>
              <b>
                If there’s a 9 in 10 chance that you’ll end up with a
                counterfeit pill, would you still buy these pills?
              </b>
              <br />
              <br /> Getting your much-needed E.D. pill supply online may be
              convenient, but you sacrifice quality, safety, and effectiveness
              in the process. Not every pill you buy online matches the potency
              and quality you expect and worse – you don’t get the product you
              want. <br />
              <br />
              The pills you buy online can contain only trace amounts of the
              actual E.D. pill you want to buy – and they do this to trick you
              into buying more and more of their pills. Not only is this unsafe,
              but it is also a huge waste of your hard-earned money. <br />{" "}
              <br /> Fake pills take all the fun out of the real benefits of
              true E.D. pills. If you have sexual health problems, genuine E.D.
              pills are more than just pills you take to enjoy sex; there is a
              medical need for you to take real E.D. pills, so you can regain
              normal sexual function. <br /> <br /> Sexual health is a serious
              matter, and that means that you should avoid fake pills as much as
              possible, no matter how affordable, convenient, or persuasive they
              may be.
              <br />
              <br /> There is a better way to get high-quality, genuine E.D.
              pills that are produced by legitimate pharmaceutical laboratories,
              based here in the United States.{" "}
            </p>
          </Container>
        </div>
        <div className={styles.fieldEight}>
          <Container>
            <div className={styles.pillPart}>
              <Row>
                <Col md={7}>
                  <h2>Generic E.D. Pill Red Flags</h2>
                  <h3>
                    Watch out for these red flags when buying generic E.D.
                    pills!{" "}
                  </h3>
                  <ul>
                    <li>
                      <Check className={styles.checkmark} /> Fly-by-night
                      companies
                    </li>
                    <li>
                      <Check className={styles.checkmark} /> Offshore-based
                      companies{" "}
                    </li>
                    <li>
                      <Check className={styles.checkmark} /> Manufactured
                      overseas
                    </li>
                    <li>
                      <Check className={styles.checkmark} /> Non-prescription
                      E.D. pill (over-the-counter quality pills)
                    </li>
                    <li>
                      <Check className={styles.checkmark} /> Unapproved and/or
                      unlicensed source
                    </li>
                  </ul>
                </Col>
                <Col md={5}>
                  <Image
                    src="/assets/homepage/fake-pill.png"
                    height={340}
                    width={470}
                    layout="responsive"
                  />
                </Col>
                <h4>
                  The FDA* has issued a warning to consumers that there are
                  unapproved E.D. pills circulating online!
                </h4>
                <p>
                  * FDA warns consumers not to use unapproved erectile
                  dysfunction products advertised on the radio <br />
                  https://www.fda.gov/drugs/drug-safety-and-availability/fda-warns-consumers-not-use-unapproved-erectile-dysfunction-products-advertised-radio
                </p>
              </Row>
            </div>
            <h2 className={styles.satisfied}>
              Pure<span className={styles.primaryColor}>Blue</span> Satisfied
              Customers
            </h2>
            <div className={styles.satisfiedCustomers}>
              <Row>
                <Col sm={4}>
                  <div className={styles.rectangle}>
                    <p>
                      “Straightforward, no-nonsense service from start to
                      finish. I get all the answers I needed, and I get them
                      fast. No need to wait for weeks to get my doctor’s
                      appointment just to refill my prescription. Saves a lot of
                      time and money – and pills work 100% the same as the ones
                      I got from the pharmacy!”
                    </p>
                    <p className={styles.member}>
                      <span className={styles.secondaryColor}>Pure</span>
                      <span className={styles.primaryColor}>Blue</span> Member
                      <PatchCheck className={styles.patchCheck} />
                    </p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={styles.rectangle}>
                    <p>
                      “I’ve put off getting E.D. pills, although I needed them
                      for years now. PureBlue made everything so easy, I wonder
                      why I put off getting pills in the first place. Everything
                      is 100% private and discreet, just the way I prefer it to.
                      They made it easy for everyone to get the help they need.”
                    </p>
                    <p className={styles.member}>
                      <span className={styles.secondaryColor}>Pure</span>
                      <span className={styles.primaryColor}>Blue</span> Member
                      <PatchCheck className={styles.patchCheck} />
                    </p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className={styles.rectangle}>
                    <p>
                      “I’ve paid thousands of dollars out of pocket for Viagra
                      in the last few years, and I just discovered that there’s
                      an easier way to get it online. PureBlue saved me a lot of
                      dollars, and the stuff works great. Same outcome, without
                      spending a fortune.”
                    </p>
                    <p className={styles.member}>
                      <span className={styles.secondaryColor}>Pure</span>
                      <span className={styles.primaryColor}>Blue</span> Member
                      <PatchCheck className={styles.patchCheck} />
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className={styles.fieldNine}>
          <Container>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.expand}>
              <Accordion defaultActiveKey="0">
                <Card className={styles.cardHeader}>
                  <Card.Header className={styles.header}>
                    <ContextAwareToggle
                      className={styles.headerOne}
                      eventKey="0"
                    >
                      <Row>
                        <Col sm={1} className={styles.plus}>
                          <p>+</p>
                        </Col>
                        <Col className={styles.textPart} sm={11}>
                          What is PureBlue?
                        </Col>
                      </Row>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      PureBlue is an online outlet that links potential patients
                      who need a more convenient way to procure E.D. medication
                      legally with a doctor’s approval. PureBlue provides a
                      complete infrastructure that provides potential patients
                      with convenient options that do not require an in-person
                      doctor’s visit, but maintains the supervision of medical
                      doctors for the prescription of erectile dysfunction
                      medication.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.cardHeader}>
                  <Card.Header className={styles.header}>
                    <ContextAwareToggle
                      className={styles.headerOne}
                      eventKey="1"
                    >
                      <Row>
                        <Col sm={1} className={styles.plus}>
                          <p>+</p>
                        </Col>
                        <Col className={styles.textPart} sm={11}>
                          Is E.D. normal?
                        </Col>
                      </Row>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      ED is one of the most common problems that men in the
                      United States face. About 52% of American men between the
                      ages of 40 and 70 years of age experience ED, and PureBlue
                      provides a convenient and affordable way for men to
                      experience stronger erections without the risk of taking
                      low-quality ED pills produced overseas.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.cardHeader}>
                  <Card.Header className={styles.header}>
                    <ContextAwareToggle
                      className={styles.headerOne}
                      eventKey="2"
                    >
                      <Row>
                        <Col sm={1} className={styles.plus}>
                          <p>+</p>
                        </Col>
                        <Col className={styles.textPart} sm={11}>
                          Are PureBlue pills FDA approved?
                        </Col>
                      </Row>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      PureBlue pills contain the active ingredients of
                      sildenafil and tadalafil, the same active ingredients used
                      in the branded ED medications Viagra and Cialis. Customers
                      have the option to buy branded Viagra and Cialis, which
                      are FDA approved for the treatment of erectile
                      dysfunction. The ED medications sold through PureBlue are
                      prescribed by PureBlue-affiliated physicians.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.cardHeader}>
                  <Card.Header className={styles.header}>
                    <ContextAwareToggle
                      className={styles.headerOne}
                      eventKey="3"
                    >
                      <Row>
                        <Col sm={1} className={styles.plus}>
                          <p>+</p>
                        </Col>
                        <Col className={styles.textPart} sm={11}>
                          What is the difference between sildenafil and
                          tadalafil?
                        </Col>
                      </Row>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      Sildenafil and tadalafil are FDA-approved medications for
                      the treatment of erectile dysfunction. Both medications
                      inhibit the phosphodiesterase-5 enzyme (PDE-5), which
                      results in the dilation of blood vessels in the penile
                      region, which makes erections easier to achieve. The main
                      difference between the two medications is that sildenafil
                      is recommended to be taken 30-60 minutes before sexual
                      activity and remains active in the body for 4 hours, while
                      tadalafil is also recommended to be taken 30-60 minutes
                      before sexual activity and remains active in the body for
                      36 hours.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.cardHeader}>
                  <Card.Header className={styles.header}>
                    <ContextAwareToggle
                      className={styles.headerOne}
                      eventKey="4"
                    >
                      <Row>
                        <Col sm={1} className={styles.plus}>
                          <p>+</p>
                        </Col>
                        <Col className={styles.textPart} sm={11}>
                          Can I buy PureBlue pills anywhere in the United
                          States?
                        </Col>
                      </Row>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      PureBlue is an online outfit that links potential patients
                      who need a more convenient way to procure erectile
                      dysfunction medication legally with a doctor’s approval.
                      PureBlue provides a complete infrastructure that provides
                      potential patients with convenient options that do not
                      require an in-person doctor’s visit, but maintains the
                      supervision of medical doctors for the prescription of
                      erectile dysfunction medication.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.cardHeader}>
                  <Card.Header className={styles.header}>
                    <ContextAwareToggle
                      className={styles.headerOne}
                      eventKey="5"
                    >
                      <Row>
                        <Col sm={1} className={styles.plus}>
                          <p>+</p>
                        </Col>
                        <Col className={styles.textPart} sm={11}>
                          Who is PureBlue for?
                        </Col>
                      </Row>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body>
                      PureBlue is for prospective patients who experience the
                      symptoms of E.D. and want to get high-quality, regulated,
                      and genuine E.D. medication without having to go through
                      the process of an in-person visit with their physician.
                      PureBlue offers the best price on both sildenafil and
                      tadalafil pills, without sacrificing the quality, potency,
                      or effectiveness of the product.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.cardHeader}>
                  <Card.Header className={styles.header}>
                    <ContextAwareToggle
                      className={styles.headerOne}
                      eventKey="6"
                    >
                      <Row>
                        <Col sm={1} className={styles.plus}>
                          <p>+</p>
                        </Col>
                        <Col className={styles.textPart} sm={11}>
                          Do I need a prescription to get PureBlue pills?
                        </Col>
                      </Row>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body>
                      During the order process, our affiliated providers will
                      evaluate your medical eligibility to take your chosen E.D.
                      medication after completing your medical profile and
                      digital consultation.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.cardHeader}>
                  <Card.Header className={styles.header}>
                    <ContextAwareToggle
                      className={styles.headerOne}
                      eventKey="7"
                    >
                      <Row>
                        <Col sm={1} className={styles.plus}>
                          <p>+</p>
                        </Col>
                        <Col className={styles.textPart} sm={11}>
                          What makes PureBlue unique?
                        </Col>
                      </Row>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="7">
                    <Card.Body>
                      PureBlue utilizes the same active ingredients used by
                      Viagra and Cialis to ensure high-quality results. PureBlue
                      only sources sildenafil and tadalafil pills from FDA and
                      CGMP-compliant facilities in the United States that have a
                      long-established reputation for providing genuine,
                      high-quality E.D. medication.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.cardHeader}>
                  <Card.Header className={styles.header}>
                    <ContextAwareToggle
                      className={styles.headerOne}
                      eventKey="8"
                    >
                      <Row>
                        <Col sm={1} className={styles.plus}>
                          <p>+</p>
                        </Col>
                        <Col className={styles.textPart} sm={11}>
                          Is sharing my medical history required to get PureBlue
                          Pills?
                        </Col>
                      </Row>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="8">
                    <Card.Body>
                      To provide an accurate medical profile to our affiliated
                      providers, we require prospective customers to complete a
                      medical profile, which may include certain questions that
                      address the compatibility of the treatment offered to your
                      current state of health.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Container>
        </div>
        <div className={styles.fieldTen}>
          <Container>
            <h2>PureBlue Makes it Easy</h2>
            <h3>
              All you’ll ever pay for is the cost of your E.D. medication. No
              insurance claims, no co-pays, no pharmacy refills. Even your 2-day
              shipping is on us!{" "}
            </h3>
            <Row>
              <Col sm={4}>
                <div className={styles.blueField}>
                  <h2>With PureBlue</h2>
                  <p>
                    Choose a plan based on your lifestyle. <br />
                    <br /> Complete your medical profile and order within 10
                    minutes. <br />
                    <br /> Get your E.D. pills via free 2-day express shipping
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div className={styles.blueField}>
                  <h2>Other Online E.D. Pills</h2>
                  <p>
                    Provide driver’s license for identification.
                    <br />
                    <br />
                    Choose from 25 different options.
                    <br />
                    <br />
                    Wait days for an approval.
                    <br />
                    <br />
                    Pay above market value for the same ED pills.
                    <br />
                    <br />
                    Get ED pills via standard mail.
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div className={styles.blueField}>
                  <h2>Traditional Method</h2>
                  <p>
                    Look for a doctor affiliated with your insurance.
                    <br />
                    <br />
                    Set an appointment.
                    <br />
                    <br />
                    Take time off for your doctor’s appointment.
                    <br />
                    <br />
                    Consult with the doctor to get a prescription.
                    <br />
                    <br />
                    Travel to the pharmacy to get your medication.
                  </p>
                </div>
              </Col>
            </Row>
            <h4>
              Getting the help you need doesn’t have to be more difficult than
              the problem that you’re having. That’s why we made PureBlue more
              convenient than any other provider today.
            </h4>
          </Container>
        </div>
        <div className={styles.fieldEleven}>
          <Container>
            <h2>CHOOSE YOUR PLAN</h2>
            <div className={styles.plan}>
              <Row>
                <Col md={{ span: 2, offset: 4 }}>
                  <Button>SILDENAFIL</Button>
                </Col>
                <Col>
                  <Button>VIAGRA</Button>
                </Col>
              </Row>
            </div>
            <div className={styles.containerPlan}>
              <Row>
                <Col sm={5}>
                  <div className={styles.planType}>
                    <p className={styles.planName}>Sildenafil Elite</p>
                    <p>6 pills 25mg</p>
                  </div>
                  <div className={styles.planType}>
                    <p className={styles.planName}>Sildenafil Elite Plus</p>
                    <p>6 pills 50mg</p>
                  </div>
                  <div className={styles.planType}>
                    <p className={styles.planName}>Sildenafil Max</p>
                    <p>12 pills 25mg</p>
                  </div>
                  <div className={styles.planType}>
                    <p className={styles.planName}>Sildenafil Max Plus</p>
                    <p> 12pills 50mg</p>
                  </div>
                  <h3>*Sildenafil Citrate is the active component in Viagra</h3>
                </Col>
                <Col sm={{ span: 6, offset: 1 }}>
                  <div className={styles.plans}>
                    <h3>All plans come with:</h3>
                    <ul>
                      <li>
                        Licensed PureBlue Affiliated Medical Providers in the US
                      </li>
                      <li>Online consultation for Sildenafil or Tadalafil</li>
                      <li>No appointment needed online consultation</li>
                      <li>
                        Professional customer service hotline & online medical
                        support
                      </li>
                      <li>2-day express discret shipping</li>
                      <li>Total Privacy Promise</li>
                    </ul>
                    <Button className={styles.startOrder}>
                      START YOUR ORDER NOW
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}
