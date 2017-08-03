import React, {Component} from 'react';
import accounting from 'accounting';
import AddReview from '../Reviews/AddReviews.jsx';
import AddWishlist from '../Wishlist/AddWishlist.jsx';
import ProductReviews from '../Reviews/ProductReviews.jsx';

export default class ProductDetails extends Component {
  render() {
    let {product, reviews} = this.props;
    let userId = Meteor.userId();
    let user = Meteor.users.findOne({_id: userId});
    let username = user.profile.username;
    let flavors = [];
    if (product.flavors) {
      flavors = product.flavors;
    }
    let flavorList = flavors.map(function(flavor, i){
    });

    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img src={product.image} />
            <h2 className="text-center"> {product.name} </h2>
            {product.description ? <div className="lead">
              <strong> Description: </strong>
              <p>
                 {product.description}
              </p>
            </div> : null}
            <p className="lead">
              <strong> Flavors: </strong>

              {product.flavors ? flavorList : null}
            </p>
            <h2 className="text-center"> {accounting.formatMoney(product.price)} </h2>
            <button className="btn btn-primary text-center"> Add to Cart </button>
            <AddWishlist product={product} username={username}/>
            <div className="text-center">
              <AddReview product={product, username}/>
              <ProductReviews reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
