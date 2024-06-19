import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Bounce, toast} from "react-toastify";
import {ProductDetail} from "../types.ts";


interface WishListContextType {
    wishListItems: ProductDetail[];
    addToWishList: (product: ProductDetail) => void;
    removeFromWishList: (productId: string) => void;
}

const initialContextValue: WishListContextType = {
    wishListItems: [],
    addToWishList: () => {
    },
    removeFromWishList: () => {
    },
};

export const WishListContext = React.createContext<WishListContextType>(initialContextValue);

interface WishListContextProviderProps {
    children: React.ReactNode;
}

export const WishListContextProvider: React.FC<WishListContextProviderProps> = ({children}) => {
    const initialItems: ProductDetail[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const [wishListItems, setWishListItems] = useState<ProductDetail[]>(initialItems);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishListItems));
    }, [wishListItems]);

    const addToWishList = useCallback((product: ProductDetail) => {
        setWishListItems(prev => {
            const isExistingIndex = prev.findIndex(item => item.id === product.id);
            if (isExistingIndex === -1) {
                toast.success(`${product?.title?.toUpperCase()} added to wishlist`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return [...prev, product];
            } else {
                toast.error(`${product.title} removed from wishlist!`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                const updatedWishlist = [...prev];
                updatedWishlist.splice(isExistingIndex, 1);
                return updatedWishlist;
            }
        });
    }, []);

    const removeFromWishList = useCallback((productId: string) => {
        toast.success(`Product removed from wishlist`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
        });
        setWishListItems(prev => prev.filter(item => item.id !== productId));
    }, []);

    const contextValue = useMemo(() => ({
        wishListItems,
        addToWishList,
        removeFromWishList
    }), [wishListItems, addToWishList, removeFromWishList]);


    return (
        <WishListContext.Provider value={contextValue}>
            {children}
        </WishListContext.Provider>
    );
};
