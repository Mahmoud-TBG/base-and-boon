import styles from './Hero.module.scss'
import bsImage from '../../../public/assets/media/temp/baseandboon.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className={styles.section}>
            {/* <h1 className={styles.title}>Welcome to Next.js</h1> */}
            {/* <Image src={bsImage} alt="logo" /> */}
            <div className={styles.sectionMedia} >
                <video autoPlay playsInline muted loop>
                    <source src="/assets/media/temp/video.mp4" type="video/mp4" />
                    Your browser does not support HTML video.

                </video>
            </div>
            <h1 className={styles.title}>the experience of beauty</h1>
            <div className={styles.arrow}>
                <svg width="16" height="68" viewBox="0 0 16 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 59L8 66L15 59" stroke="white" strokeWidth="2" />
                    <line x1="8" y1="66" x2="8" y2="4.37114e-08" stroke="white" strokeWidth="2" />
                </svg>

            </div>
        </div>
    )
}

export default Hero
