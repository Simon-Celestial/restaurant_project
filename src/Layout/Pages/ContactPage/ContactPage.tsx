import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import styles from "./ContactPage.module.scss";
import {Link} from "react-router-dom";
import {FacebookLogo, InstagramLogo, TiktokLogo, TwitterLogo} from "@phosphor-icons/react";

export const ContactPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.contactMain}>
                <section className={styles.contactSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleBlock}>
                            <h1>contact us</h1>
                            <p>Do you have questions? Give feedback, or offer a suggestion.</p>
                            <h3>Your thoughts are important to us! Submit via the form or email us at the address
                                provided.</h3>
                            <span>Location: Azerbaijan,Baku,Port Baku Mall</span>
                            <span>Tel: +994 55 123 45 67</span>
                            <div className={styles.container}>
                                <Link to={"https://maps.app.goo.gl/rTeoFspF13QowpdD7"}
                                      className={`${styles.button} ${styles.blackBtn}`} target={"_blank"}>find us</Link>
                            </div>
                            <div className={styles.iconsContainer}>
                                <a href="https://www.facebook.com" target="_blank">
                                    <FacebookLogo weight="fill"/>
                                </a>
                                <a href="https://www.instagram.com" target="_blank">
                                    <InstagramLogo weight="bold"/>
                                </a>
                                <a href="https://www.tiktok.com" target="_blank">
                                    <TiktokLogo weight="fill"/>
                                </a>
                                <a href="https://x.com" target="_blank">
                                    <TwitterLogo weight="fill"/>
                                </a>
                            </div>
                        </div>
                        <form className={styles.formBlock}>
                            <div className={styles.inputWrapper}>
                                <input type="text" required placeholder={"name"}/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <input type="email" required placeholder={"email"}/>
                            </div>
                            <div className={styles.inputWrapper}>
                                <input type="tel" required placeholder={"tel"}/>
                            </div>
                            <textarea placeholder={"message"} required/>
                            <div className={styles.container}>
                                <button type={"submit"} className={`${styles.button} ${styles.blackBtn}`}>
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
