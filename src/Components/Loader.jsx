import styles from './Loader.module.css'
import { dotSpinner } from 'ldrs'

dotSpinner.register()



const Loader = () => <div className={styles.container}>
    <div className={styles.loader}>

        <l-dot-spinner
            size="40"
            speed="0.9"
            color="rgb(195, 192, 200)"
        ></l-dot-spinner>
    </div>
</div>
export default Loader;
