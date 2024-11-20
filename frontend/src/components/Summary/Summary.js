import styles from './Summary.module.scss'
const Summary = () => {
    return (
        <section className={styles.section} >
            <div className={styles.sectionContainer}>
                <div className={styles.cards} >
                    <div className={styles.card} >
                        <div className={styles.cardImage} >
                            <img src="/assets/media/site/4.png" loading="lazy" alt="logo" />

                        </div>
                        <div className={styles.cardContent} >
                            <h4 className={styles.cardTitle} >BOOK A TREATMENT</h4>
                            <p className={styles.cardDescription} >Book a beauty treatment online across three Base & Boon locations: Alaqiq Plaza, the Diplomatic Quarter, and Aljadidah.</p>
                        </div>
                        <div className={styles.cardCta} >
                            <button> BOOK A TREATMENT  </button>
                            <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59 15L66 8L59 1" stroke="#D60071" strokeWidth="2" />
                                <line x1="66" y1="8" x2="8.74228e-08" y2="8.00001" stroke="#D60071" strokeWidth="2" />
                            </svg>

                        </div>
                    </div>

                    <div className={styles.card} >
                        <div className={styles.cardImage} >
                            <img src="/assets/media/site/5.png" loading="lazy" alt="logo" />
                        </div>
                        <div className={styles.cardContent} >
                            <h4 className={styles.cardTitle} >BOOK A TREATMENT</h4>
                            <p className={styles.cardDescription} >Tool Sharpening Service for professionals who leverage tools to deliver a service - from culinary experts to landscaping artists and salon workers. Sharpen professional equipment with Base & Boon’s collection and delivery tool sharpening service in Riyadh.</p>
                        </div>
                        <div className={styles.cardCta} >
                            <button> BOOK A TREATMENT  </button>
                            <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59 15L66 8L59 1" stroke="#D60071" strokeWidth="2" />
                                <line x1="66" y1="8" x2="8.74228e-08" y2="8.00001" stroke="#D60071" strokeWidth="2" />
                            </svg>

                        </div>
                    </div>
                    <div className={styles.card} >
                        <div className={styles.cardImage} >
                            <img src="/assets/media/site/6.png" loading="lazy" alt="logo" />

                        </div>
                        <div className={styles.cardContent} >
                            <h4 className={styles.cardTitle} >BOOK A TREATMENT</h4>
                            <p className={styles.cardDescription} >Base & Boon Studio is a fixed space to house freelance beauty providers and their treatments for one week, one month, or one year. Freelancers need only bring their tools and clients while Base & Boon provides the rest</p>
                        </div>
                        <div className={styles.cardCta} >
                            <button> BOOK A TREATMENT  </button>
                            <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59 15L66 8L59 1" stroke="#D60071" strokeWidth="2" />
                                <line x1="66" y1="8" x2="8.74228e-08" y2="8.00001" stroke="#D60071" strokeWidth="2" />
                            </svg>

                        </div>
                    </div>

                </div>


            </div >

        </section >
    )
}

export default Summary
