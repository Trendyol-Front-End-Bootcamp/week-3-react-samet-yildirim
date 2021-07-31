import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const Button = ({ href, children }) => {
  if (href) {
    return (
      <Link className={styles.button} to={href}>
        {children}
      </Link>
    );
  } else {
    return <button className={styles.button}>{children}</button>;
  }
};
Button.propTypes={
  href:PropTypes.string
}
export default Button;
