import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AffiliatePage from '/imports/ui/pages/AffiliatePage.jsx';
import {Products} from '/imports/api/products/products.js';
import {Affiliate} from '/imports/api/wishlist/affiliate.js';

export default createContainer((props) => {
  let userId = Meteor.userId();
  let user = Meteor.users.findOne({_id: userId});
  let username = user.profile.username;

  const affiliateSub = Meteor.subscribe('list_affiliate', username);
  let selector = {
    affiliate_username: username
  }
 const affiliate = Affiliate.find(selector).fetch();
 console.warn('affiliare', affiliate);
  return {
    affiliate: affiliate,
    loading: !affiliateSub.ready()
  };
}, AffiliatePage);
