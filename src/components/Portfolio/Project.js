import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "../../utils/analytics";
import styles from "./Portfolio.module.scss";

const Project = ({ name, description, href, image }) => {
  return (
    <div className={styles["project"]}>
      <Link
        href={href}
        onClick={() => trackEvent("Project", `Clicked ${name} project`)}
        target="_blank"
      >
        <Image src={image} alt={name} height={400} />
      </Link>

      <div className={styles["project-description"]}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;
