import { sections } from "./constants";
import SkillSection from "./SkillSection";

import styles from "./Skills.module.scss";
import SectionContainer from "../SectionContainer/SectionContainer";

export default function Skills() {
  return (
    <SectionContainer title={"Tech Skills"}>
      <div className={styles["skills"]}>
        <div className={styles["sections-container"]}>
          {sections.map(({ title, images }) => (
            <SkillSection key={title} title={title} images={images} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
