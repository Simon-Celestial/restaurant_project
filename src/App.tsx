import MainRouter from "./router.tsx";
import {DataContextProvider} from "./Context/DataContext.tsx";

export const App = () => {
    return (
        <DataContextProvider>
            <MainRouter/>
        </DataContextProvider>
    )
}

