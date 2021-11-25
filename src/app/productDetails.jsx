import React, { useEffect, useState } from 'react';
/*import {reviewForm, reviewList} from "./";*/
import { ProductReview } from "../models/productReview";
import { Product } from "../models/product";
import { ReviewForm } from "./reviewForm";
import { ReviewList } from "./reviewList";
import { Rating } from "./rating";
import { ProductsRepository } from '../api/productRepository';

export const ProductDetails = (props) => {
    let productRepository = new ProductsRepository();
    // set up state variable and set state function
    const [product, setProduct] = useState(undefined);
    // set up use effect hook to mimic componentDidMount()
    let productId = 1;
    useEffect(
        () => {
            if (productId) {
                // call the api to get product details for the product ID from the backend
                // set the data from the server to the productDetails state variable
                productRepository.getProduct(productId).then(x => {setProduct(x); debugger;});
            }
        },
        []
    )
    // before product has been retrieved from API, display loading...
    if (!product) {
        return <div>loading...</div>
    }
    // after product data has been retrieved from API
    return (
        <div className="container mt-4">
            <nav className="productDetails-nav">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" key="0"><a href="#">Tasty snacks</a></li>
                    <li className="breadcrumb-item active" key="1">{product.name}</li>
                </ol>
            </nav>
            <div className="card bg-light text-secondary border-0">
                <div class="row">
                    <div class="col-sm">
                        <img src={product.imageUrl}/>
                    </div>
                    <div class="col-sm-7">
                        <h1 className="productDetails-name">{product.name}</h1>
                        <div className="productDetails-price">${product.price}</div>
                        <p>{product.description}</p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <button className="btn btn-warning align-right">Add to cart</button>
                    </div>
                </div>
            </div>
            <br />
            <ReviewList reviewList={product.reviews} />
            <br />
            <ReviewForm newReview={(username, rating, comment) => {
                let newOne = new ProductReview(username, rating, comment, new Date());
                props.addNewReview(newOne);
            }} />
        </div>
    );
}