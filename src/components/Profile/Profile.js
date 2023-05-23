import Image from "next/image";

import styles from "./Profile.module.scss";
import profile from "./jesuszvl.jpg";

const Profile = () => {
  return (
    <div className={styles["profile-container"]}>
      <Image
        className={styles["photo"]}
        src={profile}
        alt="Jesús Zavala"
        width={160}
        height={160}
      />
      <h1 className={styles["name"]}>Jesús Zavala</h1>
      <p className={styles["title"]}>Software Engineer</p>
      <div className={styles["social"]}>
        <a className={styles["link"]} href="https://github.com/jesuszvl">
          <i className={styles[("bi", "bi-github", "icon")]}></i>
        </a>
        <a
          className={styles["link"]}
          href="https://www.linkedin.com/in/jesuszvl/"
        >
          <i className={styles["bi bi-linkedin icon"]}></i>
        </a>
        <a className={styles["link"]} href="https://twitter.com/jesuszvI">
          <i className={styles["bi bi-twitter icon"]}></i>
        </a>
      </div>
    </div>
  );
};

export default Profile;
