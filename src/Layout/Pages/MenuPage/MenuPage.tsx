import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import styles from "./MenuPage.module.scss";
import {DataContext} from "../../../Context/DataContext.tsx";
import React, {useCallback, useContext, useMemo, useState, ChangeEvent} from "react";
import {ProductDetail} from "../../../types.ts";
import {MagnifyingGlass} from "@phosphor-icons/react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export const MenuPage = () => {

    const {
        products
    } = useContext(DataContext);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [stockValue, setStockValue] = React.useState('both');

    const handleStockChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.target.value;

        if (selectedValue === stockValue) {
            setStockValue('');
        } else if (selectedValue !== stockValue) {
            setStockValue(selectedValue);
        }
    }, [stockValue, setStockValue]);

    const handleSearchTerm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, [setSearchTerm]);


    const allProducts = useMemo(() => {
        return products.flatMap(category => category.products)
    }, [products]);

    const searchFilteredData = useMemo(() => {
        const normalizedSearchTerm = searchTerm.toLowerCase().trim();
        return allProducts.filter((product) => {
            const title = product.title ? product.title.toLowerCase() : '';
            const description = product.description ? product.description.toLowerCase() : '';

            return title.includes(normalizedSearchTerm) || description.includes(normalizedSearchTerm);
        });
    }, [allProducts, searchTerm]);


    const stockFilteredData = useMemo(() => {
        if (stockValue === "inStock") {
            return searchFilteredData.filter(product => product.quantity > 0);
        } else if (stockValue === "outOfStock") {
            return searchFilteredData.filter(product => product.quantity < 1);
        } else {
            return searchFilteredData;
        }
    }, [searchFilteredData, stockValue]);


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
                            {stockFilteredData.length < 1 ?
                                <div className={styles.noProducts}>
                                    <h1>No Products Found...</h1>
                                </div>
                                :
                                stockFilteredData?.map((product: ProductDetail) => {
                                    return (

                                        <div key={product?.id} className={styles.productCard}>
                                            <div className={styles.productImage}>
                                                <img src={product?.image} alt="Product"
                                                     style={{
                                                         filter: product?.quantity < 1 ? "blur(3px) grayscale(1)" : "none"
                                                     }}
                                                />
                                                <div className={styles.price}>
                                                    {product?.regularPrice ?
                                                        <p>$ {product?.regularPrice?.toFixed(2)}</p> : null}$ {product.salePrice.toFixed(2)}
                                                </div>
                                                <div className={styles.ingredients}>
                                                    {product?.ingredients?.join(", ")}
                                                </div>
                                                {product.quantity < 1 ?
                                                    <div className={styles.outOfStock}>
                                                        Out of stock
                                                    </div>
                                                    :
                                                    null
                                                }
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
                            <div className={styles.optionsContainer}>
                                <p>Search</p>
                                <div className={styles.searchWrapper}>
                                    <MagnifyingGlass/>
                                    <input
                                        value={searchTerm}
                                        onChange={handleSearchTerm}
                                        type="text"/>
                                </div>
                            </div>
                            <div className={styles.optionsContainer}>
                                <p className={styles.availability}>Availability</p>
                                <div className={styles.availabilityContainer}>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={stockValue}
                                            onChange={handleStockChange}
                                        >
                                            <FormControlLabel value="inStock"
                                                              control={<Radio className={styles.radioBtn}/>}
                                                              label="In stock" className={styles.radioLabel}/>
                                            <FormControlLabel value="outOfStock"
                                                              control={<Radio className={styles.radioBtn}/>}
                                                              label="Out of stock" className={styles.radioLabel}/>
                                            <FormControlLabel value="both"
                                                              control={<Radio className={styles.radioBtn}/>}
                                                              label="Both" className={styles.radioLabel}/>
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
