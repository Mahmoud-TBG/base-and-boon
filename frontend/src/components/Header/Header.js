import Image from 'next/image'
import styles from './Header.module.scss'
import logo from '../../../public/assets/media/site/Logo.svg'
const Header = () => {
    return (
        <header className={styles.container}>
            <section className={styles.section} >

                <ul className={styles.left}>
                    <li>Beauty services</li>
                    <li>b&b studio</li>
                    <li>tool sharpening</li>
                    <li>about</li>
                </ul>

                <div className={styles.logo}>
                    <Image src={logo} alt="logo" fill />
                </div>
                <div className={styles.right} >

                    <button className={styles.headerButton} >book a care now</button>
                </div>

            </section>

        </header>
    )
}

export default Header
