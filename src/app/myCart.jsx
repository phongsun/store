import { useState } from "react";
import CartService from "../services/cartService";

export const MyCart = props => {
    let cartService = new CartService();
    let initialState = cartService.getCart();
    const [cart, setCart] = useState(initialState);

    return <>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Qty</th>
                <th>Product</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {
            cart.items.map( cartItem => 
            <tr key={cartItem.product.id}>
                <td>{cartItem.quantity}</td>
                <td>{cartItem.product.name} - {cartItem.product.price}</td>
                <td>{cartItem.totalPrice}</td>
            </tr>)
            }
        </tbody>
    </table></>
}