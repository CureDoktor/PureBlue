import Link from "next/link";
import styles from "./styles.module.scss";
import LegitScriptCertificate from "../LegitScriptCertificate";
import { Container, Image, Row, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { ClockFill, Check } from "react-bootstrap-icons";
import { useState } from "react";
import { searchParamsUrl } from "../searchParams";

export default function Recommend({ setContent }) {
  const router = useRouter();
  const [enableButton, setEnableButton] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    router.push("/landing-page-v2" + searchParamsUrl());
  };
  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit}>
        <div key={`inline-radio`} className="mb-3">
          <h3 className={styles.h3}>What would you like help with?</h3>
          <p>
            This will allow us to recommend the most appropriate treatment for
            you
          </p>
          <Form.Check
            inline
            label="I want harder, higher quality erections and more sexual performance"
            name="group1"
            onClick={() => {
              setEnableButton(true);
            }}
            className={styles.radioButton}
            type="radio"
            id={`inline-1`}
          />
          <Form.Check
            inline
            disabled
            label="I want to regrow my hair or help with thinning/receding hairline (Coming Soon)"
            name="group1"
            onClick={() => {
              setEnableButton(true);
            }}
            className={styles.radioButton}
            type="radio"
            id={`inline-2`}
          />
          <Form.Check
            inline
            disabled
            label="I want to increase my testosterona levels (Coming Soon)"
            className={styles.radioButton}
            type="radio"
            id={`inline-3`}
          />
          <Form.Check
            inline
            disabled
            label="I want to lose weight (Coming Soon)"
            className={styles.radioButton}
            type="radio"
            id={`inline-4`}
          />
          <br />
          <Button
            type="submit"
            disabled={!enableButton}
            className={styles.button}
          >
            {" "}
            Next <Check />
          </Button>
        </div>
      </Form>
    </div>
  );
}
