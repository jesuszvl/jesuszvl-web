import Image from "next/image";
import Link from "next/link";
import styles from "./Portfolio.module.scss";
import vodyet from "./vodyet.jpg";
import makahco from "./makahco.jpg";
import SectionContainer from "../SectionContainer/SectionContainer";
import { trackEvent } from "../../utils/analytics";
import Project from "./Project";

export default function Portfolio() {
  const trackLinkClick = (projectName) => {
    trackEvent("Project", `Clicked ${projectName} project`);
  };

  return (
    <SectionContainer isDark>
      <div className={styles["presentation"]}>
        <h1>Portfolio</h1>
        <p>
          Take a look to a few personal projects I&apos;m currently working on.
        </p>
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
            href="https://makahco.com"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
