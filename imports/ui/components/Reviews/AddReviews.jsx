import React, {Component} from 'react';
import StarRating from 'star-rating-react';
export default class AddReviews extends Component {
  constructor(props) {
      super(props);
      this.state={
        starRating: 0
      };
    }
 
  render() {
        let product = this.props.product;
        let setRating = (val) => {
          this.setState({'starRating' : val});
        }

        let submitReview = () => {

        let review = this.refs.review.value.trim();
        let insertValue = {
            product_id: product._id,
            stars: this.state.starRating,
            review: review
          }
          Meteor.call("insertReview", product._id, insertValue,  function(error, result){
            if(result === 'success'){
                      return Bert.alert('Thank you for your review.', 'success',
                        'fixed-top', 'fa-thumbs-o-up');

            }
            else{
                return Bert.alert('Error while processing your review.' +
                  'Please try again.', 'danger', 'fixed-top', 'fa-frown-o');
            }
          });
          this.setState({'starRating' : 0});
          this.refs.review.value ="";
        }
    return (
    <div>
      <hr className="lineBreak"/>
      <h1> Add Your Review</h1>
      <StarRating
        size= {5}
        value= {this.state.starRating}
        onChange={setRating}
      />
      <br></br>

      <div className="htmlFor-group">
        <label htmlFor="inputReview" className="col-sm-2 control-label">Review</label>
        <div className="col-sm-10">
        <textarea ref="review" rows="4" cols="75" placeholder="Add your Review Here" >

        </textarea>
        </div>
      </div>
      <div className="htmlFor-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button onClick={submitReview} type="submit" className="btn btn-default">Submit</button>
        </div>
      </div>
    </div>

    )
  }
}
