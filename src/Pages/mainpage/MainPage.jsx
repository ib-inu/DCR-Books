import { Outlet } from "react-router-dom"
import NavBar from "../../Components/NavBar"
import styles from './MainPage.module.css'

function MainPage() {
    return (
        <div className={styles.container}>
            <NavBar />
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default MainPage