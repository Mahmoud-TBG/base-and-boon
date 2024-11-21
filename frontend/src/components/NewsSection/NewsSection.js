import styles from './NewsSection.module.scss'
const NewsSection = () => {
    return (
        <section className={styles.section} >
            <div className={styles.sectionContainer} >


                <div className={styles.label}>
                    <p className={styles.labelText} >
                        our services
                    </p>

                    <span className={styles.labelLine}></span>
                </div>

                <div className={styles.sectionHeader}>
                    <h2 className={styles.headerTitle} >
                        Our latest news <br /> and press releases
                    </h2>
                    <div className={styles.headerCTA} >

                        <button className={styles.ctaText} >Learn more about us</button>

                        <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59 15L66 8L59 1" stroke="black" strokeWidth="2" />
                            <line x1="66" y1="8" x2="8.74228e-08" y2="8.00001" stroke="black" strokeWidth="2" />
                        </svg>

                    </div>

                </div>
                <div className={styles.cards} >

                    <div className={styles.card} >
                        <div className={styles.cardImage} >
                            <img src="/assets/media/site/news1jpg.jpg" loading="lazy" alt="logo" />
                        </div>
                        <div className={styles.content} >
                            <p className={styles.cardDate} >March 3rd 2023</p>
                            <h4 className={styles.title} >Lorem ipsum dolor sit amet, consetetur</h4>
                            <p className={styles.description} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59 15L66 8L59 1" stroke="black" strokeWidth="2" />
                                <line x1="66" y1="8" x2="8.74228e-08" y2="8.00001" stroke="black" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.card} >
                        <div className={styles.cardImage} >
                            <img src="/assets/media/site/news2.jpg" loading="lazy" alt="logo" />
                        </div>
                        <div className={styles.content} >
                            <p className={styles.cardDate} >March 3rd 2023</p>
                            <h4 className={styles.title} >Lorem ipsum dolor sit amet, consetetur</h4>
                            <p className={styles.description} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59 15L66 8L59 1" stroke="black" strokeWidth="2" />
                                <line x1="66" y1="8" x2="8.74228e-08" y2="8.00001" stroke="black" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.card} >
                        <div className={styles.cardImage} >
                            <img src="/assets/media/site/news3.jpg" loading="lazy" alt="logo" />
                        </div>
                        <div className={styles.content} >
                            <p className={styles.cardDate} >March 3rd 2023</p>
                            <h4 className={styles.title} >Lorem ipsum dolor sit amet, consetetur</h4>
                            <p className={styles.description} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                            <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59 15L66 8L59 1" stroke="black" strokeWidth="2" />
                                <line x1="66" y1="8" x2="8.74228e-08" y2="8.00001" stroke="black" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default NewsSection
