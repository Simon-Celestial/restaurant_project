import styles from "./Header.module.scss";
import {
    FacebookLogo,
    InstagramLogo,
    List,
    Phone,
    ShoppingCart,
    TiktokLogo,
    TwitterLogo,
    X
} from "@phosphor-icons/react";
import {useCallback, useContext, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {BasketContext} from "../../../Context/BasketContext.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import navData from "/public/data/NavigationData/NavigationData.json";
import {NavDetails} from "../../../types.ts";


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false)

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        calculateSubtotal
    } = useContext(BasketContext);

    const location = useLocation();

    const handleCartOpen = useCallback((): void => {
        setCartOpen(prev => !prev);
    }, [setCartOpen]);

    const handleMenuOpen = useCallback((): void => {
        setMenuOpen(prev => !prev);
    }, [setMenuOpen]);


    const handleCurrentPage = useCallback((navValue: string): boolean => {
        if (navValue === "home") {
            return location.pathname === "/"
        } else {
            return location.pathname === "/" + navValue
        }
    }, [location.pathname]);


    return (
        <header className={styles.headerWrapper}>
            <div className={`${styles.cartWrapper} ${cartOpen ? styles.active : ""}`}>
                <div className={styles.productsWrapper}>
                    {cartItems?.length < 1 ?
                        <div className={styles.emptyCart}>
                            <img src="/images/emptyCart.png" alt="emptyCart"/>
                            <h2>Your cart is empty</h2>
                        </div>
                        :
                        null
                    }
                    {cartItems?.map(item => {
                        return (
                            <div key={item?.id} className={styles.productCard}>
                                <div className={styles.productTitle}>
                                    <h2>{item?.title}</h2>
                                    <div className={styles.container}>
                                        <div className={styles.counter}>
                                            <span onClick={() => decreaseQuantity(item?.id)}>-</span>
                                            <span>{item?.count}</span>
                                            <span onClick={() => increaseQuantity(item?.id)}>+</span>

                                        </div>
                                        <span>$ {(item?.salePrice * item?.count)?.toFixed(2)}</span>
                                    </div>
                                    <div className={`${styles.button}`}
                                         onClick={() => removeFromCart(item?.id)}>delete
                                    </div>
                                </div>
                                <div className={styles.productImage}>
                                    <img
                                        src={item?.image}
                                        alt={item?.category}/>
                                </div>
                            </div>

                        )
                    })}
                </div>

                <div className={styles.buttons}>
                    <span>Subtotal : <p>$ {calculateSubtotal?.toFixed(2)}</p></span>
                    <div className={styles.container}>
                        <Link to={"/cart"} className={`${styles.button} ${styles.yellowBtn}`}>Open cart</Link>
                        <Link to={"/checkout"} className={`${styles.button} ${styles.yellowBtn}`}>Checkout</Link>
                    </div>
                </div>

            </div>
            <div className={styles.headerContent}>
                <div className={styles.container}>
                    <div className={`${styles.button} ${styles.yellowBtn}`} onClick={handleCartOpen}>
                        ({cartItems?.length})
                        <p>Cart</p>
                        <ShoppingCart weight="fill"/>
                    </div>
                </div>
                <div className={styles.container}>
                    <Link to={"/"}>
                        <img src="/images/logo.png"
                             alt="Gourmet logo"/>
                    </Link>
                </div>
                <div className={styles.container}>
                    <div className={styles.menuBtn} onClick={handleMenuOpen}>
                        <List weight="bold"/>
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
                            {navData?.map((nav: NavDetails) => {
                                return (
                                    <Link key={nav?.id} to={`${nav?.name === "home" ? "/" : "/" + nav?.name}`}
                                          className={`${styles.menuItem} ${handleCurrentPage(nav?.name) ? styles.active : null}`}>
                                        {nav?.name}
                                    </Link>
                                )
                            })}
                        </div>
                        <a href="tel:+994551234567" className={styles.menuItem} target={"_blank"}>
                            <Phone weight="fill"/>
                        </a>
                        <div className={styles.iconsContainer}>
                            <a href="https://www.facebook.com" target="_blank">
                                <FacebookLogo/>
                            </a>
                            <a href="https://www.instagram.com" target="_blank">
                                <InstagramLogo/>
                            </a>
                            <a href="https://www.tiktok.com" target="_blank">
                                <TiktokLogo/>
                            </a>
                            <a href="https://x.com" target="_blank">
                                <TwitterLogo/>
                            </a>
                        </div>

                    </div>
                    <div className={styles.animatedContainer}>
                        <img src="/images/food.gif"
                             alt="Animated logo"/>
                    </div>

                </div>

            </div>
        </header>
    )
}