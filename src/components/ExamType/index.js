import { useState } from "react";
import styles from "./ExamType.module.css";

function ExamType(props) {
  const [selectedExam, setSelectedExam] = useState("");

  const changeExam = (event) => {
    const exam = event.target.value;
    setSelectedExam(exam);
    props.onChange(exam);
  };

  return (
    <>
      <div className={styles.containerExamsTitle}>
        <h3>
          Inform the type of exam and press the button "start" to begin the test
        </h3>
      </div>
      <br />
      <select value={selectedExam} onChange={changeExam} required>
        <option value="" hidden>
          Select an exam
        </option>
        {props.exams.map((exam) => (
          <option key={exam.value} value={exam.value}>
            {exam.exam}
          </option>
        ))}
      </select>
      <div className={styles.conteinerExamTypeButton}></div>
    </>
  );
}

export default ExamType;
