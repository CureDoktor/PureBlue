import React, { useState } from "react";
import styles from "./ModalBox.styles.module.scss";
import { Button, Col, Modal } from "react-bootstrap";
const ModalBox = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className={styles.treatmentModal}
    >
      <Modal.Body className={styles.modalBody}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
        >
          &times;
        </button>
        <div className={styles.contentWrapper}>
          <img
            src="/assets/modals/treatment.png"
            alt="Thumbs up"
            className={styles.image}
          />
          <div className={styles.treatment}>
            <h2>Find your Treatment</h2>
            <p>Let's help you find the correct treatment to hit your goals</p>

            <Button
              variant="primary"
              size="lg"
              className={styles.getStartedButton}
            >
              Get Started
            </Button>
            <div className={styles.takesTimeText}>Takes 20 sec</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBox;
