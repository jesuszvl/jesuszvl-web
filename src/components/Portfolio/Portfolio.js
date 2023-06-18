import Image from "next/image";
import Link from "next/link";
import styles from "./Portfolio.module.scss";
import vodyet from "./vodyet.jpg";
import makahco from "./makahco.jpg";
import SectionContainer from "../SectionContainer/SectionContainer";
import { trackEvent } from "../../utils/analytics";

export default function Portfolio() {
  const trackLinkClick = (projectName) => {
    trackEvent("Project", `Clicked ${projectName} project`);
  };

  return (
    <SectionContainer>
      <div className={styles["presentation"]}>
        <h1>My Portfolio</h1>
        <p>
          Take a look to a few personal projects I&apos;m currently working on.
        </p>
        <div className={styles["projects"]}>
          <div className={styles["project"]}>
            <Link
              href={"https://www.vodyet.com"}
              onClick={() => trackLinkClick("Vodyet")}
              target="_blank"
            >
              <Image src={vodyet} alt={"Vodyet"} height={400} />
            </Link>

            <div className={styles["project-description"]}>
              <h1>Vodyet</h1>
              <p>Personal Budget Tool</p>
            </div>
          </div>

          <div className={styles["project"]}>
            <Link
              href={"https://makahco.com"}
              onClick={() => trackLinkClick("Makahco")}
              target="_blank"
            >
              <Image src={makahco} alt={"Makahco"} height={400} />
            </Link>
            <div className={styles["project-description"]}>
              <h1>Makahco</h1>
              <p>Creative Studio</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
