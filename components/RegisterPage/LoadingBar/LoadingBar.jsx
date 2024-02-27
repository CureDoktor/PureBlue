import styles from "./LoadingBar.styles.module.scss";

const LoadingBar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.progress}></div>
      <p>Applying your special offer now...</p>
    </div>
  );
};

export default LoadingBar;
