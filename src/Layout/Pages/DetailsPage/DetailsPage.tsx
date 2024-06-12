import styles from "./DetailsPage.module.scss";
import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import {Link, useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useContext, useEffect, useState} from "react";
import {DataContext} from "../../../Context/DataContext.tsx";
import { Product } from "../../../types.ts";





export const DetailsPage = () => {

    const {
        products
    } = useContext(DataContext);
    const [selectedCategory, setSelectedCategory] = useState<Product | null>(null);

    const {category} = useParams<{ category: string }>();

    useEffect(() => {
        if (category) {
            const filteredCategory = products.find((product) =>
                product.type.toLowerCase() === category.toLowerCase()
            );
            setSelectedCategory(filteredCategory || null);
        }
    }, [category]);

    return (
        <>
            <Header/>
            <main className={styles.detailsWrapper}>
                <div className={styles.detailsContent}>
                    <h1>{selectedCategory?.name}</h1>
                    <p>We only use the freshest, high quality ingredients</p>
                    <div className={styles.productsWrapper}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}

                            modules={[Navigation, Pagination]}
                            style={{
                                "--swiper-navigation-color": "#26282D",
                                "--swiper-navigation-opacity": "0.5",
                                "--swiper-navigation-sides-offset": "0",
                                "--swiper-navigation-size": "50px",
                                "--swiper-pagination-color": "#26282D",
                                "--swiper-pagination-bullet-inactive-color": "#FECD20",
                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                "--swiper-pagination-bullet-size": "20px",
                                "--swiper-pagination-bullet-horizontal-gap": "5px",

                            }}
                        >
                            {selectedCategory?.products?.map(product => {
                                return (
                                    <SwiperSlide key={product?.id}>
                                        <div className={styles.productCard}>
                                            <div className={styles.productImage}>
                                                <img src={product?.image}
                                                     alt={product?.title}/>
                                            </div>
                                            <div className={styles.productTitle}>
                                                {product?.title}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div className={styles.container}>
                        <Link to={"/"} className={`${styles.button} ${styles.blackBtn}`}>back to menu</Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};
