import LoadingSpinner from "../LoadingSpinner"
import styles from './styles.module.scss'
const Loading = ()=>{
    return(
        <div className={styles.loading}>
            <LoadingSpinner/>
        </div>
    )
}
export default Loading;