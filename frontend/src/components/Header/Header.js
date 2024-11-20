import Image from 'next/image'
import styles from './Header.module.scss'
import logo from '../../../public/assets/media/site/Logo.svg'
const Header = () => {
    return (
        <header className={styles.section}>
            <section className={styles.sectionContainer} >

                <ul className={styles.headerMenu}>
                    <li>Beauty services</li>
                    <li>b&b studio</li>
                    <li>tool sharpening</li>
                    <li>about</li>
                </ul>

                <div className={styles.sectionLogo}>
                    <Image src={logo} alt="logo" fill />
                </div>
                <div className={styles.headerButton} >

                    <button className={styles.cta} >book a care now</button>
                </div>

            </section>

        </header>
    )
}

export default Header
