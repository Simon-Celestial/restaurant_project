import {Header} from "../../Components/Header/Header.tsx";
import {Footer} from "../../Components/Footer/Footer.tsx";
import styles from "./MenuPage.module.scss";
import {DataContext} from "../../../Context/DataContext.tsx";
import React, {useCallback, useContext, useMemo, useState, ChangeEvent, useEffect} from "react";
import {ProductDetail} from "../../../types.ts";
import {Heart, MagnifyingGlass} from "@phosphor-icons/react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {Box, Rating, Slider} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";
import {BasketContext} from "../../../Context/BasketContext.tsx";
import {WishListContext} from "../../../Context/WishListContext.tsx";


// PAGINATION
const itemsPerPage = 6;

function valuetext(value: number) {
    return `${value}`;
}

export const MenuPage = () => {

    const {
        allProducts
    } = useContext(DataContext);
    const {
        addToCart
    } = useContext(BasketContext);
    const {
        wishListItems,
        addToWishList
    } = useContext(WishListContext);


    const [searchTerm, setSearchTerm] = useState<string>("");
    const [stockValue, setStockValue] = React.useState('both');
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [priceValue, setPriceValue] = React.useState<number[]>([0, 100]);
    const [currentPage, setCurrentPage] = useState(1);


    const handlePriceChange = useCallback((_event: Event, newValue: number | number[]) => {
        setPriceValue(newValue as number[]);
    }, [setPriceValue]);

    const handleCategorySelection = useCallback((category: string) => {
        setSelectedCategory(prevState =>
            prevState.includes(category)
                ? prevState.filter(it => it !== category)
                : [...prevState, category]
        );
    }, [selectedCategory, setSelectedCategory]);


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

    const allCategories = useMemo(() => Array.from(new Set(allProducts?.map(it => it.category))), [allProducts]);

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

    const categoryFilterData = useMemo(() => {
        if (selectedCategory.length === 0) {
            return stockFilteredData;
        } else {
            return stockFilteredData.filter(product =>
                selectedCategory.some(category => product.category.toLowerCase() === category.toLowerCase())
            );
        }
    }, [stockFilteredData, selectedCategory]);

    const priceFilteredData = useMemo(() => {
        return categoryFilterData.filter(product => product.salePrice >= priceValue[0] && product.salePrice <= priceValue[1])

    }, [categoryFilterData, priceValue])

    // PAGINATION
    const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage,
        [currentPage]);
    const endIndex = useMemo(() => startIndex + itemsPerPage, [startIndex]);

    const handlePageChange = useCallback((_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }, [setCurrentPage]);

    const currentProducts = useMemo(() => {
        return priceFilteredData?.slice(startIndex, endIndex);
    }, [priceFilteredData, startIndex, endIndex]);

    useEffect(() => {
        if (priceFilteredData && priceFilteredData.length > 0 && endIndex > priceFilteredData.length - 1) {
            setCurrentPage(Math.ceil(priceFilteredData?.length / itemsPerPage));
        }
    }, [endIndex, priceFilteredData, setCurrentPage, itemsPerPage]);

    const isProductInWishlist = useCallback((productId: string) => {
        return wishListItems.some(item => item.id === productId);
    }, [wishListItems]);




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
                            <div className={styles.paginationWrapper}>
                                <Stack spacing={1}>
                                    <Pagination
                                        count={Math.ceil(priceFilteredData?.length / itemsPerPage)}
                                        variant="outlined"
                                        shape="rounded"
                                        size="large"
                                        page={currentPage}
                                        onChange={handlePageChange}
                                    />
                                </Stack>
                            </div>
                            {currentProducts?.length < 1 ?
                                <div className={styles.noProducts}>
                                    <h1>No Products Found...</h1>
                                </div>
                                :
                                currentProducts?.map((product: ProductDetail) => {
                                    return (
                                        <div key={product?.id} className={styles.productCard}>
                                            <div className={styles.productImage}>
                                                <div className={styles.wishItem} onClick={() => addToWishList(product)}>
                                                    {isProductInWishlist(product?.id) ?
                                                        <Heart weight="fill"/>
                                                        :
                                                        <Heart/>

                                                    }
                                                </div>
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
                                                <Link to={`/single-product/${product?.id}`}>{product?.title}</Link>
                                                <p>{product?.description}</p>
                                                <Box
                                                    sx={{
                                                        '& > legend': {mt: 2},
                                                    }}
                                                >
                                                    <Rating name="read-only" value={product?.rating} readOnly/>
                                                </Box>
                                                <div className={styles.container}>
                                                    <div className={`${styles.button} ${styles.yellowToOrangeBtn}`}
                                                         onClick={() => addToCart(product)}>Add
                                                        to cart
                                                    </div>
                                                </div>
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
                                <p>Price</p>
                                <div className={styles.priceContainer}>
                                    <Box sx={{padding: '0 10px'}}>
                                        <Slider
                                            sx={{color: "orange"}}
                                            getAriaLabel={() => 'Temperature range'}
                                            value={priceValue}
                                            onChange={handlePriceChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                        />
                                    </Box>
                                    <div className={styles.priceValues}>
                                        Price: {priceValue[0]?.toFixed(2)} $ - {priceValue[1]?.toFixed(2)} $
                                    </div>
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
                            <div className={styles.optionsContainer}>
                                <p>Categories</p>
                                <div className={styles.categories}>
                                    {allCategories?.map((category, i) => {
                                        return (
                                            <li
                                                key={i} onClick={() => handleCategorySelection(category)}
                                                style={{
                                                    color: selectedCategory.includes(category) ? "orange" : "",
                                                }}>
                                                {category}</li>
                                        )
                                    })}
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
