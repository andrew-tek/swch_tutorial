import React, {Component} from 'react';
import {Link} from 'react-router';
import accounting from 'accounting';
export default class AffiliateGrid extends Component {

  render() {
    let affiliate = this.props.affiliate;
    return (
      <div className="col-sm-3">
        <img className="img-responsive"   src={affiliate.image}/>
        <h2 className="text-center"> {affiliate.product_name}  </h2>
        <h8 className="text-center"> Purchased by: {affiliate.buyer_username}  </h8>
        <div className="text-center">
          <h8> <span> Earned: {accounting.formatMoney(affiliate.affiliate_earned)} </span> </h8>
        </div>
      </div>
    )
  }
}
