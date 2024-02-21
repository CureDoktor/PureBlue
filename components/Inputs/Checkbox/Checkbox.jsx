import React, { memo, useMemo } from "react";

import styles from "./Checkbox.styles.module.scss";
import { useFormContext, useWatch } from "react-hook-form";
import { CheckSquare, CheckSquareFill } from "react-bootstrap-icons";

const Checkbox = ({
  label,
  name,
  value,
  variant = "default",
  options,
  onChange,
  endAdornment,
  style,
  resetFieldId,
}) => {
  const { register, setValue } = useFormContext();
  const checkedValues = useWatch(name)[name] || [];
  const checked = useMemo(
    () =>
      checkedValues
        ? checkedValues?.find((el) => parseInt(el) === value)
        : false,
    [checkedValues]
  );
  const checkedStyles = checked ? styles.checked : "";
  const variantMap = {
    default: styles.default,
    contained: styles.contained,
    outlined: styles.outlined,
  };
  const handleChange = (e) => {
    if (parseInt(e.target.value) === parseInt(resetFieldId)) {
      if (!e.target.checked)
        setValue(name, [
          ...checkedValues.filter((el) => {
            return el !== String(resetFieldId);
          }),
        ]);
      else setValue(name, [String(resetFieldId)]);
    } else {
      if (!e.target.checked)
        setValue(name, [
          ...checkedValues.filter((val) => val !== e.target.value),
        ]);
      else
        setValue(name, [
          ...checkedValues.filter((val) => val !== String(resetFieldId)),
          e.target.value,
        ]);
    }

    onChange?.();
  };

  return (
    <label
      style={style}
      className={`${styles.container} ${variantMap[variant]} ${checkedStyles} `}
    >
      <div className={styles.wrapper}>
        {checked ? (
          <CheckSquareFill className={styles.checkmark} />
        ) : (
          <CheckSquare className={styles.checkmark} />
        )}
        <input
          {...register(name, options)}
          type="checkbox"
          required
          onChange={handleChange}
          value={value}
        />
        <span className={styles.label}>{label}</span>
      </div>
      {endAdornment && (
        <span className={styles.endAdornment}>{endAdornment}</span>
      )}
    </label>
  );
};

export default memo(Checkbox);
