import React, {Component} from 'react';
import WishlistDetails from '/imports/ui/components/Wishlist/WishlistDetails.jsx';


export default class PurchaseWishlistPage extends Component {
  render() {
    let products = this.props.products;
    let username = this.props.username;
      if (this.props.loading) {
        return <h1> loading... </h1>
      }
      else {
      return (
        <div>
          <div className="container">
               <WishlistDetails products = {products} username = {username}/>
          </div>
        </div>
      )
    }
  }
}
