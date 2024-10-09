import { useNavigate } from 'react-router-dom'
import styles from './StartBtn.module.css'
function StartBtn() {
    const navigate = useNavigate();
    return (
        <button className={styles.button} onClick={() => navigate("/books")}>Get Started</button>
    )
}

export default StartBtn
