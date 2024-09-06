import { Icon } from '@iconify/react';
import styles from './Logo.module.css'
import { useNavigate } from 'react-router-dom';

function Logo() {
    const Navigate = useNavigate();
    return (
        <div className={styles.logo} onClick={() => {
            Navigate("/")
        }}>
            <h1>DCR</h1>
            <span>
                <Icon icon="ph:book-fill" />
            </span>
        </div>
    )
}

export default Logo
