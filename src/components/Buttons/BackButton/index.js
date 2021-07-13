import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <Link to="/">
      <span className={styles.backButton}>{"<"}</span>
    </Link>
  );
};
export default BackButton;
