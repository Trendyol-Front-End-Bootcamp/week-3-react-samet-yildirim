import Button from '../../components/Buttons/Button'
import styles from './styles.module.scss'
const NotFound = ()=>{
    return(
        <div className={styles.notFound}>
            <p>404</p>
            <h1>Page Not Found</h1>
            <Button href="/">Back to Home</Button>
        </div>
    )
}
export default NotFound;