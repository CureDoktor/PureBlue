import React from "react";
import styles from "./Button.styles.module.scss";

const Button = ({
  children,
  variant = "contained",
  endAdornment,
  className,
  style,
}) => {
  const variantMap = {
    contained: styles.contained,
  };

  return (
    <button
      className={`${styles.button} ${variantMap[variant]} ${className}`}
      style={style}
    >
      {children}
      {endAdornment && endAdornment}
    </button>
  );
};

export default Button;
