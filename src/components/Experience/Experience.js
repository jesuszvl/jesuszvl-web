import "./Experience.css";

import ieebc from "./ieebc.png";
import timbox from "./timbox.png";
import srax from "./srax.png";
import iconos from "./iconos.png";
import gametime from "./gametime.png";
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
    <div className="experience-container">
      <div className="experience">
        <h1>Experience</h1>
        <p>
          Quick summary of places I contributed delivering high quality code
        </p>
        {EXPERIENCE.map((company) => {
          return <Company key={company.name} company={company} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
