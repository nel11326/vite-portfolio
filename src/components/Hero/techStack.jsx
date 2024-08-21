import { getImageUrl } from "../../img";
import styles from "./Hero.module.css";

function TechStack() {
  return (
    <div>
      <div className={styles.technologies}>
        <div>
          <h3 className={styles.technologiesTitle}>Tech Stacks</h3>
        </div>
        <div className={styles.tech}>
          <ul>
            <li>
              <img src={getImageUrl("image/hero/html.png")} alt="HTML" />
            </li>
            <li>
              <img src={getImageUrl("image/hero/css.png")} alt="CSS" />
            </li>
            <li>
              <img src={getImageUrl("image/hero/js.png")} alt="JS" />
            </li>
            <li>
              <img src={getImageUrl("image/hero/react.png")} alt="React" />
            </li>
            <li>
              <img src={getImageUrl("image/hero/angular.png")} alt="Angular" />
            </li>
            <li>
              <img src={getImageUrl("image/hero/remix.png")} alt="Remix" />
            </li>
          </ul>
          <ul>
            <li>
              <img
                src={getImageUrl("image/hero/reactNative.png")}
                alt="React Native"
              />
            </li>
            <li>
              <img
                src={getImageUrl("image/hero/tailwind.png")}
                alt="Tailwind"
              />
            </li>
            <li>
              <img src={getImageUrl("image/hero/nodejs.png")} alt="NodeJs" />
            </li>
            <li>
              <img src={getImageUrl("image/hero/sql.png")} alt="MSSQL" />
            </li>
            <li>
              <img
                src={getImageUrl("image/hero/swagger.png")}
                alt="swaggerdoc"
              />
            </li>
            <li>
              <img src={getImageUrl("image/hero/jest.png")} alt="Jest" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
