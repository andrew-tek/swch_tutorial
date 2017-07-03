import React, {Component} from 'react';
import DropGrid from '/imports/ui/components/Drops/DropGrid.jsx';


export default class DropsPage extends Component {
  render() {
      if (this.props.loading) {
        return <h1> loading... </h1>
      }
      else {
        let products = this.props.products;
        let productsList = products.map(function(product){
            return <DropGrid key={product._id} product={product}/>
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
