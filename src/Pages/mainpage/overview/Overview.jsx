import StartBtn from '../../../Components/StartBtn'
import { AnimatedSection } from '../../../lib/AnimatedSection'
import styles from './Overview.module.css'


function Overview() {
    return (
        <main className={styles.page}>
            <section className={styles.section}>
                <AnimatedSection direction="top">
                    <p className={styles.introduction}>
                        Welcome to <b>DCR Books </b>, your personal digital companion for tracking the books you&apos;ve read. Whether you&apos;re a casual reader or a dedicated bibliophile, <b>DCR Books </b> helps you organize your reading journey, keep track of completed books, and discover new titles. Our platform is designed to offer a seamless and intuitive experience, making it easy to catalog your literary adventures, reflect on your favorite reads, and share your book lists with others. Join our community of readers and embark on a journey of knowledge, entertainment, and personal growth.
                    </ p>
                </AnimatedSection>

                <AnimatedSection direction="top">

                    <h2 className={styles.heading}>
                        What is BookTracker?
                    </h2>
                    <p className={styles.details}>
                        BookTracker is designed for book lovers who want to keep a comprehensive record of their reading history. With our platform, you can easily:
                    </p>
                </AnimatedSection>


                <h2 className={styles.heading}>Features</h2>
                <AnimatedSection direction="right">
                    <ul className={styles.details}>
                        <li>
                            <span>Track Your Reading Progress:</span> Log the books you&apos;ve completed, are currently reading, or plan to read in the future.
                        </li>

                        <li>

                            <span> Curate Your Favorites:</span> Highlight your favorite reads and share them with others, showcasing the books that have had the most impact on you.
                        </li>
                        <li>
                            <span>No Signup Required:</span> We believe in simplicity and ease of use. That&apos;s why BookTracker is completely accessible without the need for an account. Just start using it, and keep your reading journey organized effortlessly.
                        </li>
                    </ul>
                </AnimatedSection>
                <AnimatedSection direction="top">

                    <h2 className={styles.heading}>

                        Why Use BookTracker?
                    </h2>
                </AnimatedSection >
                <AnimatedSection direction="top">
                    <p className={styles.details}>

                        In today&apos;s fast-paced world, keeping track of what you&apos;ve read can be challenging. BookTracker helps you stay organized by providing a clean and professional interface to manage your book lists. Whether you&apos;re a student, a casual reader, or a bibliophile, our platform is tailored to meet your needs.
                    </p>
                </AnimatedSection >
                <AnimatedSection direction="right">

                    <ul className={styles.details}>
                        <li>

                            <span>Simple and Intuitive:</span> No complicated features, just the essentials for effective book tracking.
                        </li>
                        <li>

                            <span>Accessible to Everyone:</span> No sign-up or login required; your reading data is always at your fingertips.
                        </li>
                        <li>

                            <span>Designed for Readers:</span> Every feature on BookTracker is created with the reader in mind, ensuring a user-friendly experience.
                        </li>
                    </ul>
                </AnimatedSection >

                <h2 className={styles.heading}>
                    Get Started
                </h2>

                <div className={styles.details}>
                    <p>

                        Ready to dive in? Start tracking your books today and see how easy it is to organize your literary adventures with BookTracker. Explore our features, and you&apos;ll never lose track of your reading journey again.
                    </p>
                    <StartBtn />
                </div>

            </section>
        </main >
    )
}

export default Overview
