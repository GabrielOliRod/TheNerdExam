import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Results.module.css";
import VirtualKeyboard from "../../components/virtualKeyboard";

function Result() {
  const location = useLocation();
  const { correctCount, incorrectCount, results } = location.state || {
    correctCount: 0,
    incorrectCount: 0,
    results: [],
  };
  const navigate = useNavigate();
  const [isHiddenPass, setIsHiddenPass] = useState(true);
  const [isHiddenRepro, setIsHiddenRepro] = useState(true);

  function handleKeyboardInput(action) {
    if (action === "HOME") {
      navigate("/");
    }
  }

  useEffect(() => {
    if (correctCount >= 6) {
      setIsHiddenPass(!isHiddenPass);
    }
    if (correctCount < 6) {
      setIsHiddenRepro(!isHiddenRepro);
    }
  }, []);

  return (
    <>
      <div className={styles.result}>
        {!isHiddenPass && (
          <div className={styles.titleApproved}>
            <h1>Approved</h1>
            <h2>You're so smart, congrats! :)</h2>
          </div>
        )}

        {!isHiddenRepro && (
          <div className={styles.titleReproved}>
            <h1>Reproved</h1>
            <h2>You didn't hit 6! :(</h2>
          </div>
        )}
        <h3>Correct Answers: {correctCount}</h3>
        <h3>Incorrect Answers: {incorrectCount}</h3>
        <h4>
          Click on <img src="/assets/imgHome.png" alt="HOME" /> to return home
          page
        </h4>

        <div className={styles.resultQuestions}>
          <h2>Questions:</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <p>
                  Question {index + 1}: {result.questionTitle}
                </p>
                <p>Your Answer: {result.selectedAnswer}</p>
                <p>Correct Answer: {result.correctAnswer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <VirtualKeyboard onAction={handleKeyboardInput} />
    </>
  );
}

export default Result;
