import React from "react";
import styles from "./SectionWithHeader.module.css";

// icons
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const SectionWithHeader = ({ heading, infoText, children }) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h3>{heading}</h3>
        {infoText && <HelpOutlineIcon />}
      </header>
      {children}
    </section>
  );
};

export default SectionWithHeader;
