import React, {Component} from 'react';
import {Link} from 'react-router';
import accounting from 'accounting';
export default class AffiliateGrid extends Component {

  render() {
    let affiliate = this.props.affiliate;
    return (

      <tr>
        <td>{affiliate.product_name}</td>
        <td>{affiliate.buyer_username}</td>
        <td>{accounting.formatMoney(affiliate.affiliate_earned)}</td>
      </tr>
    )
  }
}
