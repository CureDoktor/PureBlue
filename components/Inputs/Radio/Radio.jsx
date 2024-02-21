import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Radio.styles.module.scss";

export const Radio = ({
  label,
  name,
  value,
  variant = "default",
  options,
  endAdornment,
  critical,
  style,
}) => {
  const { register, watch, setValue } = useFormContext();
  const checkedValue = watch(name);
  const isChecked = parseInt(checkedValue) === value ? styles.checked : "";
  const variantMap = {
    default: styles.default,
    contained: styles.contained,
    outlined: styles.outlined,
  };

  return (
    <label
      style={style}
      required
      className={`${styles.container} ${variantMap[variant]} ${isChecked}`}
    >
      <div className={styles.wrapper}>
        <input
          required={true}
          {...register(name, options)}
          type="radio"
          value={value}
          onChange={(e) => {
            if (critical == 1) {
              alert("critical");
              setValue(name, checkedValue);
              return;
            } else {
              setValue(name, e.target.value);
            }
          }}
        />
        {label}
      </div>
      {endAdornment && (
        <span className={styles.endAdornment}>{endAdornment}</span>
      )}
    </label>
  );
};
