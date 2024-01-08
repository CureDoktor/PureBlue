import React from "react";
import styles from "./UpgradePkg.styles.module.scss";
import { Button, Card, Col, Row } from "react-bootstrap";
const UpgradePkg = () => {
  const packages = [
    {
      id: 1,
      title: "3 Month Package",
      doses: "12 doses of 25.0mg",
      savings: "10% Savings ($9.6 discount)",
      additional: "Only pay an additional $86.40",
      icon: "/assets/pageThree/upgradePkg/uncheck.png",
    },
    {
      id: 2,
      title: "6 Month Package",
      doses: "24 doses of 25.0mg",
      savings: "20% Savings ($48 discount)",
      additional: "Only pay an additional $192.00",
      selected: true,
      icon: "/assets/pageThree/upgradePkg/check.png",
    },
    {
      id: 3,
      title: "12 Month Package",
      doses: "48 doses of 25.0mg",
      savings: "30% Savings ($158.4 discount)",
      additional: "Only pay an additional $369.60",
      icon: "/assets/pageThree/upgradePkg/uncheck.png",
    },
  ];
  return (
    <div className={styles.upgradeSection}>
      <Row>
        {packages.map((pkg) => (
          <Col key={pkg.id} md={4}>
            <Card className={pkg.selected ? styles.selectedCard : styles.card}>
              <Card.Body>
                <Card.Text>{pkg.doses}</Card.Text>
                <Card.Text>{pkg.savings}</Card.Text>
                <Card.Text>{pkg.additional}</Card.Text>
                <Button variant={pkg.selected ? "primary" : "outline-primary"}>
                  {pkg.selected ? "SELECTED" : "SELECT"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className={styles.upgradeButtonContainer}>
        <Button variant="danger" size="lg">
          Upgrade my package NOW!
        </Button>
      </div>
      <div className={styles.optOutText}>
        No, do not upgrade my order. Proceed with my monthly treatment plan.
      </div>
    </div>
  );
};

export default UpgradePkg;
