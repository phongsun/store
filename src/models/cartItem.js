import React from 'react';

export class Cart extends React.Component {
    constructor(product, quantity, totalPrice){
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    
}