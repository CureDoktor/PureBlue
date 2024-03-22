import Link from "next/link";
import styles from "./styles.module.scss";
import LegitScriptCertificate from "../LegitScriptCertificate";
import { Container, Image, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { ClockFill } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

export default function FindTreatment({ setContent }) {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.h3}>Find your Treatment</h3>
        <p>Let’s help you find the correct treatment to hit your goals</p>
        <Button
          onClick={() => {
            setContent(1);
          }}
          className={styles.button}
        >
          {" "}
          Get Started
        </Button>
        <span className={styles.span}>
          <ClockFill className={styles.ClockFill} />
          Takes 20 sec
        </span>
      </div>
    </div>
  );
}
