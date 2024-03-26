import React from "react";
import styles from "./Button.styles.module.scss";

const Button = ({
  children,
  variant = "contained",
  endAdornment,
  className,
  disabled,
  style,
  ...rest
}) => {
  const variantMap = {
    contained: styles.contained,
    gradient: styles.gradient,
  };

  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${variantMap[variant]} ${className}`}
      style={style}
      {...rest}
    >
      {children}
      {endAdornment && endAdornment}
    </button>
  );
};

export default Button;
