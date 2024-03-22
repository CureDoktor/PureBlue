import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Textarea.styles.module.scss";
import { useEffect } from "react";
import { useConsultationContext } from "../../../store/consultation-context";
const Textarea = ({ name, visibility, answer, metadata }) => {
  var checkboxValue = true;
  try {
    var metadatas = JSON.parse(metadata);
    checkboxValue = metadatas.checkbox;
  } catch {}

  const { register, setValue } = useFormContext();
  const { setNextQuestion, isProductChanged, productChanged } =
    useConsultationContext();
  useEffect(() => {
    setNextQuestion(true);
  }, []);
  return (
    <div>
      {visibility && checkboxValue ? (
        <div>
          <input
            type="checkbox"
            onClick={() => {
              setValue(name, answer ? answer : "NONE");
              isProductChanged(productChanged + 1);
            }}
            id="none"
          />
          <label style={{ paddingLeft: "10px" }} for="none">
            {" "}
            {answer ? answer : "Click here if the answer is NONE"}
          </label>
          <br />
          <br />
        </div>
      ) : (
        <></>
      )}

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
