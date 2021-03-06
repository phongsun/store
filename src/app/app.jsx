import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { ProductDetails } from "./productDetails";
import { ProductList } from "./productList";
import { MyCart } from "./myCart";
import CartService from "../services/cartService";
import { Header } from "./header";
import { ROUTES } from "../routes";

export const App = () => {
    let cartService = new CartService();

    return (
        <>
        <Router>
            <Routes>
                {/*<Route path="/products/:productId" element={<ProductDetails cartService={cartService}/>}></Route>
                <Route path="/cart" element={<MyCart/>}></Route>
                <Route path="/" element={<ProductList cartService={cartService}/>} exact="true"></Route>*/}
                {ROUTES.map((route, index) => <Route key={index} { ...route } />)}
            </Routes>
        </Router>
        </>
    );
}