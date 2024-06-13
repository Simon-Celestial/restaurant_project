import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import styles from "./StoryPage.module.scss";
import {Link} from "react-router-dom";

export const StoryPage = () => {
    return (
        <>
            <Header/>
            <main className={styles.storyMain}>
                <section className={styles.storySection}>
                    <div className={styles.storyContent}>
                        <h1>Our Story</h1>
                        <p>The irresistible aroma of sizzling burgers now fills the streets of Baku, thanks to the
                            passion and dedication of two brothers, the founders of GOURMET.</p>
                        <h5>With over 50 years of combined experience in the culinary industry, these brothers embarked
                            on a quest to craft the perfect burger. They explored flavors from around the world,
                            learning the secrets behind every delicious bite.</h5>
                        <h5>Driven by their love for exceptional food, they opened the first GOURMET restaurant in the
                            vibrant food quarter of Baku. This establishment has quickly become a favorite among burger
                            enthusiasts who appreciate high quality and exquisite taste. GOURMET offers a unique dining
                            experience, blending a chic, modern atmosphere with the classic American burger.</h5>
                        <h5>At GOURMET, quality is at the heart of everything they do. They use only the finest prime
                            beef, the freshest potatoes, and artisanal buns to create their burgers. Each order is
                            accompanied by perfectly crispy fries, ensuring a complete gourmet experience. GOURMET has
                            set a new standard in Baku and is creating a legacy in the world of burgers. Their mission
                            is to bring the ultimate burger experience to everyone. With each bite, you'll understand
                            why GOURMET is synonymous with flavor and excellence.</h5>
                        <div className={styles.imageBlock}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/030/655/121/non_2x/vegetarian-fast-food-restaurant-with-colorful-free-photo.jpg"
                                alt="Restaurant Photo"/>
                        </div>
                        <p className={styles.wideText}>At GOURMET, we pride ourselves on using only fresh, never frozen
                            beef and chicken, along with locally-sourced produce whenever possible. Our buns are always
                            toasted to perfection, and we offer a variety of toppings and sauces to customize your
                            burger to your liking.</p>
                        <h5>In addition to our burgers, we also offer sides like crispy French fries, onion rings,
                            waffle fries and potato tots, as well as milkshakes and soft drinks to wash it all down.
                            Whether you're grabbing a quick lunch or enjoying a casual dinner with friends, our burger
                            concept is the perfect spot for burger lovers of all kinds.</h5>
                        <div className={styles.container}>
                            <Link to={"/franchising"} className={`${styles.button} ${styles.blackBtn}`}>join our family</Link>
                        </div>
                        <div className={styles.wideImages}>
                            <img src="https://themewagon.github.io/burger/img/burgers/1.png" alt="story photo"/>
                            <img src="https://themewagon.github.io/burger/img/burgers/2.png" alt="story photo"/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
