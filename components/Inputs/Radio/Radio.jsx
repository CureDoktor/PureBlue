import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Radio.styles.module.scss";
import { useConsultationContext } from "../../../store/consultation-context";
import { useEffect } from "react";

export const Radio = ({
  label,
  name,
  value,
  variant = "default",
  options,
  endAdornment,
  critical,
  critical_message,
  style,
  forbidden,
  forbidden_message,
  followUp,
}) => {
  const { register, watch, setValue } = useFormContext();
  const { setNextQuestion, isProductChanged, productChanged } =
    useConsultationContext();
  useEffect(() => {
    if (!followUp) {
      setNextQuestion(false);
    }
  }, []);
  console.log(followUp);
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
            if (forbidden == 1) {
              alert(forbidden_message);
            } else {
              if (critical == 1) {
                if (
                  confirm(
                    critical_message !== ""
                      ? critical_message
                      : "Unfortunately, based on your selection, you are likely to be denied treatment"
                  ) == true
                ) {
                  setValue(name, e.target.value);
                  isProductChanged(productChanged + 1);
                }
                return;
              } else {
                setValue(name, e.target.value);
                if (!followUp) {
                  isProductChanged(productChanged + 1);
                }
              }
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
