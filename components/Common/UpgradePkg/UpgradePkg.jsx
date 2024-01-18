import { useState } from "react";
import styles from "./UpgradePkg.styles.module.scss";
import { Button, Card, Col, Row } from "react-bootstrap";

const UpgradePkg = ({ upgradeArray }) => {
  const [selectedPackageId, setSelectedPackageId] = useState(2);
  const checkIcon = "/assets/pageThree/upgradePkg/check.png";
  const uncheckIcon = "/assets/pageThree/upgradePkg/uncheck.png";

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
                  <p
                    className={`${
                      id === selectedPackageId ? styles.pColor2 : styles.pColor
                    }`}
                  >
                    {title}
                  </p>
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
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
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
