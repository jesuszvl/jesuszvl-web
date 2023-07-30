import Image from "next/image";

import styles from "./ProfileHero.module.scss";
import { SVG_LIBRARY } from "../../icons/library";
import Link from "next/link";
import SectionContainer from "../SectionContainer/SectionContainer";
import GithubIcon from "../../icons/GithubIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import MailIcon from "../../icons/MailIcon";

const ProfileHero = () => {
  return (
    <SectionContainer>
      <div className={styles["profile"]}>
        <div className={styles["description"]}>
          <span className={styles["title"]}>Jesús Zavala</span>
          <p className={styles["subtitle"]}>Software Engineer</p>
        </div>
        <div className={styles["contact-card"]}>
          <Image
            className={styles["photo"]}
            src={SVG_LIBRARY.PROFILE}
            alt="Jesús Zavala"
            width={225}
            height={225}
            priority
          />
          <div className={styles["contact"]}>
            <Link href="mailto: jesus@jesuszvl.com">
              <MailIcon width={36} height={36} />
            </Link>
            <Link href="https://www.linkedin.com/in/jesuszvl/" target="_blank">
              <LinkedinIcon width={36} height={36} />
            </Link>
            <Link href="https://github.com/jesuszvl" target="_blank">
              <GithubIcon width={36} height={36} />
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProfileHero;
