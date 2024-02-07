import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/TransitionPage/Button";
import { buttonNames } from "../../components/TransitionPage/data";
import { useRouter } from "next/navigation";

const Index = () => {
  const [buttons, setButtons] = useState([buttonNames[0]]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(true);
  const router = useRouter();

  const addButton = () => {
    if (currentIndex < buttonNames.length - 1) {
      setButtons([...buttons, buttonNames[currentIndex + 1]]);
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/questions");
    }
  };
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        {isButtonClicked &&
          buttons.map((buttonName, index) => (
            <Button
              key={index}
              name={buttonName}
              onClick={addButton}
              disabled={index !== buttons.length - 1}
              icon={index === buttonNames.length - 1}
            />
          ))}
      </div>
    </div>
  );
};

export default Index;
