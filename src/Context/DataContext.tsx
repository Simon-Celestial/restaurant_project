import React, {useState, createContext, ReactNode, useMemo} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import PRODUCTS_DATA from "/public/data/ProductsData/productsData.json";
import {Product} from "../types.ts";

const products: Product[] = PRODUCTS_DATA;

interface DataContextType {
    products: Product[];
}

const defaults: DataContextType = {
    products: []
}

export const DataContext = createContext<DataContextType>(defaults);

interface DataContextProviderProps {
    children: ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = ({children}) => {
    const [data] = useState<Product[]>(products);

    const value = useMemo(() => ({
        products: data
    }), [data]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
