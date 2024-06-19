import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.containerBanner}>
      <img src="/assets/banner.png" alt={"Exam logo"} />
      <h3>The simulator of Nerd Exams</h3>
    </div>
  );
}

export default Banner;
