import Head from "next/head";
import React, { useEffect, useState, useContext } from "react";
import { Col, Container, Row, Image, Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import styles from "./Enclomiphene.styles.module.scss";
import dynamic from "next/dynamic";

const TestimonialCarousel = dynamic(
    () => import("../../components/TestimonialCarousel/TestimonialCarousel"),
    { ssr: false }
)

const Enclomiphene = (props) => {
  return (
      <>
          <Head>
              <title>Pure Blue - Enclomiphene</title>
              <meta name="description" content="Generated by create next app"/>
              <link rel="icon" href="/faviconn.ico"/>
          </Head>
          <div className={`w-100 d-block ${styles['banner']}`}>
              <Container className={styles['container']}>
                  <Row className={`align-items-center`}>
                      <Col md={6}>
                          <div className={styles['banner-left']}>
                              <h1>Enclomiphene</h1>
                              <div className={`${styles['banner-small-title']} w-100 d-block fw-medium`}><span>Next-Generation FDA-Approved</span><br/>
                                  Testosterone Treatment for Men
                              </div>
                              <div className={`${styles['banner-bullet']} w-100 d-block fw-medium`}>
                                  <ul>
                                      <li>FDA-Approved Medication</li>
                                      <li>Daily Testosterone Treatment</li>
                                      <li>ZERO Synthetic Testosterone</li>
                                  </ul>
                              </div>
                              <div className={`${styles['banner-btn']} w-100 d-none d-md-block fw-semibold`}><a
                                  href="#">Get Started</a></div>
                          </div>
                      </Col>
                      <Col md={6}>
                          <div className={styles['banner-right']}>
                              <Image
                                  src="/assets/enclomiphene/bottle-with-box.png"
                                  className={`img-fluid d-block m-auto`}
                              />
                              <div
                                  className={`${styles['banner-btn']} w-100 d-block d-md-none fw-semibold horizontal-center`}>
                                  <a href="#">Get Started</a></div>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>

          <div className={`w-100 d-block`}>
              <div className={`${styles['gray-strip-section']} w-100 d-flex text-center`}>
                  <Container className={styles['container']}>
                      <Row className={`row-flex row-flex-wrap`}>
                          <Col md={4}>
                              <div className={`${styles['strip-box']} w-100 d-block fw-medium horizontal-center`}>
                                  <i className={styles['icon-1']}></i> Free Priority Shipping
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={`${styles['strip-box']} w-100 d-block fw-medium horizontal-center`}>
                                  <i className={styles['icon-2']}></i> Access to doctor in 24hr
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={`${styles['strip-box']} w-100 d-block fw-medium horizontal-center`}>
                                  <i className={styles['icon-3']}></i> Licensed doctors
                              </div>
                          </Col>
                      </Row>
                  </Container>
              </div>
          </div>

          <div className={`${styles['for-you-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h2>What can Enclomiphene do for you?</h2>
                  <div className={`${styles['data-row']} w-100 d-block`}>
                      <Row className={styles['row']}>
                          <Col md={6}>
                              <div className={`${styles['fy-box']} w-100 d-block`}>
                                  <div className={styles['fy-box-img']}>
                                      <Image
                                          src="/assets/enclomiphene/for-you-img-1.jpg"
                                          className={`img-fluid`}
                                      />
                                  </div>
                                  <div className={`${styles['fy-box-title']} w-100 d-block fw-semibold`}>Sexual Health
                                      and
                                      Performance
                                  </div>
                                  <p>Studies show that men with low testosterone can develop increased penis size, gain
                                      increased libido, improve erectile function, and boost sexual stamina when treated
                                      with testosterone medication.</p>
                              </div>
                          </Col>
                          <Col md={6}>
                              <div className={`${styles['fy-box']} w-100 d-block`}>
                                  <div className={styles['fy-box-img']}>
                                      <Image
                                          src="/assets/enclomiphene/for-you-img-2.jpg"
                                          className={`img-fluid`}
                                      />
                                  </div>
                                  <div className={`${styles['fy-box-title']} w-100 d-block fw-semibold`}>Lean Muscle
                                      Development
                                  </div>
                                  <p>Studies have shown that men with low testosterone can build lean muscle, along with
                                      significant body fat reduction and enhanced metabolism after treatment with
                                      testosterone medication.</p>
                              </div>
                          </Col>
                          <Col md={6}>
                              <div className={`${styles['fy-box']} w-100 d-block`}>
                                  <div className={styles['fy-box-img']}>
                                      <Image
                                          src="/assets/enclomiphene/for-you-img-3.jpg"
                                          className={`img-fluid`}
                                      />
                                  </div>
                                  <div className={`${styles['fy-box-title']} w-100 d-block fw-semibold`}>Energy and
                                      Drive
                                  </div>
                                  <p>Studies show that testosterone-boosting SERM treatments, such as enclomiphene can
                                      significantly improve energy, mood, and motivation through a non-stimulant
                                      pathway.</p>
                              </div>
                          </Col>
                          <Col md={6}>
                              <div className={`${styles['fy-box']} w-100 d-block`}>
                                  <div className={styles['fy-box-img']}>
                                      <Image
                                          src="/assets/enclomiphene/for-you-img-4.jpg"
                                          className={`img-fluid`}
                                      />
                                  </div>
                                  <div className={`${styles['fy-box-title']} w-100 d-block fw-semibold`}>Focus and
                                      Productivity
                                  </div>
                                  <p>Studies show that an increase in testosterone levels contributes to improved
                                      productivity, focus, and competitive drive in men.</p>
                              </div>
                          </Col>
                      </Row>
                  </div>
              </Container>
          </div>

          <div className={`${styles['box-strip-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <Row className={`row-flex row-flex-wrap gx-0`}>
                      <Col md={3}>
                          <div className={`${styles['white-box']} w-100 d-block`}>
                              <div className={`${styles['white-box-icon']} w-100 d-block`}>
                                  <Image
                                      src="/assets/enclomiphene/box-icon-1.png"
                                      className={`img-fluid d-block m-auto`}
                                  />
                              </div>
                              <p>Sexual well-being and<br/>proficiency</p>
                          </div>
                      </Col>
                      <Col md={3}>
                          <div className={`${styles['white-box']} w-100 d-block`}>
                              <div className={`${styles['white-box-icon']} w-100 d-block`}>
                                  <Image
                                      src="/assets/enclomiphene/box-icon-2.png"
                                      className={`img-fluid d-block m-auto`}
                                  />
                              </div>
                              <p>Building lean muscle<br/>mass</p>
                          </div>
                      </Col>
                      <Col md={3}>
                          <div className={`${styles['white-box']} w-100 d-block`}>
                              <div className={`${styles['white-box-icon']} w-100 d-block`}>
                                  <Image
                                      src="/assets/enclomiphene/box-icon-3.png"
                                      className={`img-fluid d-block m-auto`}
                                  />
                              </div>
                              <p>Energy and<br/>Drive</p>
                          </div>
                      </Col>
                      <Col md={3}>
                          <div className={`${styles['white-box']} w-100 d-block`}>
                              <div className={`${styles['white-box-icon']} w-100 d-block`}>
                                  <Image
                                      src="/assets/enclomiphene/box-icon-4.png"
                                      className={`img-fluid d-block m-auto`}
                                  />
                              </div>
                              <p>Concentration and<br/>Efficiency</p>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>

          <div className={`${styles['unleash-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <div className={`${styles['unleash-section-top']} w-100 d-block`}>
                      <h3>Unleash the Alpha Male</h3>
                      <p>Men are not created equal. Alpha males dominate in every aspect. Strength, energy, competitive
                          drive – even sexual performance. Studies show that Alpha males have significantly higher
                          testosterone levels compared to other men. That’s why Alpha males have an unfair advantage –
                          and we have the key to unleash the Alpha male in you.</p>
                  </div>
                  <div className={`${styles['unleash-section-bottom']} w-100 d-block`}>
                      <div className={`${styles['title']} w-100 d-block fw-semibold`}>Testosterone Levels DROP 1% per
                          year
                      </div>
                      <p>On average, testosterone levels drop by 1% each year after you reach your peak testosterone
                          levels. By the time you reach your 40s, you may have lost over 20% of your peak testosterone
                          levels. Would you let your testosterone levels continue to slip or would you take the next
                          step to restore your peak testosterone levels?</p>
                      <div className={`${styles['chart-img']} w-100 d-block`}>
                          <Image
                              src="/assets/enclomiphene/chart.jpg"
                              className={`w-100`}
                          />
                      </div>
                  </div>
              </Container>
          </div>

          <div className={`${styles['enclomiphene-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <div className={`${styles['enclomiphene-section-top']} w-100 d-block fw-medium`}>
                      <ul className={`d-flex flex-wrap`}>
                          <li>Meds</li>
                          <li>|</li>
                          <li>How it works</li>
                          <li>|</li>
                          <li>Pricing</li>
                          <li>|</li>
                          <li>Safety</li>
                      </ul>
                  </div>
                  <div className={`${styles['enclomiphene-section-bottom']} w-100 d-block`}>
                      <h3>Enclomiphene</h3>
                      <div className={`${styles['image-row']} w-100 d-block`}>
                          <Image
                              src="/assets/enclomiphene/bottle-with-box.png"
                              className={`d-block m-auto`}
                          />
                      </div>
                      <div className={`${styles['btn-row']} btn-row w-100 d-flex flex-wrap`}>
                          <a href="#" className={`${styles['black-btn']} black-btn fw-semibold text-center`}>Get
                              Started</a>
                          <a href="#" className={`${styles['blue-btn']} blue-btn fw-semibold text-center`}>Learn
                              More</a>
                      </div>
                      <div className={`${styles['backend-link']} backend-link w-100 d-block fw-medium`}><a href="#">Important
                          safety information</a></div>
                  </div>
              </Container>
          </div>

          <div className={`${styles['facts-section']} w-100 d-block`}>
              <div className={`${styles['facts-img']} w-100 d-block`}></div>
              <div className={`${styles['facts-bottom']} w-100 d-block`}>
                  <Container className={styles['container']}>
                      <div className={`${styles['facts-container']}`}>
                          <h3>Science-Based Facts</h3>
                          <div className={`${styles['data-row']} w-100 d-block`}>
                              <div className={`${styles['facts-box-row']} d-flex flex-wrap`}>
                                  <div className={`${styles['facts-col']} ${styles['first-box']}`}>
                                      <div className={`${styles['facts-box']} w-100 d-block`}>
                                          <div className={`${styles['title']} fw-semibold`}>Enclomiphene</div>
                                          <p>Dosage: 1x/day<br/>
                                              Pill strength – 6.25-25m<br/>
                                              Intake – Oral or Sublingual<br/>
                                              Bottle Dosage – 1 month or 30 doses</p>
                                      </div>
                                  </div>
                                  <div className={`${styles['facts-col']} ${styles['center-box']}`}>
                                      <div className={`${styles['facts-box']} w-100 d-block ${styles['center-box']}`}>
                                          <div className={`${styles['title']} fw-semibold`}>How it works</div>
                                          <p>Enclomiphene blocks estrogen receptors to disrupt the estrogen-negative
                                              feedback loop, which subsequently stimulates LH, FSH, and testosterone
                                              production naturally. Enclomiphene does not disrupt the natural
                                              testosterone cycle, thus allowing the body to continue to naturally
                                              produce testosterone, even without treatment.</p>
                                      </div>
                                  </div>
                                  <div className={`${styles['facts-col']} ${styles['last-box']}`}>
                                      <div className={`${styles['facts-box']} w-100 d-block`}>
                                          <div className={`${styles['title']} fw-semibold`}>The Results</div>
                                          <p>By blocking estrogen receptors, enclomiphene effectively reduces the risk
                                              of gyno (gynecomastia) and other abnormal reactions resulting from
                                              reactive estrogen buildup in men.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </Container>
              </div>
          </div>

          <div className={`${styles['performance-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h3>Unleash your Prime Performance with<br/><span>Enclomiphene</span></h3>
                  <p>The Alpha Protocol is designed to kickstart your natural testosterone production and restore your
                      testosterone levels back to peak levels without the risks associated with testosterone replacement
                      therapy. Our protocol does not use synthetic testosterone compounds that stop your body from
                      producing testosterone. With an FDA-approved SERM medication, the Alpha Protocol continues to
                      regulate natural testosterone production without making you dependent on treatments to maintain
                      optimal testosterone levels. The Alpha Protocol boosts your testosterone levels by as much as 300%
                      without disrupting your natural testosterone production. Unlike outdated testosterone therapies,
                      The Alpha Protocol stimulates testosterone production, effectively eliminating risks such as
                      testicular atrophy, infertility, and hormone imbalance.</p>
                  <div className={`${styles['gray-box']} w-100 d-block`}>
                      <div className={`${styles['title']} w-100 d-block fw-semibold`}>But that’s just the beginning.
                      </div>
                      <p>To push your testosterone production beyond your peak levels, you need a natural
                          testosterone-boosting supplement to build on the raw power of the Alpha Protocol and enable
                          you to reach superior total and free testosterone levels that will supercharge your physical,
                          mental, and sexual performance.</p>
                  </div>
              </Container>
          </div>

          <TestimonialCarousel />

          <div className={`${styles['customer-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h3>Powered by Science,<br/>Fine-tuned for you.</h3>
                  <div className={`${styles['data-row']} w-100 d-block`}>
                      <Row className={`row-flex row-flex-wrap`}>
                          <Col md={6} lg={3}>
                              <div className={`${styles['customer-box']} w-100 d-block horizontal-center`}>
                                  <div className={`${styles['customer-box-img']} w-100 d-block`}>
                                      <Image
                                          src="/assets/enclomiphene/customer-1.jpg"
                                          className={`w-100`}
                                      />
                                  </div>
                                  <div className={`${styles['customer-box-bottom']} w-100 d-block`}>
                                      <div className={`${styles['customer-name']} w-100 d-block fw-semibold`}>Drew M.</div>
                                      <div className={`${styles['verified-badge']} w-100 d-block fw-medium`}>Verified Customer</div>
                                      <div className={`${styles['bottle-img']}`}>
                                          <Image
                                              src="/assets/enclomiphene/small-bottle.png"
                                          />
                                      </div>
                                  </div>
                              </div>
                          </Col>
                          <Col md={6} lg={3}>
                              <div className={`${styles['customer-box']} w-100 d-block horizontal-center`}>
                                  <div className={`${styles['customer-box-img']} w-100 d-block`}>
                                      <Image
                                          src="/assets/enclomiphene/customer-2.jpg"
                                          className={`w-100`}
                                      />
                                  </div>
                                  <div className={`${styles['customer-box-bottom']} w-100 d-block`}>
                                      <div className={`${styles['customer-name']} w-100 d-block fw-semibold`}>Alex B.
                                      </div>
                                      <div className={`${styles['verified-badge']} w-100 d-block fw-medium`}>Verified
                                          Customer
                                      </div>
                                      <div className={`${styles['bottle-img']}`}>
                                          <Image
                                              src="/assets/enclomiphene/small-bottle.png"
                                          />
                                      </div>
                                  </div>
                              </div>
                          </Col>
                          <Col md={6} lg={3}>
                              <div className={`${styles['customer-box']} w-100 d-block horizontal-center`}>
                                  <div className={`${styles['customer-box-img']} w-100 d-block`}>
                                      <Image
                                          src="/assets/enclomiphene/customer-3.jpg"
                                          className={`w-100`}
                                      />
                                  </div>
                                  <div className={`${styles['customer-box-bottom']} w-100 d-block`}>
                                      <div className={`${styles['customer-name']} w-100 d-block fw-semibold`}>Jackson
                                          C.
                                      </div>
                                      <div className={`${styles['verified-badge']} w-100 d-block fw-medium`}>Verified
                                          Customer
                                      </div>
                                      <div className={`${styles['bottle-img']}`}>
                                          <Image
                                              src="/assets/enclomiphene/small-bottle.png"
                                          />
                                      </div>
                                  </div>
                              </div>
                          </Col>
                          <Col md={6} lg={3}>
                              <div className={`${styles['customer-box']} w-100 d-block horizontal-center`}>
                                  <div className={`${styles['customer-box-img']} w-100 d-block`}>
                                      <Image
                                          src="/assets/enclomiphene/customer-4.jpg"
                                          className={`w-100`}
                                      />
                                  </div>
                                  <div className={`${styles['customer-box-bottom']} w-100 d-block`}>
                                      <div className={`${styles['customer-name']} w-100 d-block fw-semibold`}>Chris L.
                                      </div>
                                      <div className={`${styles['verified-badge']} w-100 d-block fw-medium`}>Verified
                                          Customer
                                      </div>
                                      <div className={`${styles['bottle-img']}`}>
                                          <Image
                                              src="/assets/enclomiphene/small-bottle.png"
                                          />
                                      </div>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </div>
              </Container>
          </div>
          <div className={`${styles['chart-bottle-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h3>Enclomiphene<br/><span>(Generic Androxal)</span></h3>
                  <div className={`${styles['chart-img']} w-100 d-block`}>
                      <Image
                          src="/assets/enclomiphene/chart-and-bottle.png"
                          className={`w-100 d-none d-md-block`}
                      />
                      <Image
                          src="/assets/enclomiphene/chart-and-bottle-mobile.png"
                          className={`w-100 d-block d-md-none`}
                      />
                  </div>
              </Container>
          </div>
          <div className={`${styles['works-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <h3>How Enclomiphene Works</h3>
                  <div className={`${styles['data-row']} w-100 d-block`}>
                      <Row>
                          <Col md={4}>
                              <div className={`${styles['works-img']} w-100 d-block`}>
                                <div className={`${styles['step-number']} fw-semibold text-center`}>01</div>
                                  <Image
                                      src="/assets/enclomiphene/work-img-1.jpg"
                                      className={`w-100`}
                                  />
                              </div>
                              <div className={`${styles['works-title']} w-100 d-block fw-semibold`}>Choose your plan</div>
                              <p>Select the Alpha Protocol and choose your add-on natural supplements</p>
                          </Col>
                          <Col md={4}>
                              <div className={`${styles['works-img']} w-100 d-block`}>
                                  <div className={`${styles['step-number']} fw-semibold text-center`}>02</div>
                                  <Image
                                      src="/assets/enclomiphene/work-img-2.jpg"
                                      className={`w-100`}
                                  />
                              </div>
                              <div className={`${styles['works-title']} w-100 d-block fw-semibold`}>Place your order</div>
                              <p>Complete the quick order process to place your order. Once your order is processed, you may proceed to answer your health survey.</p>
                          </Col>
                          <Col md={4}>
                              <div className={`${styles['works-img']} w-100 d-block`}>
                                  <div className={`${styles['step-number']} fw-semibold text-center`}>03</div>
                                  <Image
                                      src="/assets/enclomiphene/work-img-3.jpg"
                                      className={`w-100`}
                                  />
                              </div>
                              <div className={`${styles['works-title']} w-100 d-block fw-semibold`}>Answer a quick 3-minute health survey</div>
                              <p>Your health survey gives our partner U.S. licensed physicians the information they need to approve your selected treatment plan or prescribe other treatment plans that fit your needs.</p>
                          </Col>
                      </Row>
                  </div>
              </Container>
          </div>
          <div className={`${styles['faq-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <div className={`${styles['faq-container']}`}>
                      <h3>Enclomiphene <span>FAQs</span></h3>
                      <div className={`${styles['faq-data-row']} faq-data-row w-100 d-block`}>
                          <Accordion defaultActiveKey="0">
                              <AccordionItem eventKey="0" className={styles['accordion-item']}>
                                  <AccordionHeader className={styles['accordion-button']}>What is Enclomiphene for?</AccordionHeader>
                                  <AccordionBody className={styles['accordion-body']}>
                                      <p><strong>This is the first item's accordion body.</strong> It is shown by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow.</p>
                                  </AccordionBody>
                              </AccordionItem>

                              <AccordionItem eventKey="1" className={styles['accordion-item']}>
                                  <AccordionHeader className={styles['accordion-button']}>Who should not take Enclomiphene?</AccordionHeader>
                                  <AccordionBody className={styles['accordion-body']}>
                                      <p><strong>This is the second item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow.</p>
                                  </AccordionBody>
                              </AccordionItem>

                              <AccordionItem eventKey="2" className={styles['accordion-item']}>
                                  <AccordionHeader className={styles['accordion-button']}>What are Selective estrogen receptor modulators (SERMs)?</AccordionHeader>
                                  <AccordionBody className={styles['accordion-body']}>
                                      <p><strong>This is the third item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow. </p>
                                  </AccordionBody>
                              </AccordionItem>

                              <AccordionItem eventKey="3" className={styles['accordion-item']}>
                                  <AccordionHeader className={styles['accordion-button']}>Is Enclomiphene safe?</AccordionHeader>
                                  <AccordionBody className={styles['accordion-body']}>
                                      <p><strong>This is the third item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow. </p>
                                  </AccordionBody>
                              </AccordionItem>

                              <AccordionItem eventKey="4" className={styles['accordion-item']}>
                                  <AccordionHeader className={styles['accordion-button']}>How should I take Enclomiphene?</AccordionHeader>
                                  <AccordionBody className={styles['accordion-body']}>
                                      <p><strong>This is the third item's accordion body.</strong> It is hidden by
                                          default, until the collapse plugin adds the appropriate classes that we use to
                                          style each element. These classes control the overall appearance, as well as
                                          the showing and hiding via CSS transitions. You can modify any of this with
                                          custom CSS or overriding our default variables. It's also worth noting that
                                          just about any HTML can go within the <code>.accordion-body</code>, though the
                                          transition does limit overflow. </p>
                                  </AccordionBody>
                              </AccordionItem>
                          </Accordion>
                      </div>
                  </div>
              </Container>
          </div>

          <div className={`${styles['cta-section']} w-100 d-block`}>
              <Container className={styles['container']}>
                  <Row>
                      <Col md={6} lg={5}>
                          <h3>Enclomiphene<br/>
                              <span>(Generic Androxal)</span></h3>
                          <div className={`${styles['cta-img']} w-100 d-block`}>
                              <Image
                                  src="/assets/enclomiphene/bottle-with-box.png"
                                  className={`img-fluid d-block m-auto`}
                              />
                          </div>
                      </Col>
                      <Col md={6} lg={7}>
                          <div className={`${styles['cta-right']} w-100 d-block`}>
                              <div className={`${styles['cta-bullet']} w-100 d-block`}>
                                  <ul className={`d-flex flex-wrap`}>
                                      <li>Lean muscle mass &amp; less body fat</li>
                                      <li>Athletic performance, strength, &amp; endurance</li>
                                      <li>Sexual performance, drive, &amp; libido</li>
                                      <li>Energy, focus, productivity, &amp; confidence</li>
                                      <li>Promotes optimal health, well-being, &amp; mood</li>
                                  </ul>
                              </div>
                              <div className={`${styles['btn-row']} btn-row w-100 d-flex flex-wrap`}>
                                  <a href="#" className={`${styles['black-btn']} black-btn fw-semibold text-center`}>Get Started</a>
                                  <a href="#" className={`${styles['blue-btn']} blue-btn fw-semibold text-center`}>Learn More</a>
                              </div>
                              <div className={`${styles['backend-link']} backend-link w-100 d-block fw-medium`}><a href="#">Important safety information</a></div>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </>
  );
};

export default Enclomiphene;
