import Image from "next/image";

import styles from "./Profile.module.scss";
import { SVG_LIBRARY } from "../../icons/library";
import Link from "next/link";
import SectionContainer from "../SectionContainer/SectionContainer";

const Profile = () => {
  return (
    <SectionContainer>
      <div className={styles["profile"]}>
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
            src={SVG_LIBRARY.PROFILE}
            alt="Jesús Zavala"
            width={250}
            height={250}
            priority
          />
          <div className={styles["contact"]}>
            <Link href="mailto: jesus@jesuszvl.com">
              <Image src={SVG_LIBRARY.MAIL} alt="Mail" width={36} height={36} />
            </Link>
            <Link href="https://www.linkedin.com/in/jesuszvl/" target="_blank">
              <Image
                src={SVG_LIBRARY.LINKEDIN}
                alt="LinkedIn"
                width={36}
                height={36}
              />
            </Link>
            <Link href="https://github.com/jesuszvl" target="_blank">
              <Image
                src={SVG_LIBRARY.GITHUB}
                alt="Github"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Profile;
