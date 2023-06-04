import styles from "./Presentation.module.scss";

export default function Presentation() {
  return (
    <div className={styles["presentation-container"]}>
      <div className={styles["presentation"]}>
        <h1>Portfolio</h1>
        <p>Take a look to a few projects I&apos;m currently working</p>

        <h1>Gametime</h1>
        <p>Marketplac for Last Minute Tickets</p>
        <h1>Vodyet</h1>
        <p>Personal Budget Tool</p>
        <h1>Makahco Studio</h1>
        <p>Music Production</p>
        <h1>OpenPREP</h1>
        <p>JS Standard for Mexico&apos;s Preliminary Election Results</p>
      </div>
    </div>
  );
}
