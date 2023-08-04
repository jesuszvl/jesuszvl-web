import { sections } from "./constants";
import SkillSection from "./SkillSection";

import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <div className={styles["skills"]}>
      <h1 className={styles["skills-title"]}>Skills</h1>
      <div className={styles["sections-container"]}>
        {sections.map(({ title, images }) => (
          <SkillSection key={title} title={title} images={images} />
        ))}
      </div>
    </div>
  );
}
