import React, { memo, useMemo, useState } from "react";
import styles from "./Select.styles.module.scss";
import { useFormContext } from "react-hook-form";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useConsultationContext } from "../../../store/consultation-context";

const Select = ({ name, options, items }) => {
  const { setNextQuestion } = useConsultationContext();
  useEffect(() => {
    setNextQuestion(true);
  }, []);
  const [open, setOpen] = useState(false);
  const { register, watch, setValue, getValues } = useFormContext();
  const selectedValue = watch(name);
  const parsedSelectedValue = useMemo(
    () => items?.find((item) => item.value === selectedValue),
    [selectedValue]
  );

  const handleSelect = (e) => {
    const value = e.target.getAttribute("data-value");
    setValue(name, value);
  };

  const handleContainerClick = () => {
    setOpen((s) => !s);
  };

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <select required {...register(name, options)}>
        {items?.map((item, i) => (
          <option key={`${item.value}-${i}`} value={item.value} disabled>
            {item.label}
          </option>
        ))}
      </select>
      <div className={styles.selectedValue}>
        <span>{parsedSelectedValue?.label || "Select option"}</span>
      </div>
      <div className={styles.chip}>
        {parsedSelectedValue?.endAdornment && parsedSelectedValue.endAdornment}
        {open ? (
          <ChevronUp style={{ marginLeft: "1em" }} />
        ) : (
          <ChevronDown style={{ marginLeft: "1em" }} />
        )}
      </div>
      <div className={`${styles.dropdown} ${open && styles.open}`}>
        {items?.map((item, i) => (
          <div
            key={`${item.value}-${i}`}
            data-value={item.value}
            onClick={handleSelect}
            className={styles.optionsWrapper}
          >
            {item.label}
            {item.endAdornment && item.endAdornment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Select);
