import React, {Component} from 'react';
import ProductGrid from '/imports/ui/components/Products/ProductGrid.jsx';


export default class Homepage extends Component {
  render() {
      if (this.props.loading) {
        return <h1> loading... </h1>
      }
      else {
        let products = this.props.products;
        let productsList = products.map(function(product){
            return <ProductGrid key={product._id} product={product}/>
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
