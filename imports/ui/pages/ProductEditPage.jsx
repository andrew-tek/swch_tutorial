import React, {Component} from 'react';
import ProductEdit from '/imports/ui/components/Products/ProductEdit.jsx';


export default class ProductEditPage extends Component {
  render() {
      if (this.props.loading) {
        return <h1> loading... </h1>
      }
      else {
        let product = this.props.product;
      return (
        <div>
          <div className="container">
               <ProductEdit product={product}/>
          </div>
        </div>
      )
    }
  }
}
