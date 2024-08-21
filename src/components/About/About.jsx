import { getImageUrl } from "../../img";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("image/about/about.jpg")}
          alt="about"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("image/about/frontend.png")} alt="frontend" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Im a Frontend Developer with extensive experience in creating
                responsive, user-friendly, and optimized websites. Building
                visually appealing and efficient interfaces that enhance user
                experience across various devices. Delivering clean,
                maintainable code, ensuring that websites not only look great
                but also perform exceptionally well. My skill set includes
                modern frontend technologies, and I am dedicated to continuously
                improving my craft to stay ahead in the ever-evolving web
                development landscape.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("image/about/backend.png")} alt="backend" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing fast and optimized back-end
                systems and APIs, focusing on creating scalable, efficient, and
                maintainable solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("image/about/bookkeeper.png")}
              alt="bookkeeper"
            />
            <div className={styles.aboutItemText}>
              <h3>Bookkeeping</h3>
              <p>
                I have experience in both bookkeeping and auditing, which likely
                involves maintaining financial records, tracking income and
                expenses, reconciling accounts, preparing financial statements,
                and ensuring accuracy and compliance with accounting standards.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
