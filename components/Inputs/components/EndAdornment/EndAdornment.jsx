import React from "react";
import styles from "./EndAdornment.styles.module.scss";

export const EndAdornment = ({
  text,
  variant = "info",
  color,
  size = "medium",
}) => {
  const variantMap = {
    info: styles.info,
    chip: styles.chip,
  };
  const colorMap = {
    lightBlue: styles.lightBlue,
    blue: styles.blue,
    green: styles.green,
    orange: styles.orange,
    red: styles.red,
  };
  return (
    <span
      className={`${styles.endAdornment} ${variantMap[variant]} ${colorMap[color]}`}
    >
      {text}
    </span>
  );
};
