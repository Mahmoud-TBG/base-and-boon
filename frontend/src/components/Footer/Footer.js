import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={styles.section} >
            <div className={styles.sectionContainer} >

                <div className={styles.topFooter}>
                    <div className={styles.leftRow} >
                        <div className={styles.left} >
                            <h6 className={styles.branchName} >Riyadh </h6>
                            <di v className={styles.branchLocations} >
                                <div className={styles.firstLocation} >
                                    <p className={styles.locationName} >Location 1 <span>(female only)</span> </p>
                                    <p className={styles.locationAddress} >Alaqiq Plaza 2162 Prince Muhammad<br />  Ibn Abdulaziz Rd Riyadh, SA 13411</p>
                                    <div className={styles.openingTimes} >
                                        <p className={styles.openingTimeLabel} >OPENING TIMES</p>
                                        <p className={styles.openingTime} >Sat to Thur | 12PM - 9PM<br />
                                            Fri | Closed</p>
                                    </div>
                                </div>
                                <div className={styles.secondLocation} >
                                    <p className={styles.locationName} >Location 2  </p>
                                    <p className={styles.locationAddress} >Alaqiq Plaza 2162 Prince Muhammad <br />Ibn Abdulaziz Rd Riyadh, SA 13411</p>
                                    <div className={styles.openingTimes} >
                                        <p className={styles.openingTimeLabel} >OPENING TIMES</p>
                                        <p className={styles.openingTime} >Sat to Thur | 12PM - 9PM<br />
                                            Fri | Closed</p>
                                    </div>
                                </div>
                            </di>
                        </div>
                        <div className={styles.right} >
                            <h6 className={styles.branchName} >AlULA </h6>
                            <di v className={styles.branchLocations} >
                                <div className={styles.firstLocation} >
                                    <p className={styles.locationName} >Location  </p>
                                    <p className={styles.locationAddress} >AlJadidah District, AlUla, SA 43523</p>
                                    <div className={styles.openingTimes} >
                                        <p className={styles.openingTimeLabel} >OPENING TIMES</p>
                                        <p className={styles.openingTime} >Tue to Sun | 12PM - 9PM<br />
                                            Mon | Closed</p>
                                    </div>
                                </div>

                            </di>
                        </div>
                    </div>

                    <div className={styles.contact} >
                        <h6 className={styles.contactTitle} >Contact</h6>
                        <div className={styles.footerInfo} >
                            <a href="tel:+966 11 2020285" className={styles.footerPhone} >+966 11 2020285</a>
                            <a href="mailto:HI@BASEANDBOON.COM" className={styles.footerEmail} >HI@BASEANDBOON.COM</a>
                            <div className={styles.footerMedia} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M14.25 2.25H3.75C2.92125 2.25 2.25 2.92125 2.25 3.75V14.25C2.25 15.0787 2.92125 15.75 3.75 15.75H9.46575V10.5292H7.7085V8.4855H9.46575V6.98175C9.46575 5.23875 10.5315 4.2885 12.087 4.2885C12.6112 4.287 13.1348 4.314 13.656 4.36725V6.18975H12.585C11.7375 6.18975 11.5725 6.59025 11.5725 7.18125V8.4825H13.5975L13.3342 10.5262H11.5605V15.75H14.25C15.0787 15.75 15.75 15.0787 15.75 14.25V3.75C15.75 2.92125 15.0787 2.25 14.25 2.25Z" fill="#D9D9D9" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M6 2.25C3.92925 2.25 2.25 3.92925 2.25 6V12C2.25 14.0708 3.92925 15.75 6 15.75H12C14.0708 15.75 15.75 14.0708 15.75 12V6C15.75 3.92925 14.0708 2.25 12 2.25H6ZM13.5 3.75C13.914 3.75 14.25 4.086 14.25 4.5C14.25 4.914 13.914 5.25 13.5 5.25C13.086 5.25 12.75 4.914 12.75 4.5C12.75 4.086 13.086 3.75 13.5 3.75ZM9 5.25C11.0708 5.25 12.75 6.92925 12.75 9C12.75 11.0708 11.0708 12.75 9 12.75C6.92925 12.75 5.25 11.0708 5.25 9C5.25 6.92925 6.92925 5.25 9 5.25ZM9 6.75C8.40326 6.75 7.83097 6.98705 7.40901 7.40901C6.98705 7.83097 6.75 8.40326 6.75 9C6.75 9.59674 6.98705 10.169 7.40901 10.591C7.83097 11.0129 8.40326 11.25 9 11.25C9.59674 11.25 10.169 11.0129 10.591 10.591C11.0129 10.169 11.25 9.59674 11.25 9C11.25 8.40326 11.0129 7.83097 10.591 7.40901C10.169 6.98705 9.59674 6.75 9 6.75Z" fill="#D9D9D9" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M13.5056 5.13717C13.4122 5.09008 13.3212 5.03845 13.2331 4.98249C12.9767 4.81725 12.7417 4.62255 12.533 4.40258C12.011 3.82014 11.816 3.22926 11.7442 2.81557H11.7471C11.6871 2.47218 11.7119 2.25 11.7156 2.25H9.33777V11.2152C9.33777 11.3356 9.33777 11.4546 9.33258 11.5721C9.33258 11.5868 9.33114 11.6003 9.33027 11.616C9.33027 11.6225 9.33027 11.6292 9.32883 11.636C9.32883 11.6377 9.32883 11.6393 9.32883 11.641C9.30376 11.9627 9.19801 12.2734 9.02087 12.5459C8.84373 12.8184 8.60064 13.0442 8.31297 13.2036C8.01315 13.3699 7.67406 13.4571 7.32912 13.4567C6.22125 13.4567 5.32336 12.5759 5.32336 11.488C5.32336 10.4002 6.22125 9.51939 7.32912 9.51939C7.53884 9.5192 7.74726 9.55137 7.94666 9.61473L7.94954 7.25403C7.34423 7.17779 6.72927 7.2247 6.14348 7.39179C5.55769 7.55889 5.01377 7.84254 4.54603 8.22486C4.13619 8.57207 3.79163 8.98636 3.52786 9.44908C3.42749 9.61782 3.04878 10.2959 3.00292 11.3964C2.97407 12.021 3.16646 12.6681 3.25818 12.9356V12.9412C3.31587 13.0987 3.5394 13.6361 3.90369 14.0892C4.19744 14.4526 4.5445 14.7719 4.93369 15.0367V15.031L4.93946 15.0367C6.09059 15.7994 7.36691 15.7493 7.36691 15.7493C7.58785 15.7406 8.32797 15.7493 9.16846 15.3609C10.1007 14.9304 10.6314 14.2889 10.6314 14.2889C10.9704 13.9056 11.24 13.4687 11.4286 12.9972C11.6438 12.4456 11.7156 11.7842 11.7156 11.5198V6.76356C11.7445 6.78043 12.1286 7.0282 12.1286 7.0282C12.1286 7.0282 12.6821 7.37412 13.5457 7.59939C14.1653 7.75969 15 7.79344 15 7.79344V5.49181C14.7075 5.52274 14.1136 5.43275 13.5056 5.13717Z" fill="#D9D9D9" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.footerMenu} >
                            <ul className={styles.footerMenuList} >

                                <li className={styles.footerMenuItem} >About</li>
                                <li className={styles.footerMenuItem} >Beauty services</li>
                                <li className={styles.footerMenuItem} >b&b studio</li>
                                <li className={styles.footerMenuItem} >tool sharpening</li>
                            </ul>
                            <ul className={styles.footerMenuList} >

                                <li className={styles.footerMenuItem} >news & press</li>
                                <li className={styles.footerMenuItem} >contact</li>
                                <li className={styles.footerMenuItem} >privacy</li>
                                <li className={styles.footerMenuItem} >terms & conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomFooter}>Book a care</div>

            </div>
        </footer>
    )
}

export default Footer
