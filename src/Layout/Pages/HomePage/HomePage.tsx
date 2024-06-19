import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import {Link} from "react-router-dom";
import {DoubleSection} from "../../Common/DoubleSection/DoubleSection.tsx";
import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {DataContext} from "../../../Context/DataContext.tsx";
import {Loader} from "../../Common/Loader/Loader.tsx";
import {Bounce, toast} from "react-toastify";



export const HomePage = () => {
    const {
        products
    } = useContext(DataContext);

    const [loading, setLoading] = useState(true);

    const formRef = useRef<HTMLFormElement | null>(null);


    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 3000)

    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubscribe = useCallback((e: { preventDefault: () => void; }) => {
        e.preventDefault();
        toast.success(`Successfully subscribed!`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        if (formRef.current) {
            formRef.current.reset();
        }
    },[])


    return (
        <>
            {loading ?
                <Loader/>
                :
                null
            }
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
                            <Link to={"/menu"} className={`${styles.button} ${styles.whiteBtn}`}>order online</Link>
                        </div>
                    </div>
                </section>
                <
                    DoubleSection
                    reversed={false}
                    image={"https://themes.framework-y.com/gourmet/wp-content/uploads/2017/05/square-8.jpg"}
                    link={"/menu"}
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
                                <a href="#newsletter" className={`${styles.button} ${styles.blackBtn}`}>
                                    SIGN UP TO OUR NEWSLETTER
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
                <section className={styles.viewMenuSection}>
                    <div className={styles.sectionContent}>
                        <img src="/images/foodPlated.webp" alt="Spining Logo"/>
                        <h1>TODAY'S A GOURMET DAY</h1>
                        <div className={styles.container}>
                            <Link to={"/menu"} className={`${styles.button} ${styles.blackBtn}`}>view our menu</Link>
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
                                            alt={"Product"}
                                            loading={"lazy"}
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
                    link={"/franchising"}
                    title={"franchising"}
                    btn={"franchising"}
                />
                <section className={styles.formSection} id="newsletter">
                    <div className={styles.sectionContent}>
                        <div className={styles.blockWrapper}>
                            <img className={`${styles.decoration} ${styles.sauce}`}
                                 src="https://stackshack.co.uk/wp-content/uploads/2023/03/SecretSauce.gif"
                                 alt="Animated logo"/>
                            <img className={`${styles.decoration} ${styles.hotDog}`}
                                 src="https://stackshack.co.uk/wp-content/uploads/2023/03/TopDog.gif"
                                 alt="Animated Logo"/>
                            <form
                                onSubmit={handleSubscribe}
                                className={styles.title}
                                ref={formRef}
                            >
                                <h1>SIGN UP TO OUR NEWSLETTER</h1>
                                <p>Don't worry we will not spam you</p>
                                <div className={styles.inputWrapper}>
                                    <p>Name <span>*</span></p>
                                    <input type="text" required/>
                                </div>
                                <div className={styles.inputWrapper}>
                                    <p>Email <span>*</span></p>
                                    <input type="email" required/>
                                </div>
                                <div className={styles.inputWrapper}>
                                    <p>Telephone <span>*</span></p>
                                    <input type="tel" placeholder={"+994XXXXXXXXX"} pattern="\+994\d{9}" required/>
                                </div>
                                <div className={styles.inputWrapper}>
                                    <p>your birthday?</p>
                                    <input type="date"/>
                                </div>
                                <div className={styles.container}>
                                    <button type={"submit"}
                                            className={`${styles.button} ${styles.blackToWhiteBtn}`}>sign me up
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}