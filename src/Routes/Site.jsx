import {Route, Routes, Navigate} from "react-router-dom";
import Home from "../Components/Main/Home";
import RakshaBandhan from "../Components/Wishes/RakshaBandhan/RakshaBandhan";
import NeedHeader from "../ConstrainsSetters/NeedHeader";
import NoHeader from "../ConstrainsSetters/NoHeader";

var AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<NeedHeader MyComp={Home} />} />
            <Route path="/Home" element={<Navigate to="/" />} />
            <Route path="/ewish/1/" element={<NoHeader MyComp={RakshaBandhan} />} />
        </Routes>
    )
}
export default AppRoutes;