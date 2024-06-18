import styles from "./WishlistPage.module.scss";
import {
    Check,
    FacebookLogo, InstagramLogo,
    PinterestLogo,
    Trash,
    WhatsappLogo,
    X, XLogo
} from "@phosphor-icons/react";
import {Link} from "react-router-dom";
import {useCallback, useContext} from "react";
import {WishListContext} from "../../../Context/WishListContext.jsx";
import {BasketContext} from "../../../Context/BasketContext.jsx";
import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import {ProductDetail} from "../../../types.ts";

export const WishlistPage = () => {
    const {
        wishListItems,
        removeFromWishList
    } = useContext(WishListContext);

    const {
        addToCart,
    } = useContext(BasketContext);


    const handleAddToCart = useCallback(async (product: ProductDetail, productId: string): Promise<void> => {
        addToCart(product);
        await (product?.quantity > 0 ? removeFromWishList(productId) : Promise.resolve());
    }, [addToCart, removeFromWishList]);


    return (
        <>
            <Header/>
            <main className={styles.wishlistMain}>
                {wishListItems?.length < 1 ?
                    <div className={styles.wishlistEmpty}>
                        <img src="/images/wishlistEmpty.png" alt="Empty Wishlist"/>
                        <p>Your wishlist is currently empty.</p>
                        <div className={styles.container}>
                        <Link className={`${styles.button} ${styles.blackBtn}`} to="/menu">
                            Return to Menu
                        </Link>
                        </div>
                    </div>
                    :
                    <div className={styles.wishlistCardsWrapper}>
                        <div className={`${styles.tableRow} ${styles.topRow}`}>
                            <div className={`${styles.product} ${styles.cell}`}>
                                Product
                            </div>
                            <div className={`${styles.price} ${styles.cell}`}>
                                Price
                            </div>
                            <div className={`${styles.stock} ${styles.cell}`}>
                                Stock status
                            </div>
                            <div className={`${styles.add} ${styles.cell}`}>
                                Add to Cart
                            </div>
                            <div className={`${styles.delete} ${styles.cell}`}>
                                Delete
                            </div>
                        </div>
                        {wishListItems?.map((product) => {
                            return (
                                <div key={product.id} className={`${styles.tableRow} ${styles.bottomRow}`}>
                                    <div className={`${styles.product} ${styles.cell}`}>
                                        <img
                                            src={product?.image}
                                            alt="Fashion Clothes"/>
                                        <Link to={`/single-product/${product.id}`}>
                                            {product?.title}
                                        </Link>
                                    </div>
                                    <div className={`${styles.price} ${styles.cell}`}>
                                    <span>
                                        {product?.regularPrice ?
                                            <p>$ {product?.regularPrice?.toFixed(2)}</p>
                                            :
                                            null
                                        }
                                        $ {product?.salePrice?.toFixed(2)}</span>

                                    </div>
                                    <div className={`${styles.stock} ${styles.cell}`}>
                                        {product.quantity > 0 ?
                                            <span className={styles.inStock}><Check/> In Stock</span>
                                            :
                                            <span className={styles.notInStock}><X/>Out of Stock</span>
                                        }
                                    </div>
                                    <div className={`${styles.add} ${styles.cell}`}>
                                        <div className={`${styles.button} ${styles.blackBtn}`}
                                             onClick={() => handleAddToCart(product, product.id)}>
                                            add to cart
                                        </div>

                                    </div>
                                    <div className={`${styles.delete} ${styles.cell}`}>
                                        <div className={styles.deleteBtn}
                                             onClick={() => removeFromWishList(product.id)}>
                                            <Trash/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className={styles.social}>
                            <div className={styles.iconsBlock}>
                                <Link to="https://www.facebook.com/" className={styles.circle} target={"_blank"}>
                                    <FacebookLogo weight="fill"/>
                                </Link>
                                <Link to="https://x.com" className={styles.circle} target={"_blank"}>
                                    <XLogo weight="fill"/>
                                </Link>
                                <Link to="https://www.pinterest.com" className={styles.circle} target={"_blank"}>
                                    <PinterestLogo weight="fill"/>
                                </Link>
                                <Link to="https://www.instagram.com/" className={styles.circle} target={"_blank"}>
                                    <InstagramLogo  weight="fill" />
                                </Link>
                                <Link to="https://www.whatsapp.com" className={styles.circle} target={"_blank"}>
                                    <WhatsappLogo/>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </main>
            <Footer/>
        </>
    )
}

