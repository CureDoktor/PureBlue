import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Radio.styles.module.scss";

export const Radio = ({
  label,
  name,
  value,
  variant = "default",
  checked,
  onChange,
  options,
  endAdornment,
  className,
  style,
}) => {
  const { register } = useFormContext();
  const isChecked = checked ? styles.checked : "";

  const variantMap = {
    default: styles.default,
    contained: styles.contained,
    outlined: styles.outlined,
  };
  return (
    <label
      style={style}
      className={`${styles.container} ${variantMap[variant]} ${isChecked} ${className}`}
    >
      <div className={styles.wrapper}>
        <input
          {...register(name, options)}
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </div>
      {endAdornment && (
        <span className={styles.endAdornment}>{endAdornment}</span>
      )}
    </label>
  );
};
