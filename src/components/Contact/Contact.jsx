import styles from "./Contact.module.css";
import { getImageUrl } from "../../img";

function Contact() {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("image/contact/mail.png")}
            alt="mail"
            className={styles.imageContainer}
          />
          <a href="mailto:lenor11326@gmail.com">lenor11326@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("image/hero/linkedin.png")}
            alt="linkedin"
            className={styles.imageContainer}
          />
          <a href="https://www.linkedin.com/in/ronel-tayawa">
            {" "}
            linkedin.com/in/ronel-tayawa
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("image/hero/github.png")}
            alt="github"
            className={styles.imageContainer}
          />
          <a href="https://www.github.com/nel11326">github.com/nel11326</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
