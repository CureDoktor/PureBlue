import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Textarea.styles.module.scss";

const Textarea = ({ name }) => {
  const { register } = useFormContext();
  return <textarea required className={styles.textarea} {...register(name)} />;
};

export default Textarea;
