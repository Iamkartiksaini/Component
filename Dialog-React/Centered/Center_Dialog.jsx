import { Fragment, useState } from "react";
import styles from "./Center.module.scss";
import PropTypes from "prop-types";

const Custom_Centered_DynamicDialog = ({
  modelHeight,
  modelWidth,
  label = "button",
  children,
}) => {
  modelHeight = modelHeight || "max-content";
  modelWidth = modelWidth || "max-content";
  const [checked, setChecked] = useState(false);

  const toggleMenu = () => {
    setChecked((pre) => !pre);
  };

  return (
    <Fragment>
      <div
        className={`${styles.Insight_dialog} ${
          checked ? styles.active : styles.close
        }`}
      >
        <span onClick={toggleMenu} className={styles.closeBtn}>
          X
        </span>
        <label onClick={toggleMenu} className={styles.box}>
          {label}
        </label>
        <label
          onClick={toggleMenu}
          className={`${styles.closeLayer} ${styles.label}`}
        ></label>
        <div
          className={styles.menuBox}
          style={{
            "--pop-up-menu-height": modelHeight,
            "--pop-up-menu-width": modelWidth,
          }}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
};

Custom_Centered_DynamicDialog.props = {
  unqiueKey: PropTypes.string.isRequired,
  modelHeight: PropTypes.string.isRequired,
  modelWidth: PropTypes.string.isRequired,
};
export default Custom_Centered_DynamicDialog;
