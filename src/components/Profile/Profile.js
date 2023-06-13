import Image from "next/image";

import styles from "./Profile.module.scss";
import profile from "./jesuszvl.jpg";
import mail from "./mail.svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import Link from "next/link";

const Profile = () => {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles["description"]}>
        <span className={styles["title"]}>Software Engineer</span>
        <p className={styles["subtitle"]}>
          I like to craft scalable software solutions that deliver exceptional
          user experiences.
        </p>
      </div>
      <div className={styles["contact-card"]}>
        <Image
          className={styles["photo"]}
          src={profile}
          alt="Jesús Zavala"
          width={250}
          height={250}
          priority
        />
        <div className={styles["contact"]}>
          <Link href="mailto: jesus@jesuszvl.com">
            <Image src={mail} alt="Mail" width={36} height={36} />
          </Link>
          <Link href="https://www.linkedin.com/in/jesuszvl/" target="_blank">
            <Image src={linkedin} alt="LinkedIn" width={36} height={36} />
          </Link>
          <Link href="https://github.com/jesuszvl" target="_blank">
            <Image src={github} alt="Github" width={36} height={36} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
