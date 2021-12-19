import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Session from "./components/Session";
import Seat from "./components/Seat";
import Footer from "./components/Footer";
import Success from "./components/Success";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Movie />}></Route>
                <Route path="/sessoes/:idFilme" element={<Session />}></Route>
                <Route path="/assentos/:idSessao" element={<Seat />}></Route>
                <Route path="/" element={<Movie />}></Route>
                <Route path="/" element={<Movie />}></Route>
            </Routes>
        </BrowserRouter>
    );
}