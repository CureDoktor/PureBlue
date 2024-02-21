import React from "react";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { useConsultationContext } from "../../../store/consultation-context";
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
  const { setNextQuestion } = useConsultationContext();
  useEffect(() => {
    setNextQuestion(true);
  }, []);
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
