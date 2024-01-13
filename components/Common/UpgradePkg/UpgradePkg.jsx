import { useState } from "react";
import styles from "./UpgradePkg.styles.module.scss";
import { Button, Card, Col, Row } from "react-bootstrap";

const UpgradePkg = ({ upgradeArray }) => {
  const [selectedPackageId, setSelectedPackageId] = useState(2);
  const checkIcon = "/assets/pageThree/upgradePkg/check.png";
  const uncheckIcon = "/assets/pageThree/upgradePkg/uncheck.png";
  // const packages = [
  //   {
  //     id: 1,
  //     title: "3 Month Package",
  //     tBox: "/assets/pageThree/upgradePkg/light.svg",
  //     doses: `12 doses of 25.0mg Sildenafil (oral - tablet)`,
  //     savings: "10% Savings ($9.6 discount)",
  //     additional: "Only pay an additional $86.40",
  //   },
  //   {
  //     id: 2,
  //     title: "6 Month Package",
  //     tBox: "/assets/pageThree/upgradePkg/brown.svg",
  //     doses: "24 doses of 25.0mg Sildenafil (oral - tablet)",
  //     savings: "20% Savings ($48 discount)",
  //     additional: "Only pay an additional $192.00",
  //   },
  //   {
  //     id: 3,
  //     title: "12 Month Package",
  //     doses: "48 doses of 25.0mg Sildenafil (oral - tablet)",
  //     savings: "30% Savings ($158.4 discount)",
  //     additional: "Only pay an additional $369.60",
  //     tBox: "/assets/pageThree/upgradePkg/light.svg",
  //   },
  // ];

  const handleSelectPackage = (id) => {
    setSelectedPackageId(id);
  };

  return (
    <div className={styles.upgradeSection}>
      <h2>Select your Upgrade Below</h2>
      <Row>
        {upgradeArray?.map(
          ({ id, title, doses, savings, additional, tBox }) => (
            <Col key={id} xs={12} lg={4} md={6}>
              <Card
                className={`${styles.card} ${
                  id === selectedPackageId && styles.selectedCard
                }`}
                onClick={() => handleSelectPackage(id)}
              >
                <div className={styles.stepBox}>
                  <img src={tBox} alt="step" />
                  <p className={styles.pColor}>{title}</p>
                </div>
                <Card.Body className={styles.cardBody}>
                  {[
                    { text: doses },
                    { text: savings },
                    { text: additional },
                  ].map((item, index) => (
                    <div className={styles.listBox} key={index}>
                      <img
                        src={id === selectedPackageId ? checkIcon : uncheckIcon}
                        alt="icon"
                      />
                      <Card.Text
                        className={id === selectedPackageId && styles.cardTxt}
                      >
                        {item.text}
                      </Card.Text>
                    </div>
                  ))}
                  <Button
                    className={
                      id === selectedPackageId ? styles.btn2 : styles.btn
                    }
                  >
                    {id === selectedPackageId ? "SELECTED" : "SELECT"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
      <div className={styles.upgradeButtonContainer}>
        <Button size="lg">Upgrade my package NOW!</Button>
      </div>
    </div>
  );
};

export default UpgradePkg;
