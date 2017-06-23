import React, {Component} from 'react';
import ProductDetails from '/imports/ui/components/Products/ProductDetails.jsx';


export default class ProductPage extends Component {
  render() {
      if (this.props.loading) {
        return <h1> loading... </h1>
      }
      else {
        let product = this.props.product;
      return (
        <div>
          <div className="container">
               <ProductDetails product={product}/>
          </div>
        </div>
      )
    }
  }
}
