import React from "react";

import styles from "./SectionContainer.module.scss";

const SectionContainer = ({ children, title }) => {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["section-content"]}>
        {title && <h1 className={styles["section-title"]}>{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
