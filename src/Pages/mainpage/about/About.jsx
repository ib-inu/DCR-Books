import { Link } from 'react-router-dom'
import styles from './About.module.css'
import { AnimatedSection } from '../../../lib/AnimatedSection'

function About() {
    return (
        <main>
            <section className={styles.text}>
                <h1>About DCRBooks</h1>

                <AnimatedSection direction="top">
                    <h2>Why This Website?</h2>
                    <p>
                        In a world filled with countless books and stories, keeping track of your reading journey can be both challenging and rewarding. This website was created with the simple purpose of helping book lovers like you to organize and reflect on the books you&apos;ve read and the ones that hold a special place in your heart.
                    </p>

                    <h2>What Can You Do Here?</h2>
                    <p>
                        <b>Track Your Reads:</b> Easily log the books you&apos;ve read, along with important details like the title, author, and the date you completed them.
                        <br />
                        <b>Manage Your Favorites:</b> Highlight your favorite books, so you can revisit them whenever you want or share them with others.
                        <br />
                        <b>No Sign-Up Needed:</b> There&apos;s no need to create an account. Just jump right in and start tracking your reading journey.
                    </p>
                </AnimatedSection>

                <AnimatedSection direction="top">
                    <h2>Why Practice Matters?</h2>
                    <p>
                        This website also serves as a personal project to hone skills in web development, particularly in using React Router for navigation. While simple in design, it’s built with care and attention to detail, reflecting the desire to create a professional and user-friendly experience.
                    </p>
                </AnimatedSection>

                <AnimatedSection direction="top">
                    <h2>The Journey Ahead</h2>
                    <p>
                        As this project evolves, new features and improvements will be added to make the experience even better. Your contribution and suggestions are welcome as we continue to grow and improve.
                    </p>
                </AnimatedSection>

                <AnimatedSection direction="top">
                    <h2>Contribute   <i className="fa-brands fa-github"></i></h2>
                    <Link to="/contribute">&rarr; click here &larr;</Link>
                </AnimatedSection>

                <div className={styles.creator}>

                    <AnimatedSection direction="top">
                        <h2>About the Developer</h2>
                        <p>
                            Hi, I’m <a target="_blank" rel="noopener noreferrer" href='https://github.com/ib-inu'>Ibnu Muhthar</a> ,
                            <br /> a reflection of my journey in learning, growth, and creativity. I believe that continuous learning is the key to unlocking our full potential, and I am passionate about creating projects that are not only practical but also meaningful.
                            <br />
                            I’m always eager to connect with like-minded individuals who are passionate about learning and creating. If you find value in what I’m doing, I’d love for you to follow my journey and contribute your own ideas or feedback. Together, we can build something truly impactful.
                        </p>
                    </AnimatedSection>

                </div>
            </section>
        </main >
    )
}

export default About
