import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../img";

export const ProjectCard = ({
  title,
  imageSrc,
  description,
  skills,
  demo,
  source,
}) => {
  const sourceClickHandler = (e) => {
    if (source === "private") {
      e.preventDefault();
      alert("The GitHub is private, cannot view the source code.");
    }
  };

  const demoClickHandler = (e) => {
    e.preventDefault();
    if (
      demo.endsWith(".png") ||
      demo.endsWith(".jpg") ||
      demo.endsWith(".jpeg")
    ) {
      window.open(getImageUrl(demo), "_blank");
    } else {
      window.open(demo, "_blank");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {title} <img />
        </h3>
        <div className={styles.contentBody}>
          <body>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
              {skills.map((skill, id) => {
                return (
                  <li key={id} className={styles.skill}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </body>
          <footer>
            <div className={styles.links}>
              <a
                href={source !== "private" ? source : "#"}
                target={source !== "private" ? "_blank" : ""}
                className={styles.link}
                onClick={sourceClickHandler}
              >
                Code
                <img
                  className={styles.footerImage}
                  src={getImageUrl("image/project/github.png")}
                />
              </a>
              <a href={demo} className={styles.link} onClick={demoClickHandler}>
                Demo
                <img
                  className={styles.footerImage}
                  src={getImageUrl("image/project/externalLink.png")}
                />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  demo: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};
