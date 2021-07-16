import styles from "./styles.module.scss";
import PropTypes from "prop-types";
const CharacterCardLeft = ({ image, name }) => {
  return (
    <div className={styles.cardLeft}>
      <img src={image} alt={name} />
    </div>
  );
};
CharacterCardLeft.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default CharacterCardLeft;
