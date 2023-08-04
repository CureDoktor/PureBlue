import React from "react";

import styles from "./Checkbox.styles.module.scss";
import { useFormContext } from "react-hook-form";
import { CheckSquare, CheckSquareFill } from "react-bootstrap-icons";

const Checkbox = ({
  label,
  name,
  value,
  variant = "default",
  options,
  endAdornment,
  style,
}) => {
  const { register, watch } = useFormContext();
  const checkedValues = watch(name);
  const isChecked = checkedValues?.find((el) => el === value)
    ? styles.checked
    : "";

  const variantMap = {
    default: styles.default,
    contained: styles.contained,
    outlined: styles.outlined,
  };

  return (
    <label
      style={style}
      className={`${styles.container} ${variantMap[variant]} ${isChecked}`}
    >
      <div className={styles.wrapper}>
        {isChecked ? (
          <CheckSquareFill className={styles.checkmark} />
        ) : (
          <CheckSquare className={styles.checkmark} />
        )}
        <input {...register(name, options)} type="checkbox" value={value} />
        <span className={styles.label}>{label}</span>
      </div>
      {endAdornment && (
        <span className={styles.endAdornment}>{endAdornment}</span>
      )}
    </label>
  );
};

export default Checkbox;
