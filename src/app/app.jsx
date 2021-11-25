import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductDetails } from "./productDetails";
import { ProductList } from "./productList";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/product/:productId" element={<ProductDetails/>}></Route>
                <Route path="/" element={<ProductList/>} exact="true"></Route>
            </Routes>
        </Router>
    );
}