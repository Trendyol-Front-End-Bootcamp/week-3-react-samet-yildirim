import styles from './styles.module.scss'
import StatusBar from '../../StatusBar';
const CharacterCardRight = ({name,status,species,lastKnownLocation,firstSeenIn}) => {
  return (
    <div className={styles.cardRight}>
      <h3 className={styles.cardRightTitle}>{name}</h3>
      <p className={styles.cardRightStatus}>
        <StatusBar status={status} />
        {status} - {species}
      </p>
      <p className={styles.cardRightLightText}>Last known location:</p>
      <p>{lastKnownLocation}</p>
      <p className={styles.cardRightLightText}>First seen in:</p>
      <p>{firstSeenIn}</p>
    </div>
  );
};
export default CharacterCardRight;
