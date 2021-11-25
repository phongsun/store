import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ProductsRepository } from "../api/productRepository";

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
        }
    )
    // 3. render
    if(!products){
        return (
            <div>loading...</div>
        )
    }
    return (
        <div>
            {
                products.map(
                    product =>
                        <div><img src={product.imageUrl} />
                            <p>{product.price}</p>
                            <h2>{product.name}</h2>
                            <Link to={`product/${product.id}`}>Product Details</Link>
                            <button type="button">Add to Cart</button>
                        </div>
                )
            }
        </div>
    )
}