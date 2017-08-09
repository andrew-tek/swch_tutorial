import React, {Component} from 'react';
import accounting from 'accounting';
import AffiliateGrid from '/imports/ui/components/Wishlist/AffiliateGrid.jsx';


export default class ViewWishlistPage extends Component {
  render() {
      if (this.props.loading) {
        return <h1> loading... </h1>
      }
      else {
        let affiliate = this.props.affiliate;
        console.warn('affiliate', affiliate);
        let totalCost = 0;
        let affiliateList = affiliate.map(function(affiliate,i){
            totalCost = totalCost + affiliate.affiliate_earned;
            return <AffiliateGrid key={i} affiliate = {affiliate} />
  });
      return (
        <div>
          <div className="container">
            <table className="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>User Purchased</th>
                <th>Earned</th>
              </tr>
            </thead>
                <tbody>
              {affiliateList}
            </tbody>
              </table>
            <h1> Total Affiliates Earned: {accounting.formatMoney(totalCost)} </h1>

          </div>
        </div>
      )
    }
  }
}
