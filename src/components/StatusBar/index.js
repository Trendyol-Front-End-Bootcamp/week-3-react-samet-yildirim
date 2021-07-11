import styles from './styles.module.scss'
const StatusBar = ({status}) =>{
    switch(status){
        case "Alive":
           return <span className={styles.barColorGreen}></span>
        case "Dead":
            return <span className={styles.barColorRed}></span>
        default:
            return <span className={styles.barColorGrey}></span>
    }
   
}
export default StatusBar;