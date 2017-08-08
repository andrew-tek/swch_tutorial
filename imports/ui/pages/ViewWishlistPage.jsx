import React, {Component} from 'react';
import WishlistGrid from '/imports/ui/components/Wishlist/WishlistViewGrid.jsx';


export default class ViewWishlistPage extends Component {
  render() {
      if (this.props.loading) {
        return <h1> WISHLIST LOADING... </h1>
      }
      else {
        let products = this.props.products;
        let username = this.props.username;
        let productsList = products.map(function(product,i){
            return <WishlistGrid key={i} product={product} username = {username}/>
  });
      return (
        <div>
          <div className="container">
            {productsList}

          </div>
        </div>
      )
    }
  }
}
