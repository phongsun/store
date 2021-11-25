import React from 'react';
import { ProductReview } from "../models/productReview";
import { Rating } from "./rating";

export class ReviewForm extends React.Component {
    state = {
        username: '',
        rating: '',
        comment: ''
    }


    addReview = (userName, date, rating, comment) => {
        this.props.newReview(new ProductReview(userName, rating, comment, date));
        let test = new ProductReview(userName, rating, comment, date);
        /*for(let thing of this.props.reviewList){
            alert("Are you? " + thing.userName + " " + thing.rating + " " + thing.comment);
        }*/
    }

    saveUsername = (event) => {
        this.setState({ username: event.target.value });
    }
    saveRating = (event) => {
        this.setState({ rating: event.target.value });
    }
    saveComment = (event) => {
        this.setState({ comment: event.target.value });
    }
    work = (event) => {
        if (this.state.rating == "") {
            alert("Choose a rating!");
        } else {
            this.props.newReview(this.state.username, this.state.rating, this.state.comment);
            event.preventDefault();
            this.setState({
                username: '',
                rating: '',
                comment: ''
            });
        }
    }

    render() {
        return (
            <>
                <p></p>
                <form onSubmit={this.work}>
                    <div className="form-group">
                        <div className="card bg-secondary text-white review-padding border-1"><h4>Add Review</h4></div>
                        <div classname="review-form">
                        <br/>
                        <div className="row">
                            <div className="col-md-7">
                                <label htmlFor="userName" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="userName" name="userName" value={this.state.username} onChange={this.saveUsername}></input>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="rating" className="form-label">Rating</label>
                                <select id="rating" className="form-select" name="rating" value={this.state.rating} onChange={this.saveRating}>
                                    <option></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option></select>
                            </div>
                            <div className="col-md-2"><Rating value={this.state.rating} /></div>
                        </div>
                        
                        <div className="form-group"><label htmlFor="comment" className="form-label">Comment</label>
                            <textarea id="comment" className="form-control" rows="4" name="comment" value={this.state.comment} onChange={this.saveComment}></textarea></div>
                        <input type="submit" value="Submit" className="btn btn-primary submit-button" />
                        </div>
                    </div>
                </form>
            </>
        );
    }
}