import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import styles from "./SingleProductPage.module.scss";
import React, {useCallback, useContext, useMemo, useState} from "react";
import {DataContext} from "../../../Context/DataContext.tsx";
import {Link, useParams} from "react-router-dom";
import {Heart, MagnifyingGlass} from "@phosphor-icons/react";
import {Box, Rating} from "@mui/material";

export const SingleProductPage = () => {

    const {
        allProducts
    } = useContext(DataContext);

    const [imageScale, setImageScale] = useState(false);

    const handleImageScale = useCallback(() => {
        setImageScale(prev => !prev)
    }, [setImageScale]);

    const {id} = useParams();

    const currentProduct = useMemo(() => {
        return allProducts?.filter(product => product.id === id)
    }, [allProducts])

    return (
        <>
            <Header/>
            <main className={styles.pageMain}>
                <section className={styles.headingSection}>
                    <div className={styles.headingContent}>
                        <h1>Experience the finest</h1>
                        <p>Emphasizes the superior quality and careful selection of ingredients, maintaining the tone
                            and style of the original heading.</p>
                        <div className={styles.container}>
                            <Link to={"/menu"} className={`${styles.button} ${styles.blackBtn}`}>Return to menu</Link>
                        </div>
                    </div>
                </section>
                <section className={styles.pageSection}>
                    {currentProduct?.map(product => {
                        return (
                            <div key={product?.id} className={styles.sectionContent}>
                                <div className={styles.imageBlock}>
                                    <img src={product?.image} alt={product?.title}
                                         className={imageScale ? styles.expanded : ""}/>
                                    <div className={styles.scaler} onClick={handleImageScale}>
                                        <MagnifyingGlass/>
                                    </div>
                                </div>
                                <div className={styles.titleBlock}>
                                    <h1>{product?.title}</h1>
                                    <p>{product?.description}</p>
                                    <div className={styles.ratingBlock}>
                                        <Box
                                            sx={{
                                                '& > legend': {mt: 2},
                                            }}
                                        >
                                            <Rating name="read-only" value={product?.rating} readOnly/>
                                        </Box>
                                    </div>
                                    <div className={styles.buttonsBlock}>
                                        <div className={`${styles.button} ${styles.blackBtn}`}>Add to cart</div>
                                        <div className={`${styles.button} ${styles.blackBtn}`}><Heart/></div>
                                    </div>
                                    <span>Category: <p>{product?.category}</p></span>
                                    <span>Ingredients: <p>{product?.ingredients?.join(", ")}</p></span>
                                    <span>Product ID: <p>000{product?.id}AZ</p></span>

                                </div>
                            </div>
                        )
                    })}
                </section>
            </main>
            <Footer/>
        </>
    );
};
