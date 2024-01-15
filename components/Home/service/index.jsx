import { Col, Container, Row } from "react-bootstrap";

import styles from "./service.styles.module.scss";

const imageUrl = "/assets/homepage/service/check.png";
const serviceArr = [
  { name: "Rx-only tablet", imageUrl },
  { name: "FREE online consultation", imageUrl },
  { name: "Discreet shipping", imageUrl },
  { name: "Monthly refills", imageUrl },
];

const Service = () => {
  return (
    <Container className={styles.mainContainer}>
      <Row>
        {serviceArr.map((service, index) => {
          return (
            <Col key={index} xs={6} md={6} lg={3} className={styles.serviceCol}>
              <img
                src={service.imageUrl}
                className={styles.check}
                alt={service.name}
              />
              <span>{service.name}</span>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Service;
