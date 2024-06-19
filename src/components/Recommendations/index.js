import styles from "./Recommendations.module.css";

function Recommendations() {
  return (
    <div className={styles.containerInfo}>
      <h2>
        <img src="/assets/info.jpg" alt="Info logo" />
        &nbsp;Recommendations
      </h2>
      <table className={styles.containerInfoTable}>
        <tr>
          <td width="10px" valign="top">
            •
          </td>
          <td>
            The theoretical test consists of questions randomly drawn from the
            Exam Nerd database. <br />
            The minimum requirement to pass is 6 correct answers on all tests.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="top">
            •
          </td>
          <td>
            <a href="/AllQuestions" target="_blank">
              Click here
            </a>{" "}
            to see all questions.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="top">
            •
          </td>
          <td>
            <a
              href="https://www.detran.sp.gov.br/simulado"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            to access the website that inspired this project.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="top">
            •
          </td>
          <td>Each question have just one correct alternative.</td>
        </tr>
        <tr>
          <td width="10px" valign="top">
            •
          </td>
          <td>
            You should select only one alternative, which you consider correct,
            for each question.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="middle">
            •
          </td>
          <td>
            Use the button <img src="/assets/imgSubmit.png" alt="SUBMIT" /> on
            keyboard to submit the exam.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="top">
            •
          </td>
          <td>
            Use the buttons A, B, C, D, E located on the virtual keyboard to
            mark the alternative that you consider correct for each question.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="middle">
            •
          </td>
          <td>
            Use the buttons{" "}
            <img src="/assets/imgLeft.png" alt="LEFT" style={{ width: "4%" }} />{" "}
            and{" "}
            <img
              src="/assets/imgRight.png"
              alt="RIGHT"
              style={{ width: "4.1%" }}
            />{" "}
            located on the virtual keyboard to navigate back/forward through the
            questions.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="middle">
            •
          </td>
          <td>
            Use the buttons <img src="/assets/imgHelp.png" alt="HELP" /> to open
            the help section.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="middle">
            •
          </td>
          <td>
            This website is <storng style={{ fontWeight: "bold" }}>ONLY</storng>{" "}
            for computers, not responsive to mobile.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="middle">
            •
          </td>
          <td>
            This website is better visualized on a{" "}
            <strong style={{ fontWeight: "bold" }}>
              1920x1080 or 1366x768 screen.
            </strong>
          </td>
        </tr>
        <tr>
          <td width="10px" valign="middle">
            •
          </td>
          <td>
            This website is a website developed by Gabriel de Oliveira
            Rodrigues.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="top">
            •
          </td>
          <td>
            <a
              href="https://www.linkedin.com/in/gabrielolirod/"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            to access my LinkedIn.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="top">
            •
          </td>
          <td>
            <a
              href="https://github.com/GabrielOliRod"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            to access my Github and see another projects.
          </td>
        </tr>
        <tr>
          <td width="10px" valign="top">
            •
          </td>
          <td>
            <a
              href="https://www.youtube.com/@GabrielOliRod"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            to access my Youtube channel.
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Recommendations;
