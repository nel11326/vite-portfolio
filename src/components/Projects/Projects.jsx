import styles from "./Projects.module.css";

import projects from "../../Data/projects.json";
import { ProjectCard } from "../Projects/ProjectCard";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
