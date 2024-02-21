import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Textarea.styles.module.scss";
import { useEffect } from "react";
import { useConsultationContext } from "../../../store/consultation-context";
const Textarea = ({ name, visibility }) => {
  const { register, setValue } = useFormContext();
  const { setNextQuestion } = useConsultationContext();
  useEffect(() => {
    setNextQuestion(true);
  }, []);
  return (
    <div>
      {visibility ? (
        <div>
          <input
            type="checkbox"
            onClick={() => {
              setValue(name, "NONE");
            }}
            id="none"
          />
          <label style={{ paddingLeft: "10px" }} for="none">
            {" "}
            Click here if the answer is NONE
          </label>
          <br />
        </div>
      ) : (
        <></>
      )}
      <br />
      <textarea
        required
        style={{ width: "100%" }}
        className={styles.textarea}
        {...register(name)}
      />
    </div>
  );
};

export default Textarea;
