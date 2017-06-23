import React, {Component} from 'react';
import {Link} from 'react-router';
export default class Name extends Component {

  render() {
    let product = this.props.product;
    return (
      <div className="col-sm-4">
        <img className="img-responsive"   src={product.image}/>
        <h2 className="text-center"> {product.name}  </h2>
        <div className="text-center">
          {product.price}
          <Link to={'/product/' + product._id}>
            <button className="btn btn-primary text-center"> Buy Now </button>
          </Link>
        </div>
      </div>
    )
  }
}
