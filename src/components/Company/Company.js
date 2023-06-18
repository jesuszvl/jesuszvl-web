import Image from "next/image";
import styles from "./Company.module.scss";
import Link from "next/link";
import { trackEvent } from "../../utils/analytics";

const Company = ({ company }) => {
  const { name, url, logo } = company;

  const trackLinkClick = (companyName) => {
    trackEvent("Experience", `Clicked ${companyName} company link`);
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
