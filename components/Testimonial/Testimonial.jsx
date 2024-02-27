import React from "react";
import { CheckCircleFill, Quote, StarFill } from "react-bootstrap-icons";

import styles from "./Testimonial.styles.module.scss";

const Testimonial = ({ title, description, author, rating, verified }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
        <div className={styles.ratings}>
          {[...Array(Number(rating)).keys()].map((r, i) => (
            <StarFill key={`${r}-${i}`} />
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.quote}>
          <Quote />
        </div>
        <div className={styles.about}>
          <p className={styles.author}>{author}</p>
          {verified && (
            <p className={styles.verified}>
              <CheckCircleFill /> Verified Customer
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
