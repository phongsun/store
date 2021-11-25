
export class ProductReview{
    constructor(userName, rating, comment, date){
        this.userName = userName;
        this.rating = rating;
        this.comment = comment;
        this.date = date.toLocaleString('en-US', {
            day: 'numeric',
            year: 'numeric',
            month: 'short'
        });
    }
}