import Image from "next/image";
import React from "react";

import styles from "./Step.styles.module.scss";

const Step = ({ title, description, icon, iconAlt }) => {
  return (
    <div className={styles.container}>
      {icon && (
        <div className={styles.icon}>
          <Image src={icon} alt={iconAlt} layout="fill" />
        </div>
      )}
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Step;
