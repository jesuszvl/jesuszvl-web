import React from "react";

import styles from "./SectionContainer.module.scss";

const SectionContainer = ({ children, isDark = false }) => {
  return (
    <div
      className={styles["section-container"]}
      style={
        isDark
          ? { backgroundColor: "#1e2124", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <div className={styles["section-content"]}>{children}</div>
    </div>
  );
};

export default SectionContainer;
