import styles from "./styles.module.scss";
import PropTypes from "prop-types";
const StatusBar = ({ status }) => {
  switch (status) {
    case "Alive":
      return <span className={styles.barColorGreen}></span>;
    case "Dead":
      return <span className={styles.barColorRed}></span>;
    default:
      return <span className={styles.barColorGrey}></span>;
  }
};
StatusBar.propTypes = {
  status: PropTypes.string,
};
export default StatusBar;
