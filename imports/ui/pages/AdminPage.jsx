import React, {Component} from 'react';
import ProductGrid from '/imports/ui/components/Products/AdminProductGrid.jsx';
import {Link} from 'react-router';

export default class AdminPage extends Component {
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
          <div>
            <br></br>
              <br></br>
          <Link to="/insert">
            <button className= "btn-success btn-primary"> Add Product </button>
          </Link>
          </div>
          <div className="container">
            {productsList}
          </div>
        </div>
      )
    }
  }
}
