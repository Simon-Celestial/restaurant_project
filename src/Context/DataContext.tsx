import React, {useState, createContext, ReactNode, useMemo} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import PRODUCTS_DATA from "/public/data/ProductsData/productsData.json";
import {Product,ProductDetail} from "../types.ts";

const products: Product[] = PRODUCTS_DATA;

interface DataContextType {
    products: Product[];
    allProducts: ProductDetail[]
}

const defaults: DataContextType = {
    products: [],
    allProducts :[]
}

export const DataContext = createContext<DataContextType>(defaults);

interface DataContextProviderProps {
    children: ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = ({children}) => {
    const [data] = useState<Product[]>(products);

    const allProducts = useMemo(() => {
        return products.flatMap(category => category.products)
    }, [products]);


    const value = useMemo(() => ({
        products: data,
        allProducts
    }), [data,allProducts]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
