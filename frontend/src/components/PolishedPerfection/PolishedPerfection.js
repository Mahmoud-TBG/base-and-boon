import Image from 'next/image'
import styles from './PolishedPerfection.module.scss'
const PolishedPerfection = () => {
    return (
        <section className={styles.container} >

            <div className={styles.firstTitle} >
                <p className={styles.firstTitleText} >Polished Perfection</p>
                <div className={styles.firstTitleLine} ></div>
            </div>

            <div className={styles.content} >
                <p className={styles.text} >Enhancing Beauty</p>
                <div className={styles.image}>
                    <img src="/assets/media/site/1.png" loading="lazy" alt="logo" />
                </div>
            </div>

            <div className={styles.content} >
                <div className={styles.image}>
                    <img src="/assets/media/site/2.png" loading="lazy" alt="logo" />
                </div>
                <p className={styles.text} >SKill, and creativity,</p>
            </div>

            <div className={styles.content} >
                <div className={styles.image}>
                    <img src="/assets/media/site/3.png" loading="lazy" alt="logo" />
                </div>
                <p className={styles.text} >Enhancing Beauty</p>
            </div>

            <div className={styles.lastTitle} >

                <p className={styles.lastTitleText} >Polished Perfection</p>

                <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59 15L66 8L59 1" stroke="black" strokeWidth="2" />
                    <line x1="66" y1="8" x2="8.74228e-08" y2="8.00001" stroke="black" strokeWidth="2" />
                </svg>

            </div>
        </section>
    )
}

export default PolishedPerfection
