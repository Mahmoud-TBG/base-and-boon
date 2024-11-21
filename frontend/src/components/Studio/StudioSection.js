import styles from './StudioSection.module.scss'

const StudioSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionContainer}>
                <div className={styles.watermark}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="180" viewBox="0 0 1512 180" fill="none">
                        <g opacity="0.05">
                            <path d="M238.345 80.9877H276.868V175.185H367.99V80.9877H406.513V4.81481H238.345V80.9877Z" fill="white" />
                            <path d="M928.675 4.81481H830.392V175.062H930.404C999.918 175.062 1034 145.926 1034 88.0247C1034 42.8395 1009.43 4.81481 928.675 4.81481Z" fill="white" />
                            <path d="M1238.34 4.81481H1147.1V175.062H1238.34V4.81481Z" fill="white" />
                            <path d="M1460.22 0C1387.74 0 1351.44 41.8518 1351.44 90.7407C1351.44 139.63 1387.74 180 1460.22 180C1532.7 180 1569 138.148 1569 89.2593C1569 40.3704 1532.7 0 1460.22 0Z" fill="white" />
                            <path d="M624.688 4.81481H515.909V101.852C515.909 149.259 554.803 179.877 615.674 179.877C660.741 179.877 694.079 162.716 708.278 134.568C713.094 124.815 715.81 113.827 715.81 101.728V4.81481H624.564H624.688Z" fill="white" />
                            <path d="M99.9326 76.0494L126.603 21.9753C104.501 8.64198 73.8801 0.123457 40.7897 0.123457C-14.8961 0 -47.9866 21.8519 -47.9866 58.642C-47.9866 74.0741 -41.566 84.1975 -32.0587 91.358L-46.258 129.753L-57 157.654C-37.2445 170.741 6.95839 180 40.2958 180C92.8947 180 128.825 156.42 128.825 120.123C128.825 95.1852 115.984 82.716 99.9326 76.0494Z" fill="white" />
                        </g>
                    </svg>
                </div>
                <div className={styles.sectionContent}>
                    <div className={styles.studioInfo} >

                        <div className={styles.logo}  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="132" height="93" viewBox="0 0 132 93" fill="none">
                                <path d="M28.95 26.75H34.09L35.26 34.26H40.42L34.96 1.56H28.16L22.62 34.26H27.75L28.95 26.75ZM31.53 9.06L33.36 21.95H29.7L31.53 9.06Z" fill="black" />
                                <path d="M49.65 33.24C50.92 34.19 52.52 34.67 54.45 34.67C55.49 34.67 56.4 34.55 57.19 34.29C58.65 33.85 59.78 33.07 60.58 31.98C61.8 30.36 62.39 28.42 62.35 26.13C62.33 25.2 62.08 24.15 61.61 22.99C61.42 22.51 61.17 22 60.86 21.45C60.19 20.27 59.25 19.07 58.04 17.85C57.67 17.47 56.91 16.8 55.76 15.84C54.79 15.04 54.06 14.35 53.57 13.76C52.28 12.21 51.63 10.68 51.63 9.19C51.63 8.24 51.82 7.43 52.2 6.79C52.68 5.99 53.37 5.59 54.26 5.59C55.11 5.59 55.76 5.86 56.21 6.41C56.84 7.15 57.22 8.2 57.36 9.53L62.09 8.67C61.96 7.25 61.59 5.99 61 4.9C60.4 3.8 59.62 2.95 58.65 2.34C57.4 1.55 55.89 1.16 54.13 1.16C52.37 1.16 50.77 1.62 49.54 2.54C47.54 4.07 46.54 6.33 46.54 9.3C46.54 10.95 46.91 12.48 47.63 13.89C48.3 15.15 49.45 16.56 51.09 18.14C53.04 19.98 54.5 21.36 55.48 22.28C56.71 23.62 57.32 24.98 57.32 26.35C57.32 27.28 57.15 28 56.82 28.52C56.17 29.53 55.31 30.06 54.24 30.1C53.47 30.14 52.8 29.83 52.21 29.18C51.41 28.33 50.9 26.96 50.69 25.06L46.01 25.38C46.11 27.14 46.47 28.69 47.09 30.04C47.71 31.38 48.55 32.45 49.6 33.24H49.65Z" fill="black" />
                                <path d="M84.13 29.33H75.02V20.38H81.68V15.45H75.02V6.49H84.13V1.56H70.09V34.26H84.13V29.33Z" fill="black" />
                                <path d="M41.9 57.94L37.43 56.99C36.99 59.03 36.36 60.95 35.55 62.74C34.17 60.82 32.94 58.75 31.86 56.55C32.67 55.47 33.56 54.32 34.53 53.09L35.6 51.73C36.97 50.02 37.67 48.18 37.67 46.22C37.67 45.14 37.43 44.15 36.96 43.23C36.36 42.08 35.51 41.18 34.4 40.53C33.29 39.88 32.06 39.55 30.73 39.55C29.53 39.55 28.44 39.81 27.45 40.34C26.19 40.96 25.24 41.9 24.58 43.14C23.93 44.32 23.61 45.62 23.61 47.03C23.61 47.81 23.69 48.57 23.84 49.33C23.98 50.02 24.23 50.8 24.57 51.66C24.74 52.1 25.07 52.84 25.56 53.89L26.58 56.17C26.14 56.77 25.7 57.42 25.27 58.1C24.49 59.37 24.03 60.14 23.89 60.42C23.08 62.2 22.67 63.9 22.67 65.53C22.67 67.16 23.09 68.69 23.94 69.99C25.29 72.06 27.26 73.09 29.84 73.09C32.06 73.09 34.15 72.09 36.1 70.08C38.13 71.81 40.1 72.68 42.02 72.68V68.2C41.07 68.2 39.97 67.63 38.7 66.5C40.04 64.18 41.1 61.33 41.89 57.95L41.9 57.94ZM28.72 44.56C29.21 43.68 29.88 43.24 30.73 43.24C31.72 43.24 32.43 43.76 32.86 44.82C33.04 45.15 33.12 45.63 33.12 46.25C33.12 47.15 32.74 48.09 31.97 49.07L30.93 50.4L30.26 51.24C30.06 51.49 29.85 51.75 29.63 52.01C28.63 49.68 28.13 48.01 28.13 47.02C28.13 46.1 28.32 45.28 28.71 44.56H28.72ZM29.85 68.68C28.98 68.68 28.31 68.35 27.84 67.69C27.43 67.13 27.23 66.41 27.23 65.52C27.23 64.52 27.49 63.45 28.02 62.29C28.33 61.74 28.64 61.22 28.95 60.73C30.31 63.13 31.66 65.17 33 66.84C31.88 68.06 30.83 68.67 29.85 68.67V68.68Z" fill="black" />
                                <path d="M62.82 58.05C62.06 56.82 61.13 55.99 60.04 55.58C60.69 55.28 61.27 54.86 61.76 54.3C62.92 52.98 63.5 51.22 63.5 49.03C63.5 47.69 63.35 46.53 63.03 45.55C62.45 43.73 61.5 42.39 60.16 41.52C58.59 40.49 56.84 39.97 54.89 39.97H47.52V72.68H56.65C57.88 72.68 59.13 72.3 60.38 71.54C61.49 70.86 62.35 69.95 62.96 68.83C63.73 67.38 64.12 65.62 64.12 63.56C64.12 62.72 64.06 61.97 63.94 61.29C63.7 59.97 63.32 58.89 62.81 58.06L62.82 58.05ZM52.84 44.98H54.9C55.88 44.98 56.67 45.3 57.28 45.94C57.94 46.63 58.27 47.67 58.27 49.02C58.27 49.84 58.17 50.52 57.98 51.08C57.45 52.58 56.43 53.33 54.9 53.33H52.84V44.97V44.98ZM58.38 65.22C57.74 66.95 56.58 67.81 54.9 67.81H52.84V58.05H54.9C56.12 58.05 57.04 58.43 57.66 59.2C58.36 60.04 58.72 61.37 58.72 63.2C58.72 63.96 58.61 64.64 58.38 65.22Z" fill="black" />
                                <path d="M77.66 39.58C75.53 39.58 73.7 40.34 72.17 41.87C70.64 43.4 69.88 45.24 69.88 47.42V65.26C69.88 67.43 70.64 69.28 72.15 70.8C73.66 72.33 75.5 73.09 77.66 73.09C79.82 73.09 81.67 72.33 83.2 70.81C84.73 69.29 85.49 67.44 85.49 65.26V47.42C85.49 45.25 84.73 43.41 83.2 41.88C81.67 40.35 79.83 39.58 77.65 39.58H77.66ZM80.35 65.22C80.35 66 80.08 66.66 79.53 67.21C78.99 67.76 78.32 68.03 77.53 68.03C76.74 68.03 76.09 67.76 75.53 67.21C74.97 66.66 74.69 65.99 74.69 65.22V47.32C74.69 46.53 74.97 45.86 75.53 45.33C76.08 44.78 76.75 44.51 77.53 44.51C78.31 44.51 78.99 44.78 79.53 45.33C80.08 45.87 80.35 46.54 80.35 47.32V65.22Z" fill="black" />
                                <path d="M99.27 1.16C97.14 1.16 95.31 1.92 93.79 3.45C92.26 4.97 91.49 6.82 91.49 9V65.27C91.49 67.44 92.25 69.29 93.76 70.81C95.27 72.34 97.11 73.1 99.27 73.1C101.43 73.1 103.28 72.34 104.81 70.82C106.34 69.3 107.1 67.45 107.1 65.27V8.99C107.1 6.83 106.34 4.98 104.81 3.45C103.29 1.92 101.44 1.16 99.26 1.16H99.27ZM101.96 65.23C101.96 66.01 101.69 66.67 101.15 67.22C100.6 67.77 99.94 68.04 99.15 68.04C98.36 68.04 97.71 67.77 97.15 67.22C96.59 66.67 96.32 66 96.32 65.23V8.9C96.32 8.11 96.6 7.44 97.15 6.9C97.71 6.36 98.37 6.08 99.15 6.08C99.93 6.08 100.6 6.36 101.15 6.9C101.69 7.44 101.96 8.11 101.96 8.9V65.23Z" fill="black" />
                                <path d="M126.6 1.54V48.94L118.94 1.54H113.4V72.71H118.33V20.45L126.02 72.71H131.54V1.54H126.6Z" fill="black" />
                                <path d="M7.67 67.84H5.57V18.4H7.67C8.91 18.4 9.85 18.79 10.49 19.57C11.2 20.41 11.56 21.75 11.56 23.58V63.22C11.56 63.96 11.44 64.63 11.22 65.2C10.56 66.96 9.38 67.83 7.67 67.83M5.57 5.09H7.67C8.67 5.09 9.48 5.42 10.1 6.08C10.77 6.79 11.1 7.83 11.1 9.22C11.1 10.05 11 10.75 10.81 11.32C10.28 12.84 9.23 13.61 7.67 13.61H5.57V5.09ZM17.07 23.56C17.05 22.89 17 22.26 16.9 21.7C16.65 20.36 16.28 19.26 15.75 18.41C14.97 17.16 14.03 16.32 12.92 15.89C13.59 15.58 14.17 15.16 14.67 14.59C15.85 13.24 16.45 11.45 16.45 9.22C16.45 7.86 16.29 6.68 15.97 5.68C15.39 3.83 14.41 2.45 13.05 1.57C11.45 0.52 9.66 0 7.68 0H0.17V72.82H9.47C10.73 72.82 11.99 72.43 13.27 71.65C14.41 70.96 15.28 70.04 15.9 68.89C16.7 67.42 17.09 65.63 17.09 63.52V23.56H17.07Z" fill="black" />
                                <path d="M23.92 84.93H27.04V92.56H34.42V84.93H37.54V78.77H23.92V84.93Z" fill="black" />
                                <path d="M79.83 78.77H71.87V92.56H79.97C85.6 92.56 88.36 90.2 88.36 85.51C88.36 81.85 86.37 78.77 79.83 78.77Z" fill="black" />
                                <path d="M104.91 78.77H97.52V92.56H104.91V78.77Z" fill="black" />
                                <path d="M122.88 78.37C117.01 78.37 114.07 81.76 114.07 85.72C114.07 89.68 117.01 92.95 122.88 92.95C128.75 92.95 131.69 89.56 131.69 85.6C131.69 81.64 128.75 78.37 122.88 78.37Z" fill="black" />
                                <path d="M55.21 78.77H46.4V86.63C46.4 90.47 49.55 92.95 54.48 92.95C58.13 92.95 60.83 91.56 61.98 89.28C62.37 88.49 62.59 87.6 62.59 86.62V78.76H55.2L55.21 78.77Z" fill="black" />
                                <path d="M12.71 84.53L14.87 80.15C13.08 79.07 10.6 78.38 7.92 78.38C3.41 78.38 0.73 80.15 0.73 83.13C0.73 84.38 1.25 85.2 2.02 85.78L0.87 88.89L0 91.15C1.6 92.21 5.18 92.96 7.88 92.96C12.14 92.96 15.05 91.05 15.05 88.11C15.05 86.09 14.01 85.08 12.71 84.54V84.53Z" fill="black" />
                            </svg>
                        </div>

                        <div className={styles.studioInfoContent} >
                            <p className={styles.studioIntroduction}>
                                Base & Boon Studio is a contemporary salon-space
                                for skilled freelance beauticians.
                                With eleven skilfully designed spaces available that
                                have been built and optimised for freelance success,
                                the pathway to growth begins at Base & Boon
                                Studio.
                            </p>
                            <div className={styles.cta} >

                                <button className={styles.lastTitleText} >Explore our story</button>

                                <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M59.5 15L66.5 8L59.5 1" stroke="white" strokeWidth="2" />
                                    <line x1="66.5" y1="8" x2="0.5" y2="8.00001" stroke="white" strokeWidth="2" />
                                </svg>


                            </div>
                        </div>

                    </div>

                    <div className={styles.images}  >
                        <img src='/assets/media/site/studio.jpg' />
                        <img className={styles.bImage} src='/assets/media/site/B.png' />
                    </div>

                </div>
                <div className={styles.cards} >
                    <div className={styles.card} >
                        <img className={styles.cardImage} src='/assets/media/site/tools.jpg' />

                        <div className={styles.cardInfo} >

                            <div className={styles.label}>
                                <p className={styles.labelText} >
                                    Tool sharpening
                                </p>
                                <span className={styles.labelLine}></span>
                            </div>
                            <div className={styles.cardInfoContent} >

                                <p className={styles.cardTitle} >Base & Boon’s Tool Sharpening Service</p>

                                <p className={styles.cardDescription} >Blunt tools after repetitive and excessive use are problematic for a number of service providers.
                                    Replacing substandard tools is costly for both time and finances. Instead, make use of Base & Boon’s tool sharpening service.
                                    Tools are collected from your desired
                                    location, and sharpened and sanitized by
                                    Base & Boon before being safely
                                    returned.</p>
                                <div className={styles.cardCta} >

                                    <button className={styles.lastTitleText} >Explore our story</button>

                                    <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M59.5 15L66.5 8L59.5 1" stroke="white" strokeWidth="2" />
                                        <line x1="66.5" y1="8" x2="0.5" y2="8.00001" stroke="white" strokeWidth="2" />
                                    </svg>


                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.card} >
                        <img className={styles.cardImage} src='/assets/media/site/founders.jpg' />
                        <div className={styles.cardInfo} >
                            <div className={styles.label}>
                                <p className={styles.labelText} >
                                    Founders
                                </p>
                                <span className={styles.labelLine}></span>
                            </div>
                            <div className={styles.cardInfoContent} >
                                <p className={styles.cardTitle} > Meet the founders</p>
                                <p className={styles.cardDescription}>Co-founders Mshael Alessa and Hind
                                    Alajlan work together to create the
                                    perfect concoction of edgy and opulencefor their nail salons: Base & Boon.
                                    Since its conception in 2019, the
                                    founders have collaborated with leading
                                    brands such as Fendi, Sayidaty
                                    Magazine and Keys Soul Care (to name
                                    only a few.) With expansion having already taken
                                    place across three locations alongside
                                    adding a space for freelance beauticians,</p>
                                <div className={styles.cardCta} >

                                    <button className={styles.lastTitleText} >Explore our story</button>

                                    <svg width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M59.5 15L66.5 8L59.5 1" stroke="white" strokeWidth="2" />
                                        <line x1="66.5" y1="8" x2="0.5" y2="8.00001" stroke="white" strokeWidth="2" />
                                    </svg>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default StudioSection
