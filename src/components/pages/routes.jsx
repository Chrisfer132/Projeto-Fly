import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Home";
import Paginaservicos from "./Paginaservicos";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Home /> } path="/"  />
                <Route element={<Paginaservicos />} path="/servicos"  />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;