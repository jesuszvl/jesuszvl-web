import styles from "./Portfolio.module.scss";
import vodyet from "./vodyet.jpg";
import makahco from "./makahco.jpg";
import openprep from "./openprep.jpg";
import SectionContainer from "../SectionContainer/SectionContainer";
import Project from "./Project";

export default function Portfolio() {
  return (
    <SectionContainer>
      <div className={styles["presentation"]}>
        <h1>Portfolio</h1>
        <div className={styles["projects"]}>
          <Project
            name="Vodyet"
            description="Personal Budget Tool"
            image={vodyet}
            href="https://www.vodyet.com"
          />
          <Project
            name="Makahco"
            description="Creative Studio"
            image={makahco}
            href="https://makah.co"
          />
          <Project
            name="PREP Libre"
            description="Web Standard for Preliminar Electoral Results"
            image={openprep}
            href="http://preplibre.com"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
