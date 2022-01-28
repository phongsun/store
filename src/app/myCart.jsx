import { useState } from "react";
import CartService from "../services/cartService";
import { Header } from "./header";

export const MyCart = props => {
    let cartService = new CartService();
    let initialState = cartService.getCart();
    const [cart, setCart] = useState(initialState);

    return <div className="container mt-4">
        <Header/>
        <table className="table table-condensed table-striped">
            <thead>
                <tr>
                    <th>Qty</th>
                    <th>Product</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.items.map(
                        cartItem =>
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.product.name} - ${cartItem.product.price}</td>
                                <td>${cartItem.totalPrice}</td>
                            </tr>
                    )
                }
            </tbody>
        </table>
        <div id="cart-total"><b>${cart.total.toFixed(2)}</b></div>
    </div>
}