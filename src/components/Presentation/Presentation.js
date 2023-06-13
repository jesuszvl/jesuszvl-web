import Image from "next/image";
import Link from "next/link";
import ReactGA from "react-ga4";
import styles from "./Presentation.module.scss";
import vodyet from "./vodyet.jpg";
import makahco from "./makahco.jpg";

export default function Presentation() {
  const trackLinkClick = (projectName) => {
    ReactGA.initialize("G-K32RW6EE92");
    ReactGA.event({
      category: "Project",
      action: `Clicked ${projectName} project`,
    });
  };

  return (
    <div className={styles["presentation-container"]}>
      <div className={styles["presentation"]}>
        <h1>Portfolio</h1>
        <p className={styles["subtitle"]}>
          Take a look to a few personal projects I&apos;m currently working on
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
              href={"https://www.vodyet.com"}
              onClick={() => trackLinkClick("Makahco")}
              target="_blank"
            >
              <Image src={makahco} alt={"Makahco"} height={400} />
            </Link>
            <div className={styles["project-description"]}>
              <h1>Makahco</h1>
              <p>Music Production Studio Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
