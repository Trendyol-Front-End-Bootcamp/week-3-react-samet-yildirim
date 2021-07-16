import styles from './styles.module.scss'
const LoadingSpinner = ({position}) => {
  return (
    <div className={position==="absolute"?styles.spinnerAbsolute:styles.spinner}>
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
  );
};
export default LoadingSpinner;
