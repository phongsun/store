import React from 'react';
import {ReviewForm} from "./reviewForm";
import {ProductReview} from "../models/productReview";
import {Rating} from "./rating";

export class ReviewExist extends React.Component{
    state = {
        result: []
    }
    render(){
        let counter = 0;
        for(let review of this.props.reviews){
            if(counter == this.props.reviews.length - 1){
                this.state.result.push(<div>
                    <div className="grey-review-header"><Rating value={review.rating}/></div>
                    <div className="card bg-light text-secondary border-1 review-padding">
                    <div className="review-subhead">
                    <p className="review-header">{review.userName}    <span className="float-right">{review.date}</span></p>
                    </div>
                    <p className="comment">Comment: {review.comment}</p>
                    </div>
                    </div>
                    );
                counter = 0;
            }else{
                counter++;
            }
        }
        if(this.props.reviews.length == 0){
            return(
                <>
                    <p>Be the first to add a review!</p>
                </>
            );
        }else{
            return(
                <>
                    <p>{this.state.result}</p>
                </>
            );
        }
    }
}

export class ReviewList extends React.Component {    
    render() {
        return(
            <>
                <h1>Product Reviews <span style={{color: "gray"}}>({this.props.reviewList.length})</span></h1>
                <ReviewExist reviews = {this.props.reviewList}/>
            </>
        );
    }
}