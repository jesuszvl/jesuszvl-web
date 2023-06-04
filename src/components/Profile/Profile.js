import Image from "next/image";

import styles from "./Profile.module.scss";
import profile from "./jesuszvl.jpg";

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
      <Image
        className={styles["photo"]}
        src={profile}
        alt="Jesús Zavala"
        width={250}
        height={250}
      />
    </div>
  );
};

export default Profile;
