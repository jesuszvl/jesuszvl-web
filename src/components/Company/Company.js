import ReactGA from "react-ga4";
import Image from "next/image";
import styles from "./Company.module.scss";
import Link from "next/link";

const Company = ({ company }) => {
  const { name, url, logo, time } = company;

  const trackLinkClick = (companyName) => {
    ReactGA.initialize("G-K32RW6EE92");
    ReactGA.event({
      category: "Experience",
      action: `Clicked ${companyName} company link`,
    });
  };

  return (
    <div className={styles["company"]}>
      <Link target="_blank" href={url} rel="noreferrer">
        <Image
          src={logo}
          alt={name}
          height={32}
          onClick={() => trackLinkClick(name)}
        />
      </Link>
    </div>
  );
};

export default Company;
