import { AnimatedSection } from '../../../lib/AnimatedSection'
import styles from './Contribute.module.css'

function Contribute() {
    return (
        <main>
            <section className={styles.text}>
                <AnimatedSection direction="top">

                    <h1>Contribute to Our Website</h1>
                    <p>
                        Welcome to the Contribute page! Your involvement can help make this platform an even better resource for book lovers everywhere. Whether you&apos;re a developer, an avid reader, or someone with a keen eye for detail, your contributions are invaluable. Here’s how you can get involved:
                    </p>
                </AnimatedSection>

                <h1>Ways to Contribute</h1>
                <AnimatedSection direction="left">
                    <h3>1. Provide Feedback</h3>
                    <p>
                        Your feedback helps shape the future of this platform. If you have suggestions for improving the user experience, design, or content, I’d love to hear them!
                    </p>
                </AnimatedSection>
                <AnimatedSection direction="right">

                    <h3>2. Suggest Features</h3>
                    <p>
                        Do you have an idea for a new feature or tool that would make this site more useful? Share your thoughts, and together we can explore how to bring them to life.
                    </p>
                </AnimatedSection>
                <AnimatedSection direction="left">

                    <h3>3. Report Bugs</h3>
                    <p>
                        Noticed something that isn’t working quite right? Please report any bugs or technical issues you encounter. Your vigilance ensures that the site remains functional and enjoyable for everyone.
                    </p>
                </AnimatedSection>
                <AnimatedSection direction="right">

                    <h3>4. Share Resources</h3>
                    <p>
                        If you’ve come across a great book, article, or tool that you think would benefit other readers, don’t hesitate to share it. Let’s build a community where we can all learn and grow together.
                    </p>
                </AnimatedSection>
                <AnimatedSection direction="left">

                    <h3>5. Collaborate on Projects</h3>
                    <p>
                        Interested in working on a project together? I’m always open to collaborations that can bring new and exciting features to this platform. Whether it’s a coding project, a content initiative, or something entirely new, let’s discuss how we can create something amazing.
                    </p>
                </AnimatedSection>

                <hr />


                <h2>How to Contribute</h2>

                <AnimatedSection direction="left">
                    <h3>Email <i className="fa-regular fa-envelope"></i></h3>
                    <p>
                        Feel free to reach out through the <a href="mailto:ibnumuhthar9@gmail.com">email</a>. Whether it’s feedback, a suggestion, or an idea for collaboration, I’m eager to hear from you.
                    </p>
                </AnimatedSection>

                <AnimatedSection direction="right">

                    <h3>GitHub <i className="fa-brands fa-github"></i></h3>
                    <p>
                        If you&apos;re a developer and would like to contribute code or documentation, you can check out the <a href="#">GitHub</a> repository. Your contributions to the codebase are welcome and appreciated! Feel free to redesign too :)
                    </p>
                </AnimatedSection>

                <hr />


                {/* <h2>Acknowledgments</h2>
                <p>
                    Thank you for taking the time to contribute to this platform. Every suggestion, idea, and piece of feedback helps make this community stronger and more vibrant. Your support is what makes this journey possible.
                </p>

                <hr /> */}

                <h2>Community Guidelines</h2>
                <p>
                    Please ensure that all contributions are respectful and constructive. Together, we can maintain a positive and welcoming environment for all members of the community.
                </p>

                <p>I’m excited to see how we can build and improve this platform together. Thank you for being a part of this journey!</p>
            </section>
        </main>
    )
}

export default Contribute
