import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Testimonial from "../../../../components/Testimonial";

import styles from "./TestimonialsSection.styles.module.scss";

const mockTestimonials = [
  {
    author: "Nick J.",
    title: "Unbelievably easy and affordable!",
    description:
      "I used to spend more than $300 a month on my ED pills. With PureBlue, I only spend a fraction of the cost, while getting the same quality and results!",
    rating: 5,
    verified: true,
  },
  {
    author: "Peter T.",
    title: "Just like the branded pills",
    description:
      "PureBlue isn’t like most generic online pills. These ED pills work just as fast and effective as their brand-name counterparts.",
    rating: 5,
    verified: true,
  },
  {
    author: "Ben S.",
    title: "Worth every penny!",
    description:
      "I always thought that ED pills were too expensive, but PureBlue’s prices make my ED pills cost less than what I spend on supplements!",
    rating: 5,
    verified: true,
  },
  {
    author: "Eric H.",
    title: "Changed my life",
    description:
      "I never got my ED pills refilled because I don’t want to talk to strangers about my personal life, and PureBlue just makes it simpler and easier to get the pills I need.",
    rating: 5,
    verified: true,
  },
  {
    author: "Sam M.",
    title: "Amazing results!",
    description:
      "These pills worked exactly the same way that my other blue pill did, except those pills cost 15 times more than what I paid for with PureBlue.",
    rating: 5,
    verified: true,
  },
  {
    author: "Kevin P.",
    title: "Incredibly easy!",
    description:
      "I used another Online Rx service before, and they charge me hidden fees after hidden fees every month. PureBlue is honest, direct, and affordable. That’s why I’m sticking with PureBlue.",
    rating: 5,
    verified: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonialsSection}>
      <Container>
        <Row className={styles.row}>
          <Col>
            <h2 className={styles.heading}>
              Rated 5 Stars by over 1000 customers!
            </h2>
          </Col>
        </Row>
        <Row className={styles.row}>
          {mockTestimonials.map((testimonial, i) => (
            <Col
              key={`${testimonial.author}-${testimonial.title}-${i}`}
              xs={12}
              md={4}
            >
              <Testimonial {...testimonial} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
