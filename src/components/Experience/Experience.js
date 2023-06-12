import styles from "./Experience.module.scss";

import ieebc from "./ieebc.svg";
import timbox from "./timbox.svg";
import srax from "./srax.svg";
import iconos from "./iconos.png";
import gametime from "./gametime.svg";
import Company from "../Company/Company";

const EXPERIENCE = [
  {
    name: "gametime",
    logo: gametime,
    time: "Mar 2022 - Present",
    url: "https://gametime.co/",
  },
  {
    name: "ieebc",
    logo: ieebc,
    time: "Nov 2019 - Mar 2022",
    url: "https://ieebc.mx/",
  },
  {
    name: "timbox",
    logo: timbox,
    time: "Feb 2018 - Dec 2018",
    url: "https://timbox.com.mx/",
  },
  {
    name: "srax",
    logo: srax,
    time: "Oct 2016 - Feb 2018",
    url: "https://srax.mx/",
  },
  {
    name: "iconos",
    logo: iconos,
    time: "Dec 2010 - Sep 2016",
    url: "https://iconos.mx/",
  },
];

const Experience = () => {
  return (
    <div className={styles["experience-container"]}>
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
    </div>
  );
};

export default Experience;
