import React from 'react';
import { ProductList } from './app/productList';
import { ProductDetails } from './app/productDetails';

export const ROUTES = [
    { path: '/', exact: true, element: <ProductList cartService={cartService}/> },
    { path: '/products/:productId', element: <ProductDetails cartService={cartService}/> },
    { path: '/cart', element: <MyCart/> }
];