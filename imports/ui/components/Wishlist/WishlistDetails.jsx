import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
import accounting from 'accounting';
import WishlistPurchase from '/imports/ui/components/Wishlist/WishlistPurchase.jsx';

export default class WishlistDetails extends Component {
  render() {
    let product = this.props.products;
    let price = product.price * 0.1;
    let productId = product._id;
    let username = this.props.username;
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
            <h2 className="text-center"> {accounting.formatMoney(product.price)} </h2>
            <WishlistPurchase productId = {productId} username = {username} affiliateEarned = {price} name = {product.name} image = {product.image}/>
            <div className="text-center">
            </div>
          </div>
        </div>
      </div>
    )
  }
}
