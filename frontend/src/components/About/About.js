import styles from './About.module.scss'

const About = () => {
    return (
        <section className={styles.section} >

            <div className={styles.sectionContainer} >

                <div className={styles.sectionCover} >
                    <img className="cover" src="/assets/media/site/7.jpg" />
                    <img className={styles.andimg} src="/assets/media/site/&.png" />
                </div>

                <div className={styles.label}>
                    <p className={styles.labelText} >
                        ABOUT BASE & BOON
                    </p>

                    <span className={styles.labelLine}></span>
                </div>

                <div className={styles.sectionContent} >

                    <div className={styles.title} >
                        <h3 className="" >Refined Beauty With Base & Boon</h3>
                    </div>

                    <div className={styles.sectionInfo} >
                        <div className={styles.description} >
                            space in which clients could step into and experience luxury from beginning to end.<br />

                            From Base & Boon’s exceptionally
                            experienced and skilled team over three
                            locations to their contemporary design,<br /> <br />
                            Base & Boon delivers on their promise;
                            providing splendour for each and every
                            individual.<br /> <br />

                            Cutting-edge technology is combined
                            with an ingrained passion for aesthetics
                            to allow Base & Boon to disrupt the
                            beauty space, encouraging clients to
                            express themselves in a warm and
                            modern setting.
                        </div>
                    </div>
                </div>

                <div className={styles.sectionCTA} >

                    <button className={styles.ctaText} >Learn more about us</button>

                    <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59 15L66 8L59 1" stroke="black" strokeWidth="2" />
                        <line x1="66" y1="8" x2="8.74228e-08" y2="8.00001" stroke="black" strokeWidth="2" />
                    </svg>

                </div>

            </div>

        </section >
    )
}

export default About
