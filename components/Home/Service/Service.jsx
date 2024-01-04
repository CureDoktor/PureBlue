import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Service.styles.module.scss";
import Image from "next/image";

const Service = () => {
  let imageUrl = "/assets/homepage/Service/check.png";
  const serviceArr = [
    { name: "Rx-only tablet", imageUrl },
    { name: "FREE online consultation", imageUrl },
    { name: "Discreet shipping", imageUrl },
    { name: "Monthly refills", imageUrl },
  ];

  return (
    <Container className={styles.mainContainer}>
      <Row>
        {serviceArr.map((service, index) => {
          return (
            <Col
              key={index}
              xs={6}
              lg={3}
              className="d-flex align-items-center gap-2"
            >
              <Image
                src={service.imageUrl}
                width={20}
                height={20}
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
