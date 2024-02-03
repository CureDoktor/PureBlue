import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/TransitionPage/Button";
import Questions from "../../components/TransitionPage/Questions/Questions";
import { buttonNames } from "../../components/TransitionPage/data";

const Index = () => {
  const [buttons, setButtons] = useState([buttonNames[0]]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(true);

  const addButton = () => {
    if (currentIndex < buttonNames.length - 1) {
      setButtons([...buttons, buttonNames[currentIndex + 1]]);
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsButtonClicked(false);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        {isButtonClicked ? (
          buttons.map((buttonName, index) => (
            <Button
              key={index}
              name={buttonName}
              onClick={addButton}
              disabled={index !== buttons.length - 1}
              icon={index === buttonNames.length - 1}
            />
          ))
        ) : (
          <Questions />
        )}
      </div>
    </div>
  );
};

export default Index;
