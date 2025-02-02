import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Bounce, toast } from 'react-toastify';
import { ProductDetail } from "../types.ts";

interface BasketContextType {
    addToCart: (product: ProductDetail) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    cartItems: ProductDetail[];
    calculateSubtotal: number;
    emptyCart: () => void;
}

export const BasketContext = React.createContext<BasketContextType>({
    addToCart: () => {},
    removeFromCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    cartItems: [],
    calculateSubtotal: 0,
    emptyCart: () => {},
});

interface BasketContextProviderProps {
    children: React.ReactNode;
}

export const BasketContextProvider: React.FC<BasketContextProviderProps> = ({ children }) => {
    const initialCartItems: ProductDetail[] = JSON.parse(localStorage.getItem("basket") || '[]');
    const [cartItems, setCartItems] = useState<ProductDetail[]>(initialCartItems);

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = useCallback((product: ProductDetail) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);

            if (existingItem) {
                toast.success(`${product.title.toUpperCase()} added to basket`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return prev.map(item =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                );
            } else if (product.quantity < 1) {
                toast.error(`Product is out of stock!`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return [...prev];
            } else {
                toast.success(`${product?.title?.toUpperCase()} added to basket`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return [...prev, { ...product, count: 1 }];
            }
        });
    }, []);

    const removeFromCart = useCallback((productId: string) => {
        toast.success(`Product removed from basket`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });

        setCartItems(prev => prev.filter(item => item.id !== productId));
    }, []);

    const increaseQuantity = useCallback((productId: string) => {
        setCartItems(prev => prev.map(item =>
            item.id === productId ? { ...item, count: item.count + 1 } : item
        ));
    }, []);

    const decreaseQuantity = useCallback((productId: string) => {
        setCartItems(prev => prev.map(item =>
            item.id === productId ? { ...item, count: Math.max(0, item.count - 1) } : item
        ).filter(item => item.id !== productId || item.count > 0));
    }, []);

    const emptyCart = useCallback(() => {
        setCartItems([]);
        toast.success(`Basket successfully cleared!`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }, []);

    const calculateSubtotal = useMemo(() => {
        return cartItems.reduce((acc, b) => b.salePrice * b.count + acc, 0);
    }, [cartItems]);

    return (
        <BasketContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            calculateSubtotal,
            emptyCart,
        }}>
            {children}
        </BasketContext.Provider>
    );
};
