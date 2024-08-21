import { getImageUrl } from "../../img";
import styles from "./Hero.module.css";

import TechStack from "./techStack";

function Hero() {
  return (
    <div>
      <section className={styles.container} id="home">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Full Stack Web Developer{" "}
            <img
              className={styles.wavingHand}
              src={getImageUrl("image/hero/wavingHand.png")}
              alt="hand Icon"
            />
          </h1>
          <p className={styles.description}>
            Hi, Im Ronel F. Tayawa. A passionate Full Stack Web Developer based
            in Bontoc, Mountain Province, Philippines. <img />
          </p>
          <footer className={styles.footer}>
            <a href="#">
              <img
                className={styles.websiteLink}
                src={getImageUrl("image/hero/linkedin.png")}
                alt="linkedin"
              />
            </a>
            <a href="#">
              <img
                className={styles.websiteLink}
                src={getImageUrl("image/hero/github.png")}
              />
            </a>
            <a href="#">
              <img
                className={styles.websiteLink}
                src={getImageUrl("image/hero/facebook.png")}
              />
            </a>
          </footer>
        </div>
        <img
          className={styles.heroImg}
          src={getImageUrl("image/hero/myPic.png")}
          alt="My Image"
        />
      </section>
      <div className={styles.tech}>
        <TechStack />
      </div>
    </div>
  );
}

export default Hero;
