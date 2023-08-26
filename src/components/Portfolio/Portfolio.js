import styles from "./Portfolio.module.scss";
import vodyet from "./vodyet.jpg";
import makahco from "./makahco.jpg";
import preplibre from "./preplibre.jpg";
import SectionContainer from "../SectionContainer/SectionContainer";
import Project from "./Project";

export default function Portfolio() {
  return (
    <SectionContainer title={"Current Projects"}>
      <div className={styles["presentation"]}>
        <div className={styles["projects"]}>
          <Project
            name="MAKAHCO"
            description="Creative Studio"
            image={makahco}
            href="https://makah.co"
          />
          <Project
            name="VODYET"
            description="Personal Budget Tool"
            image={vodyet}
            href="https://www.vodyet.com"
          />
          <Project
            name="PREP LIBRE"
            description="Web Standard for Preliminar Electoral Results"
            image={preplibre}
            href="https://preplibre.com"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
