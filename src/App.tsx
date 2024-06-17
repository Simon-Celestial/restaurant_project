import MainRouter from "./router.tsx";
import {DataContextProvider} from "./Context/DataContext.tsx";
import {BasketContextProvider} from "./Context/BasketContext.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {WishListContextProvider} from "./Context/WishListContext.tsx";


export const App = () => {
    return (
        <WishListContextProvider>
            <BasketContextProvider>
                <DataContextProvider>
                    <MainRouter/>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                    />

                </DataContextProvider>
            </BasketContextProvider>
        </WishListContextProvider>
    )
}

