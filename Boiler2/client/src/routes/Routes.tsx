import { Route, Routes } from "react-router";
import { RouterContainer } from "./RouteContainer";
import App from "../App";
import Input from "../views/Input";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path={RouterContainer.Homepage} element={<App />} />
            <Route path={RouterContainer.OrderInput} element={<Input />} />
        </Routes>
    );
};

export default AppRoutes;