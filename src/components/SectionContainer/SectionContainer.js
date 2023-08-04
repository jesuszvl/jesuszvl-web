import React from "react";

import styles from "./SectionContainer.module.scss";

const SectionContainer = ({ children }) => {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["section-content"]}>{children}</div>
    </div>
  );
};

export default SectionContainer;
