import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ProductsRepository } from "../api/productRepository";
import CartService from "../services/cartService";

export const ProductList = (props) => {
    let productRepository = new ProductsRepository();
    // 1. useState (create state state variables with useState hook)
    const [products, setProducts] = useState(undefined);
    // 2. useEffect (get data from API)
    useEffect(
        () => {
            // call repository to get data from API
            productRepository.getProducts().then(x => setProducts(x));
            // set products with return data
        },
        []
    )
    
    // this is the equivalent of Redirect in class component
    const navigate = useNavigate();
    let addToCart = (product) => {
        props.cartService.addToCart(product);
        navigate('/cart');
    }
    // 3. render
    if (!products) {
        return (
            <div>loading...</div>
        )
    }
    return (
        <>
            <div className="form-group">
                <h4 className="bg-dark text-white" style={{marginBottom: 0}}>Store</h4>
                <p className="bg-light text-secondary">Tasty snacks</p>
            </div>
            <div className="row">
                {
                    products.map(
                        product =>
                            <div className="col card productList-item"><img src={product.imageUrl} />
                                <p className="productList-price productList-column">{product.price}</p>
                                <h2 className="productList-name">{product.name}</h2>
                                <Link to={`products/${product.id}`} class="btn btn-primary productList-productDetails">Product Details</Link>
                                <button type="button" className="btn btn-warning"
                                onClick={()=>addToCart(product)}>Add to Cart</button>
                            </div>
                    )
                }
            </div>
        </>
    )
}