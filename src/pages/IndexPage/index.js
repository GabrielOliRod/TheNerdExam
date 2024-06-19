import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import MyCaptcha from "../../components/Captcha";
import ExamType from "../../components/ExamType";
import Recommendations from "../../components/Recommendations";
import styles from "./IndexPage.module.css";
import VirtualKeyboard from "../../components/virtualKeyboard";

function IndexPage() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [verifyExam, setVerifyExam] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [currentAction, setCurrentAction] = useState("");
  const [selectedExam, setSelectedExam] = useState("");
  const navigate = useNavigate();

  const handleKeyboardAction = (action) => {
    setCurrentAction(action);
    console.log("Action:", action);

    if (action === "START") {
      if (!captchaToken) {
        setCaptchaError("Complete the CAPTCHA");
        return;
      }

      if (!selectedExam) {
        setCaptchaError("Select an exam");
        return;
      }

      if (selectedExam === "1") {
        navigate("/questionprog");
      }

      if (selectedExam === "2") {
        navigate("/questionhard");
      }

      if (selectedExam === "3") {
        navigate("/questiongames");
      }
    }
  };

  const handleExamChange = (exam) => {
    setSelectedExam(exam);
    setVerifyExam(exam);
    setCaptchaError("");
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setCaptchaError("");
  };

  const examTypes = [
    {
      value: "1",
      exam: "Programming",
    },
    {
      value: "2",
      exam: "Hardware",
    },
    {
      value: "3",
      exam: "Games",
    },
  ];

  return (
    <div className={styles.container}>
      <Banner />
      <br />
      <Recommendations />
      <br />
      <div className={styles.containerForm}>
        <ExamType onChange={handleExamChange} exams={examTypes} />
        <MyCaptcha onCaptchaChange={handleCaptchaChange} />
        {captchaError && <p className={styles.error}>{captchaError}</p>}
      </div>
      <VirtualKeyboard onAction={handleKeyboardAction} />
    </div>
  );
}

export default IndexPage;
