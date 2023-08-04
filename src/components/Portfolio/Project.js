import Link from "next/link";
import styles from "./Portfolio.module.scss";

const Project = ({ name, description, href, image }) => {
  return (
    <div
      className={styles["project"]}
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      <a className={styles["project-content"]} target="_blank" href={href}>
        <span className={styles["project-title"]}>{name}</span>
        <span className={styles["project-desc"]}>{description}</span>
      </a>
    </div>
  );
};

export default Project;
