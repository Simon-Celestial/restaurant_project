import styles from "./Header.module.scss";
import {FacebookLogo, InstagramLogo, List, Phone, TiktokLogo, TwitterLogo, X} from "@phosphor-icons/react";
import {useCallback, useState} from "react";

export const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    const handleMenuOpen = useCallback(() => {
        setMenuOpen(prev=> !prev);
    },[setMenuOpen]);
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.container}>
                    <a href={"/"} className={`${styles.button} ${styles.yellowBtn}`}>order now</a>
                </div>
                <div className={styles.container}>
                    <a href={"/"}>
                        <img src="https://stackshack.co.uk/wp-content/uploads/2023/03/stachshack-logo-updated.png"
                             alt="Stack Shack logo"/>
                    </a>
                </div>
                <div className={styles.container}>
                    <div className={styles.menuBtn} onClick={handleMenuOpen}>
                        <List  weight="bold" />
                    </div>
                </div>
            </div>
            <div className={`${styles.menuContainer} ${menuOpen ? styles.menuActive : ""}`}>
                <div className={styles.closeMenu} onClick={handleMenuOpen}>
                    <X weight="bold"/>
                </div>
                <div className={styles.menuContent}>
                    <div className={`${styles.titleContainer}`}>
                        <div className={`${styles.menuItems} ${menuOpen ? styles.animated : ""}`}>
                            <a href="/" className={styles.menuItem}>
                                home
                            </a>
                            <a href="/" className={styles.menuItem}>
                                story
                            </a>
                            <a href="/" className={styles.menuItem}>
                                order online
                            </a>
                            <a href="/" className={styles.menuItem}>
                                menu
                            </a>
                            <a href="/" className={styles.menuItem}>
                                careers
                            </a>
                            <a href="/" className={styles.menuItem}>
                                franchise
                            </a>
                            <a href="/" className={styles.menuItem}>
                                contact
                            </a>
                        </div>
                        <a href="/" className={styles.menuItem}>
                            <Phone weight="fill"/>
                        </a>
                        <div className={styles.iconsContainer}>
                            <a href="https://www.facebook.com/stackshackuk">
                                <FacebookLogo/>
                            </a>
                            <a href="https://www.instagram.com/stackshack.uk/">
                                <InstagramLogo/>
                            </a>
                            <a href="https://www.tiktok.com/@stackshack.uk">
                                <TiktokLogo/>
                            </a>
                            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fstackshackuk">
                                <TwitterLogo/>
                            </a>
                        </div>

                    </div>
                    <div className={styles.animatedContainer}>
                        <img src="https://stackshack.co.uk/wp-content/uploads/2023/03/S_Yellow.gif"
                             alt="Animated logo"/>
                    </div>

                </div>

            </div>
        </header>
    )
}