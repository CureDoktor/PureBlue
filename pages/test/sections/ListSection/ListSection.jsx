import React from "react";
import { Container } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";

import styles from "./ListSection.styles.module.scss";

const ListSection = () => {
  return (
    <section className={styles.list}>
      <Container className={styles.container}>
        <ul>
          <li>
            <CheckCircleFill /> Starts at $2.20/pill
          </li>
          <li>
            <CheckCircleFill /> No Insurance Needed
          </li>
          <li>
            <CheckCircleFill /> Made in the USA
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default ListSection;
