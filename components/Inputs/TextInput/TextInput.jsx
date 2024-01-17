import React from "react";
import { useFormContext } from "react-hook-form";

import styles from "./TextInput.styles.module.scss";

const TextInput = ({
  placeholder,
  name,
  type = "text",
  options,
  endAdornment,
  style,
}) => {
  const { register } = useFormContext();
  const typeMap = {
    date: styles.date,
  };
  return (
    <div className={styles.container}>
      <input
        {...register(name, options)}
        style={style}
        required
        className={`${styles.input} ${typeMap[type]}`}
        type={type}
        placeholder={placeholder}
      />
      {type === "date" && <span className={styles.datePicker}></span>}
    </div>
  );
};

export default TextInput;
