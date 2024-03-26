import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./Textarea.styles.module.scss";
import { useEffect, useState } from "react";
import { useConsultationContext } from "../../../store/consultation-context";
const Textarea = ({ name, visibility, answer, metadata }) => {
  const [validate, setValidate] = useState(false);
  function hasNormalCharacters(text) {
    const regex = /^[a-zA-Z0-9\s.,!?:@]{1,150}$/i;

    // Test if the text contains any special characters
    return regex.test(text);
  }

  var checkboxValue = true;
  try {
    var metadatas = JSON.parse(metadata);
    checkboxValue = metadatas.checkbox;
  } catch {}

  const { register, setValue } = useFormContext();
  const { setNextQuestion, isProductChanged, productChanged, setEnableButton } =
    useConsultationContext();
  useEffect(() => {
    setNextQuestion(true);
    setEnableButton(false);
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
      {validate && (
        <span style={{ color: "red" }}>
          Please use just Numbers and Letters, without Special and up to 150
          Characters!
        </span>
      )}

      <textarea
        style={{ width: "100%" }}
        className={styles.textarea}
        {...register(name, {
          onChange: (e) => {
            if (!hasNormalCharacters(e.target.value)) {
              setEnableButton(false);
              setValidate(true);
            } else {
              if (e.target.value.trim() !== "") {
                setEnableButton(true);
              } else {
                setEnableButton(false);
              }
              setValidate(false);
            }
          },
        })}
      />
    </div>
  );
};

export default Textarea;
