import React, { useState, useEffect } from "react";
import VirtualKeyboard from "../../components/virtualKeyboard";
import questions from "../../json/QuestionsHard.json";
import styles from "./QuestionHardware.module.css";
import { useNavigate } from "react-router-dom";

function getRandomQuestions(questions, numQuestions) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
}

function QuestionHardware() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [questionsList, setQuestionsList] = useState([]);
  const [showSubmitConfirmation, setShowSubmitConfirmation] = useState(false);
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);
  const [verifySub, setVerifySub] = useState(false);

  useEffect(() => {
    const selectedQuestions = getRandomQuestions(questions, 10);
    setQuestionsList(selectedQuestions);
  }, []);

  useEffect(() => {
    const calculateResults = () => {
      let correct = 0;
      let incorrect = 0;
      questionsList.forEach((question, index) => {
        if (selectedAnswers[index] === question.correctAnswer) {
          correct++;
        } else if (selectedAnswers[index]) {
          incorrect++;
        }
      });
      setCorrectCount(correct);
      setIncorrectCount(incorrect);
    };
    calculateResults();
  }, [selectedAnswers, questionsList]);

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const handleKeyboardInput = (action) => {
    if (action === "HELP") {
      setIsHidden(!isHidden);
      return;
    }

    if (action === "LEFT") {
      setShowSubmitConfirmation(false);
      setVerifySub(false);
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    }

    if (action === "HOME") {
      navigate("/");
    }

    if (action === "RIGHT") {
      setShowSubmitConfirmation(false);
      setVerifySub(false);
      if (!selectedAnswers[currentQuestionIndex]) {
        alert("Please select an answer before proceeding.");
        return;
      }
      if (currentQuestionIndex < questionsList.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowSubmitConfirmation(true);
        setVerifySub(true);
      }
    }

    if (action === "SUBMIT") {
      if (!selectedAnswers[currentQuestionIndex]) {
        alert("Please select an answer before proceeding.");
        return;
      }
      setShowSubmitConfirmation(true);
      setVerifySub(true);
    }

    if (action === "A") {
      handleSelectAnswer("a");
    }
    if (action === "B") {
      handleSelectAnswer("b");
    }
    if (action === "C") {
      handleSelectAnswer("c");
    }
    if (action === "D") {
      handleSelectAnswer("d");
    }
    if (action === "E") {
      handleSelectAnswer("e");
    }

    if (action === "DOWN") {
      if (selectedAnswers[currentQuestionIndex] === "a") {
        handleSelectAnswer("b");
      }
      if (selectedAnswers[currentQuestionIndex] === "b") {
        handleSelectAnswer("c");
      }
      if (selectedAnswers[currentQuestionIndex] === "c") {
        handleSelectAnswer("d");
      }
      if (selectedAnswers[currentQuestionIndex] === "d") {
        handleSelectAnswer("e");
      }
    }

    if (action === "UP") {
      if (selectedAnswers[currentQuestionIndex] === "b") {
        handleSelectAnswer("a");
      }
      if (selectedAnswers[currentQuestionIndex] === "c") {
        handleSelectAnswer("b");
      }
      if (selectedAnswers[currentQuestionIndex] === "d") {
        handleSelectAnswer("c");
      }
      if (selectedAnswers[currentQuestionIndex] === "e") {
        handleSelectAnswer("d");
      }
    }

    if (action === "YES") {
      if (verifySub === true) {
        handleSubmitConfirmation(true);
      }
    }

    if (action === "NO") {
      handleSubmitConfirmation(false);
      setVerifySub(false);
    }
  };

  const handleSubmitConfirmation = (confirm) => {
    if (confirm) {
      navigate("/result", {
        state: {
          correctCount,
          incorrectCount,
          results: questionsList.map((question, index) => ({
            questionTitle: question.questionTitle,
            selectedAnswer: selectedAnswers[index],
            correctAnswer: question.correctAnswer,
          })),
        },
      });
    } else {
      setShowSubmitConfirmation(false);
    }
  };

  const currentQuestion = questionsList[currentQuestionIndex];

  return (
    <div className={styles.container}>
      {currentQuestion ? (
        <div className={styles.question}>
          <h3>
            Question {currentQuestionIndex + 1}: {currentQuestion.questionTitle}
          </h3>
          <div className={styles.questionBody}>
            <button
              className={`${styles.optionButton} ${
                selectedAnswers[currentQuestionIndex] === "a"
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleSelectAnswer("a")}
            >
              A
            </button>
            <p>{currentQuestion.a}</p>
          </div>

          <div className={styles.questionBody}>
            <button
              className={`${styles.optionButton} ${
                selectedAnswers[currentQuestionIndex] === "b"
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleSelectAnswer("b")}
            >
              B
            </button>
            <p>{currentQuestion.b}</p>
          </div>

          <div className={styles.questionBody}>
            <button
              className={`${styles.optionButton} ${
                selectedAnswers[currentQuestionIndex] === "c"
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleSelectAnswer("c")}
            >
              C
            </button>
            <p>{currentQuestion.c}</p>
          </div>

          <div className={styles.questionBody}>
            <button
              className={`${styles.optionButton} ${
                selectedAnswers[currentQuestionIndex] === "d"
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleSelectAnswer("d")}
            >
              D
            </button>
            <p>{currentQuestion.d}</p>
          </div>

          <div className={styles.questionBody}>
            <button
              className={`${styles.optionButton} ${
                selectedAnswers[currentQuestionIndex] === "e"
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleSelectAnswer("e")}
            >
              E
            </button>
            <p>{currentQuestion.e}</p>
          </div>
          {showSubmitConfirmation && (
            <div className={styles.confirmation}>
              <p>
                Are you sure you want to submit your answers?
                <br />
                Use the <img src="/assets/imgYes.png" alt="Yes" /> or{" "}
                <img src="/assets/imgNo.png" alt="No" /> on keyboard to answer
              </p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
      {!isHidden && (
        <div className={styles.help}>
          <div className={styles.helpTitle}>
            <h2>
              <img src="assets/info.jpg" alt="Info icon" />
              &nbsp;Help Section:
            </h2>
          </div>
          <table>
            <tr>
              <td>
                <img src="/assets/imgStart.png" alt="Start" />
              </td>
              <td>To start the exam selected</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgSubmit.png" alt="Submit" />
              </td>
              <td>To submit the exam in the question in which this</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgRight.png" alt="Right" />
              </td>
              <td>Go to the next question</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgLeft.png" alt="Left" />
              </td>
              <td>Back to the previous question</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgOpts.png" alt="A,B,C,D,E" />
              </td>
              <td>Select an alternative</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgUp.png" alt="UP" />
              </td>
              <td>Select the alternative above</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgDown.png" alt="DOWN" />
              </td>
              <td>Select the alternative below</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgHelp.png" alt="HELP" />
              </td>
              <td>Shows the help section (click again to close)</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgHome.png" alt="HOME" />
              </td>
              <td>Back to home page</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgYes.png" alt="Yes" />
              </td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <img src="/assets/imgNo.png" alt="No" />
              </td>
              <td>No</td>
            </tr>
          </table>
        </div>
      )}
      <VirtualKeyboard onAction={handleKeyboardInput} />
    </div>
  );
}

export default QuestionHardware;
