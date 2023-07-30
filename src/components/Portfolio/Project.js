import styles from "./Portfolio.module.scss";

const Project = ({ name, description, href, image }) => {
  console.log(image.src);
  return (
    <div
      className={styles["project"]}
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      <div className={styles["project-content"]}>
        <span className={styles["project-title"]}>{name}</span>
        <span className={styles["project-desc"]}>{description}</span>
      </div>
    </div>
  );
};

export default Project;
