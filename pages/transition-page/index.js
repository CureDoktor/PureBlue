import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/TransitionPage/Button";
import { buttonNames } from "../../components/TransitionPage/data";
import { useRouter } from "next/navigation";
import { searchParamsUrl } from "../../components/searchParams";

const TransitionPage = () => {
  const [buttons, setButtons] = useState([buttonNames[0]]);
  const [initialLoad, setInitialLoad] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(true);
  const [loadButton, setLoadButton] = useState(0);
  const router = useRouter();

  const addButton = () => {
    if (currentIndex < buttonNames.length - 1) {
      setButtons([...buttons, buttonNames[currentIndex + 1]]);
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        setLoadButton(loadButton + 1);
      }, 2000);
    } else {
      router.push("/questions" + searchParamsUrl());
    }
  };
  useEffect(() => {
    localStorage.removeItem("currentStep");
    setTimeout(() => {
      setLoadButton(loadButton + 1);
    }, 2000);
  }, []);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    } else {
      addButton();
    }
  }, [loadButton]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        {isButtonClicked &&
          buttons.map((buttonName, index) => (
            <Button
              key={index}
              name={buttonName}
              // onClick={addButton}
              disabled={index !== buttons.length - 1}
              icon={index === buttonNames.length - 1}
            />
          ))}
      </div>
    </div>
  );
};

export default TransitionPage;
