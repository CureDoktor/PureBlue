import { Container, Row, Col } from "react-bootstrap";

import styles from "./buttonSection.styles.module.scss";

const buttonsInfo = [
  { icon: "/assets/homepage/icons/icon1.png", text: "Pure Quality" },
  { icon: "/assets/homepage/icons/icon2.png", text: "Safe" },
  { icon: "/assets/homepage/icons/icon3.png", text: "Regulated" },
  { icon: "/assets/homepage/icons/icon4.png", text: "Consistent Results" },
];

const ButtonSection = () => {
  return (
    <Container className={styles.buttonSection}>
      <Row>
        {buttonsInfo.map((button, index) => (
          <Col key={index} xs={6} md={3} className={styles.buttonCol}>
            <div className={styles.featureButton}>
              <img src={button.icon} alt={button.text} />
              <span>{button.text}</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ButtonSection;
