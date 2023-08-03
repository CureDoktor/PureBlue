import React, { useContext } from "react";
import { useAccordionButton, AccordionContext } from "react-bootstrap";

import styles from "./ContextAwareToggle.styles.module.scss";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  return (
    <div className={styles.button} onClick={decoratedOnClick}>
      {children}
    </div>
  );
};

export default ContextAwareToggle;
