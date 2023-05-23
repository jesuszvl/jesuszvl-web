import Image from "next/image";
import styles from "./Company.module.scss";

const Company = ({ company }) => {
  const { name, url, logo, time } = company;
  return (
    <div className={styles["company"]}>
      <a target="_blank" href={url} rel="noreferrer">
        <Image className={styles[name]} src={logo} alt={name} width={160} />
      </a>
      <span className={styles["time"]}>{time}</span>
    </div>
  );
};

export default Company;
