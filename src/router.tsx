import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./Layout/Pages/HomePage/HomePage.tsx";
import {MainLayout} from "./Layout/MainLayout.tsx";
import PageNotFound from "./Layout/Pages/PageNotFound/PageNotFound.tsx";

const router = () => createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "*",
                element: <PageNotFound />
            },
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: 'home',
                element: <HomePage/>,
            }
        ],
    },

]);
const MainRouter = () => {

    return <RouterProvider router={router()}/>;
};

export default MainRouter;