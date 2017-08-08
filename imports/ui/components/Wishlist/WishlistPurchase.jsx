import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
export default class WishlistPurchase extends Component {
  constructor(props) {
      super(props);
    }

  render() {
        let affiliateUsername = this.props.username;
        let userId = Meteor.userId();
        let user = Meteor.users.findOne({_id: userId});
        let username =  "null"
        if (typeof(user) != 'undefined') {
              username = user.profile.username;
        }

        let productId = this.props.productId;
        let purchase = () => {
          if (username == "null") {
            browserHistory.push("/login")
            return;
          }
          let insertValue = {
            product_id: productId,
            affiliate_username: affiliateUsername,
            buyer_username: username,
            product_name: this.props.name,
            image: this.props.image,
            affiliate_earned: this.props.affiliateEarned
          }
          Meteor.call("insertAffiliate", insertValue, function (error, result) {
            if(result === 'success'){
                      return Bert.alert('Thanks for your purchase!', 'success',
                        'fixed-top', 'fa-thumbs-o-up');

            }
            else{
                return Bert.alert('Error while processing your request.' +
                  'Please try again.', 'danger', 'fixed-top', 'fa-frown-o');
            }
          });
        }
    return (
        <div>
          <button onClick={purchase} type="submit" className="btn btn-default"> PURCHASE </button>
        </div>


    )
  }
}
