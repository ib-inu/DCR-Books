import StartBtn from "../../../Components/StartBtn";
import styles from "./HomePage.module.css";


export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <section className={styles.section}>
                <h1 className={styles.text}>
                    Keep Track of
                    Books You&apos;ve Read
                    and Build Your Favorites List
                </h1>

                <StartBtn />
            </section>
        </main>
    );
}
