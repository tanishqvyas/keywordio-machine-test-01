import React from "react";
import styles from "./AdChoice.module.css";

// mui
import Checkbox from "@mui/material/Checkbox";

/**
 *
 * @param {String} name The name of the Ad type
 * @param {Element} image The src of the imaghe to be shown
 * @param {Boolean} isChecked Whjether the box is checked or not
 * @param {Function} onChange A handler that triggers on change
 * @returns Ad selection checkbox element
 */
const AdChoice = ({ name, image, isChecked, onChange }) => {
  return (
    <div className={styles.container}>
      <div>
        <Checkbox
          checked={isChecked}
          label={{ inputProps: { "aria-label": name } }}
          onChange={onChange}
        />
      </div>
      <img src={image} alt={name} />
      <div className={styles.footer}>
        <p>Create</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default AdChoice;
