import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <main className={styles.mainWrapper}>
                <h1>Salaaam</h1>
            </main>
            <Footer/>
        </>
    )
}