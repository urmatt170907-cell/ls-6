import { Routes, Route } from "react-router-dom";
import MainListPage from "./pages/MainListPage/MainListPage";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainListPage />} />
            <Route path="/detailed/:id" element={<DetailedPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
