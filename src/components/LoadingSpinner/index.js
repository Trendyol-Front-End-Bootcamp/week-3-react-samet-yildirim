import styles from "./styles.module.scss";
import PropTypes from "prop-types";
const LoadingSpinner = ({ position }) => {
  return (
    <div
      className={
        position === "absolute" ? styles.spinnerAbsolute : styles.spinner
      }
    >
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
  );
};
LoadingSpinner.propTypes = {
  position: PropTypes.string,
};
export default LoadingSpinner;
