import styles from './styles.module.scss'
const CharacterCardLeft = ({ image, name }) => {
  return (
    <div className={styles.cardLeft}>
      <img src={image} alt={name} />
    </div>
  );
};
export default CharacterCardLeft;
