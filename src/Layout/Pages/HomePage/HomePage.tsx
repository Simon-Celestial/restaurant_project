import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import {Link} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import PRODUCTS_DATA from "/public/data/ProductsData/productsData.json";
import {DoubleSection} from "../../Common/DoubleSection/DoubleSection.tsx";

interface Product {
    id: string;
    image: string;
    name: string;
    description: string;
    type: string;
}

const products: Product[] = PRODUCTS_DATA;

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
                <
                    DoubleSection
                    reversed={false}
                    image={"https://themes.framework-y.com/gourmet/wp-content/uploads/2017/05/square-8.jpg"}
                    link={""}
                    title={"the menu"}
                    btn={"check it now"}
                />

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
                                convenient take-away options. This combination of sophistication and convenience is
                                perfect for those who appreciate high quality and excellent taste.
                            </p>
                            <div className={styles.container}>
                                <Link to={"/"} className={`${styles.button} ${styles.blackBtn}`}>
                                    SIGN UP TO OUR NEWSLETTER
                                </Link>
                            </div>
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
                <section className={styles.productsSection}>
                    <div className={styles.sectionContent}>
                        {products?.map(product => {
                            return (
                                <div key={product?.id} className={styles.productWrapper}>
                                    <Link to={`/details/${product?.type}`} className={styles.productImage}>
                                        <img
                                            src={product?.image}
                                             alt={"image"}
                                        />
                                    </Link>
                                    <div className={styles.productTitle}>
                                        <h1>{product?.name}</h1>
                                        <p>{product?.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <
                    DoubleSection
                    reversed={true}
                    image={"https://m.foolcdn.com/media/dubs/images/Franchise_--_GettyImages-682049968.width-880.jpg"}
                    link={""}
                    title={"franchising"}
                    btn={"franchising"}
                />
                <section className={styles.formSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.blockWrapper}>
                            <img className={`${styles.decoration} ${styles.sauce}`} src="https://stackshack.co.uk/wp-content/uploads/2023/03/SecretSauce.gif" alt="Image"/>
                            <img className={`${styles.decoration} ${styles.hotDog}`} src="https://stackshack.co.uk/wp-content/uploads/2023/03/TopDog.gif" alt="Image"/>
                            <div className={styles.title}>
                                <h1>SIGN UP TO OUR NEWSLETTER</h1>
                                <p>Don't worry we will not spam you</p>
                                <div className={styles.inputWrapper}>
                                    Name
                                    <input type="text"/>
                                </div>
                                <div className={styles.inputWrapper}>
                                    Email
                                    <input type="email"/>
                                </div>
                                <div className={styles.inputWrapper}>
                                    telephone
                                    <input type="tel" placeholder={"+994XXXXXXXXX"}/>
                                </div>
                                <div className={styles.inputWrapper}>
                                    your birthday?
                                    <input type="date"/>
                                </div>
                                <div className={styles.container}>
                                    <button type={"submit"} className={`${styles.button} ${styles.blackToWhiteBtn}`}>sign me up</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}