import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./Layout/Pages/HomePage/HomePage.tsx";
import {MainLayout} from "./Layout/MainLayout.tsx";
import {PageNotFound} from "./Layout/Pages/PageNotFound/PageNotFound.tsx";
import {DetailsPage} from "./Layout/Pages/DetailsPage/DetailsPage.tsx";
import {ContactPage} from "./Layout/Pages/ContactPage/ContactPage.tsx";
import {CareersPage} from "./Layout/Pages/CareersPage/CareersPage.tsx";

const router = () => createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "*",
                element: <PageNotFound/>
            },
            {
                path: '/',
                element: <HomePage/>,
            },
            {
                path: 'home',
                element: <HomePage/>,
            },
            {
                path: 'details/:category',
                element: <DetailsPage/>,

            },
            {
                path: 'contact',
                element: <ContactPage/>,
            },
            {
                path: 'careers',
                element: <CareersPage/>,

            }

        ],
    },

]);
const MainRouter = () => {

    return <RouterProvider router={router()}/>;
};

export default MainRouter;