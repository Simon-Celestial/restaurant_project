import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <main className={styles.mainWrapper}>
                <section className={styles.videoSection}>
                    <video muted loop autoPlay>
                        <source src="/videos/main-video.mp4" type="video/mp4"/>
                    </video>
                    <div className={styles.sectionContent}>
                        <h1>TODAY'S A GOURMET' DAY</h1>
                        <p>Secret family recipes are the stuff of legends and Gourmet dishes is no exception.</p>
                        <div className={styles.container}>
                            <div className={`${styles.button} ${styles.whiteBtn}`}>order online</div>
                        </div>
                    </div>
                </section>
                <section className={styles.newsLetterSection}>
                    <div className={styles.sectionContent}>
                        <img src="https://stackshack.co.uk/wp-content/uploads/2023/04/SpeechBubble.gif"
                             alt="speech buble"/>
                        <div className={styles.contentTitle}>
                            <h1>
                                UNLEASH THE FLAVOUR
                            </h1>
                            <p>
                                We operate in a fast-casual format, offering a cozy dining experience as well as
                                convenient take-away options. This combination of sophistication and convenience is perfect for those who appreciate high quality and excellent taste.
                            </p>
                            <div className={styles.container}>
                                <Link to={"/"} className={`${styles.button} ${styles.blackBtn}`}>
                                    SIGN UP TO OUR NEWSLETTER
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>
                <section className={styles.menuSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.menuContainer}>
                            <h1>THE MENU</h1>
                            <p>We are a unique and independent quick service brand that transforms familiar dishes into a true gourmet experience. Our burgers and shakes are crafted with meticulous attention to quality and flavor, ensuring ultimate satisfaction. Each item is designed to melt in your mouth, leaving an unforgettable aftertaste.</p>
                            <div className={styles.container}>
                                <Link to={"/"} className={`${styles.button} ${styles.blackToWhiteBtn}`}>check it out</Link>
                            </div>

                        </div>
                        <div className={styles.menuImg}>
                            <img src="https://themes.framework-y.com/gourmet/wp-content/uploads/2017/05/square-8.jpg"
                                 alt="Menu"/>
                        </div>
                    </div>
                </section>
                <section className={styles.viewMenuSection}>
                    <div className={styles.sectionContent}>
                        <img src="/images/foodPlated.webp" alt="Spining Logo"/>
                        <h1>TODAY'S A GOURMET DAY</h1>
                        <div className={styles.container}>
                            <Link to={"/"} className={`${styles.button} ${styles.blackBtn}`}>view our menu</Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer/>
        </>
    )
}