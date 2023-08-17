import Image from "next/image";
import styles from "./Company.module.scss";
import Link from "next/link";

const Company = ({ company }) => {
  const { name, url, logo } = company;

  return (
    <div className={styles["company"]}>
      <Link target="_blank" href={url} rel="noreferrer">
        <Image src={logo} alt={name} height={32} />
      </Link>
    </div>
  );
};

export default Company;
