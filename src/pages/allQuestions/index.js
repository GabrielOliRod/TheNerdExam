import questionsProg from "../../json/QuestionsProg.json";
import questionsHard from "../../json/QuestionsHard.json";
import questionsGames from "../../json/QuestionsGames.json";

function AllQuestions() {
  return (
    <>
      <h1>PROGRAMMING</h1>
      {questionsProg.map((question) => {
        return (
          <>
            <p>
              {question.id} - {question.questionTitle}
            </p>
            <p>a) {question.a}</p>
            <p>b) {question.b}</p>
            <p>c) {question.c}</p>
            <p>d) {question.d}</p>
            <p style={{ borderBottom: "1px solid black" }}>e) {question.e}</p>
          </>
        );
      })}

      <h1>HARDWARE</h1>
      {questionsHard.map((question) => {
        return (
          <>
            <p>
              {question.id} - {question.questionTitle}
            </p>
            <p>a) {question.a}</p>
            <p>b) {question.b}</p>
            <p>c) {question.c}</p>
            <p>d) {question.d}</p>
            <p style={{ borderBottom: "1px solid black" }}>e) {question.e}</p>
          </>
        );
      })}

      <h1>GAMES</h1>
      {questionsGames.map((question) => {
        return (
          <>
            <p>
              {question.id} - {question.questionTitle}
            </p>
            <p>a) {question.a}</p>
            <p>b) {question.b}</p>
            <p>c) {question.c}</p>
            <p>d) {question.d}</p>
            <p style={{ borderBottom: "1px solid black" }}>e) {question.e}</p>
          </>
        );
      })}
    </>
  );
}

export default AllQuestions;
