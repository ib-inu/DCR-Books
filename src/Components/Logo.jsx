import { Icon } from '@iconify/react';
import styles from './Logo.module.css'
import { Link } from 'react-router-dom';



function Logo() {
    return (
        <Link to={"/"} style={{
            color: "transparent"
        }}>
            <div className={styles.logo}>
                <span className={styles.name}>DCR</span>
                <span className={styles.icon}>
                    <Icon icon="ph:book-fill" />
                </span>
            </div>
        </Link>
    )
}

export default Logo
