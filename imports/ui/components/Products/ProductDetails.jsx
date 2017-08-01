import React, {Component} from 'react';
import accounting from 'accounting';
import AddReview from '../Reviews/AddReviews.jsx';
import AddWishlist from '../Wishlist/AddWishlist.jsx';

import ProductReviews from '../Reviews/ProductReviews.jsx';


export default class ProductDetails extends Component {
  render() {
    let {product, reviews} = this.props;

    let flavors = [];
    if (product.flavors) {
      flavors = product.flavors;
    }
    let flavorList = flavors.map(function(flavor, i){
    });

    let addWishlist = () => {

      }

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
            <AddWishlist product={product}/>
            <div className="text-center">
              <AddReview product={product}/>
              <ProductReviews reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
