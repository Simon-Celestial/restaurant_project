import styles from "./CareersPage.module.scss";
import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";

export const CareersPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.careersMain}>
                <section className={styles.workSection}>
                    <div className={styles.sectionContent}>
                        <h1>Work for us</h1>
                        <p>Interested in joining the Gourmet team?</p>
                        <h3>We are always looking to hear from people who are passionate about making a difference.</h3>
                        <div className={styles.workImg}>
                            <img src="https://t3.ftcdn.net/jpg/06/61/67/36/360_F_661673616_R3ObwTckvrQyU929fHPg4gJie1YaVqi2.jpg" alt="Work Image"/>
                        </div>
                        <p>avaible positions</p>
                    </div>
                </section>
                <section className={styles.vacancySection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.vacancyContainer}>
                            <b>RESTAURANT MANAGER</b>
                        </div>

                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
