import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about"]}>
        <h1>About me</h1>
        <p>
          Hello! ✌🏽 My name is Jesús, and I am a software engineer from
          Mexicali, Mexico with over 11 years of experience in the industry.{" "}
        </p>
        <p>
          Currently, I am focusing on creating frontend web applications using
          React and JavaScript. In addition to my expertise in frontend
          development, I also have experience as a fullstack engineer, with
          skills in languages such as Python, Ruby, and PHP.
        </p>
        <p>
          I am highly dedicated to my work and always seeking out new
          opportunities to improve my skills and knowledge in the field of
          software development.
        </p>
      </div>
    </div>
  );
}
