import React from 'react';
import { Rating } from "./rating";

export class ReviewList extends React.Component {
    render() {
        if (!this.props.reviews || this.props.reviews.length == 0) {
            return (
                <>
                    <p>Be the first to add a review!</p>
                </>
            );
        }

        return (
            <>
                <h1>Product Reviews <span style={{ color: "gray" }}>({this.props.reviews.length})</span></h1>
                {
                    this.props.reviews.map
                        (review => <div>
                            <div className="grey-review-header"><Rating value={review.rating} /></div>
                            <div className="card bg-light text-secondary border-1 review-padding">
                                <div className="review-subhead">
                                    <p className="review-header">{review.userName}    <span className="float-right">{review.date}</span></p>
                                </div>
                                <p className="comment">Comment: {review.comment}</p>
                            </div>
                        </div>
                        )
                }

            </>
        );
    }
}