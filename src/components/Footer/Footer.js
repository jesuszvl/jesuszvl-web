import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer"]}>
        <p className={styles["footer-content"]}>
          developed by{" "}
          <a href="https://makah.co" className={styles["footer-link"]}>
            makahcomx ®
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
