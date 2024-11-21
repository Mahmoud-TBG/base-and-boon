import styles from './ServiceSection.module.scss'


const data = [
    {
        id: 1,
        title: 'Manicure',
        image: '/assets/media/site/7.png',
    },
    {
        id: 2,
        title: 'Pedicure',
        image: '/assets/media/site/8.png',
    },
    {
        id: 3,
        title: 'Nail Extensions',
        image: '/assets/media/site/9.png',
    },
    {
        id: 4,
        title: 'Nail Art',
        image: '/assets/media/site/10.png',
    },
    {
        id: 5,
        title: 'Threading',
        image: '/assets/media/site/11.png',
    },
    {
        id: 6,
        title: 'Treatments',
        image: '/assets/media/site/12.png',
    },
]
const ServiceSection = () => {
    return (
        <section className={styles.section} >
            <div className={styles.sectionContainer}>

                <div className={styles.label}>
                    <p className={styles.labelText} >
                        our services
                    </p>

                    <span className={styles.labelLine}></span>
                </div>

                <div className={styles.sectionContent}>
                    {
                        data && data.map((item, index) => {
                            return (
                                <div className={styles.service} key={index}>
                                    <div className={styles.serviceContent}>
                                        <span className={styles.serviceName}><h6>{item.title}</h6></span>
                                        <span className={styles.serviceImage}><img src={item.image} /></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default ServiceSection