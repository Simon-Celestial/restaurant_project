import {Outlet} from "react-router-dom";
import {ScrollOnTop} from "./Common/ScrollOnTop/ScrollOnTop.tsx";
import {MoveTopButton} from "./Common/MoveTopButton/MoveTopButton.tsx";

export const MainLayout = () => {
    return (
        <>
            <ScrollOnTop/>
            <MoveTopButton/>
            <Outlet/>
        </>
    )
}