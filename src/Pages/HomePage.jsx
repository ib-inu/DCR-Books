import styles from "./HomePage.module.css";
import NavBar from "../Componets/NavBar";
import { useNavigate } from "react-router-dom";


export default function Homepage() {
    const Navigate = useNavigate();
    return (
        <main className={styles.homepage}>
            <NavBar />
            <div
                className={styles.background}
            />
            <section className={styles.section}>
                <h1>
                    Tracks your <br />
                    favorite Books <br />
                    with us <br />
                </h1>
                <button onClick={() => Navigate("/books")}>Start</button>
            </section>
        </main>
    );
}
