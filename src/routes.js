import React from 'react';
import { ProductList } from './app/productList';
import { ProductDetails } from './app/productDetails';
import CartService from './services/cartService';
import { MyCart } from './app/myCart';

export const ROUTES = [
    { path: '/', exact: true, element: <ProductList cartService={new CartService}/> },
    { path: '/products/:productId', element: <ProductDetails cartService={new CartService}/> },
    { path: '/cart', element: <MyCart/> }
];