import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import styles from "./MenuPage.module.scss";
import {DataContext} from "../../../Context/DataContext.tsx";
import {useContext, useMemo} from "react";
import {ProductDetail} from "../../../types.ts";

export const MenuPage = () => {

    const {
        products
    } = useContext(DataContext);


    const allProducts = useMemo(() => {
        return products.flatMap(category => category.products)
    },[products])


    return (
        <>
            <Header/>
            <main className={styles.menuMain}>
                <section className={styles.menuSection}>
                    <img src="https://stackshack.co.uk/wp-content/uploads/2023/03/Shakes.gif" alt="Shake"
                         className={`${styles.decoration} ${styles.shake}`}/>
                    <img src="https://stackshack.co.uk/wp-content/uploads/2023/03/TopDog.gif" alt="Hot dog"
                         className={`${styles.decoration} ${styles.hotDog}`}/>
                    <div className={styles.menuContent}>
                        <h1>Our Menu</h1>
                        <p>We only use the freshest, high quality ingredients</p>
                        <div className={styles.container}>
                            <a href="/public/menu/menuExample.pdf" className={`${styles.button} ${styles.blackBtn}`}
                               download={"Menu_Example.pdf"}>
                                Download Menu
                            </a>
                        </div>

                    </div>
                </section>
                <section className={styles.productsSection}>
                    <div className={styles.productsContent}>
                        <div className={styles.productsWrapper}>
                            {allProducts?.map((product:ProductDetail) => {
                                return (
                                    <div key={product?.id} className={styles.productCard}>
                                        <div className={styles.productImage}>
                                            <img src={product?.image} alt="Product"/>
                                            <div className={styles.ingredients}>
                                                {product?.ingredients?.join(", ")}
                                            </div>
                                        </div>
                                        <div className={styles.productTitle}>
                                            <h5>{product?.title}</h5>
                                            <p>{product?.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.productsOptions}>

                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
