import React, {Component} from 'react';
import StarRating from 'star-rating-react';
import ReviewGrid from './ReviewGrid.jsx';

export default class ProductReviews extends Component {

  constructor(props) {
      super(props);
      this.state={
        avgRating: 0,
        totalStars: 0
      };

      if(props.reviews.length > 0) {
        let reviews = props.reviews;
        var countStars = 0;
        for (i = 0; i < reviews.length; i++) {
          countStars += reviews[i].stars;
        }
        let avgStars = countStars/reviews.length;
        this.state.totalStars = countStars;
        this.state.avgRating = avgStars;
      }
  }

  render() {
    let reviews = this.props.reviews;
    console.log('review ', reviews);
    let listReviews = reviews.map(function(review){
        return <ReviewGrid key={review._id} review={review}/>
      });

    return (
      <div>
        Avg Rating:
        <StarRating
          size= {5}
          value= {this.state.avgRating}
        />
        {listReviews}
      </div>

    )
  }
}
