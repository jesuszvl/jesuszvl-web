import styles from "./Experience.module.scss";

import { SVG_LIBRARY } from "../../icons/library";
import Company from "../Company/Company";
import SectionContainer from "../SectionContainer/SectionContainer";

const EXPERIENCE = [
  {
    name: "gametime",
    logo: SVG_LIBRARY.GT,
    time: "Mar 2022 - Present",
    url: "https://gametime.co/",
  },
  {
    name: "ieebc",
    logo: SVG_LIBRARY.IEEBC,
    time: "Nov 2019 - Mar 2022",
    url: "https://ieebc.mx/",
  },
  {
    name: "timbox",
    logo: SVG_LIBRARY.TIMBOX,
    time: "Feb 2018 - Dec 2018",
    url: "https://timbox.com.mx/",
  },
  {
    name: "srax",
    logo: SVG_LIBRARY.SRAX,
    time: "Oct 2016 - Feb 2018",
    url: "https://srax.mx/",
  },
  {
    name: "iconos",
    logo: SVG_LIBRARY.ICONOS,
    time: "Dec 2010 - Sep 2016",
    url: "https://iconos.mx/",
  },
];

const Experience = () => {
  return (
    <SectionContainer>
      <div className={styles["experience"]}>
        <h1>Where I&apos;ve worked?</h1>
        <p>
          Here&apos;s a quick summary of places I contributed delivering high
          quality code. Click on each company to read about my time there.
        </p>
        <div className={styles["experience-list"]}>
          {EXPERIENCE.map((company) => {
            return <Company key={company.name} company={company} />;
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Experience;
