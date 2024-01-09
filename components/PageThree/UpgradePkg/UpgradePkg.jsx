import React from "react";
import styles from "./UpgradePkg.styles.module.scss";
import { Button, Card, Col, Row } from "react-bootstrap";
const UpgradePkg = () => {
  const packages = [
    {
      id: 1,
      title: "3 Month Package",
      tBox: "/assets/pageThree/upgradePkg/light.svg",
      doses: `12 doses of 25.0mg Sildenafil (oral - tablet)`,
      savings: "10% Savings ($9.6 discount)",
      additional: "Only pay an additional $86.40",
      icon: "/assets/pageThree/upgradePkg/uncheck.png",
    },
    {
      id: 2,
      title: "6 Month Package",
      tBox: "/assets/pageThree/upgradePkg/brown.svg",
      doses: "24 doses of 25.0mg Sildenafil (oral - tablet)",
      savings: "20% Savings ($48 discount)",
      additional: "Only pay an additional $192.00",
      selected: true,
      icon: "/assets/pageThree/upgradePkg/check.png",
    },
    {
      id: 3,
      title: "12 Month Package",
      doses: "48 doses of 25.0mg Sildenafil (oral - tablet)",
      savings: "30% Savings ($158.4 discount)",
      additional: "Only pay an additional $369.60",
      tBox: "/assets/pageThree/upgradePkg/light.svg",
      icon: "/assets/pageThree/upgradePkg/uncheck.png",
    },
  ];
  return (
    <div className={styles.upgradeSection}>
      <h2>Select your Upgrade Below</h2>
      <Row>
        {packages.map((pkg) => (
          <Col key={pkg.id} xs={12} lg={4} md={6}>
            <Card className={pkg.selected ? styles.selectedCard : styles.card}>
              <div className={styles.stepBox}>
                <img src={pkg.tBox} alt="step" />
                <p className={pkg.selected ? styles.pColor2 : styles.pColor}>
                  {pkg.title}
                </p>
              </div>
              <Card.Body className={styles.cardBody}>
                <div className={styles.listBox}>
                  <img src={pkg.icon} alt="icon" />
                  <Card.Text className={pkg.selected && styles.cardTxt}>
                    {pkg.doses}
                  </Card.Text>
                </div>

                <div className={styles.listBox}>
                  <img src={pkg.icon} alt="icon" />
                  <Card.Text className={pkg.selected && styles.cardTxt}>
                    {pkg.savings}
                  </Card.Text>
                </div>
                <div className={styles.listBox}>
                  <img src={pkg.icon} alt="icon" />
                  <Card.Text className={pkg.selected && styles.cardTxt}>
                    {pkg.additional}
                  </Card.Text>
                </div>

                <Button className={pkg.selected ? styles.btn2 : styles.btn}>
                  {pkg.selected ? "SELECTED" : "SELECT"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className={styles.upgradeButtonContainer}>
        <Button size="lg">Upgrade my package NOW!</Button>
      </div>
    </div>
  );
};

export default UpgradePkg;
