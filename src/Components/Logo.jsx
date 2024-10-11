import styles from './Logo.module.css'
import { Link } from 'react-router-dom';



function Logo() {
    return (
        <Link to={"/"} style={{
            color: "transparent"
        }}>
            <div className={styles.logo}>
                <span className={styles.icon}>
                    {/* <img src='/DCR_books_logo_transparent.png' /> */}
                    DCR
                </span>
            </div>
        </Link>
    )
}

export default Logo
