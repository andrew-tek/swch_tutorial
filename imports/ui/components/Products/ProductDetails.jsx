import React, {Component} from 'react';
import accounting from 'accounting';

export default class ProductDetails extends Component {

  render() {
    let product = this.props.product;
    let flavors = [];
    if (product.flavors) {
      flavors = product.flavors;
    }
    let flavorList = flavors.map(function(flavor, i){
      console.log('length', product.flavors.length);
      if (i == product.flavors.length-1) {
        console.log('id',i);
        return <span key={i}>{flavor}</span>;
        }
        else {
          return <span key={i}>{flavor} | </span>
        }

    });
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img src={product.image} />
            <h2 className="text-center"> {product.name} </h2>
            {product.description ? <p className="lead">
              <strong> Description: </strong>
              <p> {product.description}</p>
            </p> : null}
            <p className="lead">
              <strong> Flavors: </strong>

              {product.flavors ? flavorList : null}
            </p>
            <h2 className="text-center"> {accounting.formatMoney(product.price)} </h2>
            <button className="btn btn-primary text-center"> Add to Cart </button>
          </div>
        </div>
      </div>

    )
  }
}
