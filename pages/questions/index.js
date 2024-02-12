import Question from "../../components/Questions/index";

const index = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <Questions props={props} />
      </div>
    </div>
  );
};

export default Questions;
