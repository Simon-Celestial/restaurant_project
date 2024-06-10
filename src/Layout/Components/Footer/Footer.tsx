import styles from "./Footer.module.scss";
import {FacebookLogo, InstagramLogo, TiktokLogo, TwitterLogo} from "@phosphor-icons/react";
export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.textBlock}>
                    THANKS FOR EATING WITH US
                </div>
                <div className={styles.mailBlock}>
                    <div className={styles.mailItem}>
                        <p>General Enquiries</p>
                        <a href="mailto:info@gourmet.com" target="_blank">info@gourmet.com</a>
                    </div>
                    <div className={styles.mailItem}>
                        <p>Franchising Opportunities</p>
                        <a href="mailto:franchising@gourmet.com" target="_blank">franchising@gourmet.com</a>
                    </div>

                </div>
                <div className={styles.iconsBlock}>
                    <div className={styles.icons}>
                        <a href="https://www.facebook.com" target="_blank">
                        <FacebookLogo/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <InstagramLogo/>
                        </a>
                        <a href="https://www.tiktok.com" target="_blank">
                            <TiktokLogo/>
                        </a>
                        <a href="https://x.com" target="_blank">
                            <TwitterLogo/>
                        </a>

                    </div>
                    <p>©2024 GOURMET. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    )
}