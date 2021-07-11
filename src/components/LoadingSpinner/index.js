import styles from './styles.module.scss'
const LoadingSpinner = () => {
  return (
    <div class={styles.spinner}>
      <div class={styles.bounce1}></div>
      <div class={styles.bounce2}></div>
      <div class={styles.bounce3}></div>
    </div>
  );
};
export default LoadingSpinner;
