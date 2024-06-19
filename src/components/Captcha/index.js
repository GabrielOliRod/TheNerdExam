import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Captcha.module.css";

function MyCaptcha({ onCaptchaChange }) {
  return (
    <div className={styles.captcha}>
      <ReCAPTCHA
        sitekey="6LeYwvEpAAAAALysrbBMxe2MI8b1l_YxY8sAk67t"
        onChange={onCaptchaChange}
      />
    </div>
  );
}

export default MyCaptcha;
