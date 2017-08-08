import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import WishlistPage from '/imports/ui/pages/WishlistPage.jsx';
import {Wishlist} from '/imports/api/wishlist/wishlist.js';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {
  let userId = Meteor.userId();
  let user = Meteor.users.findOne({_id: userId});
  let username = user.profile.username;

  const wishlistSub = Meteor.subscribe('list_wishlist', username);
  const products = Products.find().fetch();
  let selector = {};
 const wishlist = Wishlist.find(selector).fetch();
  return {
    wishlist: wishlist,
    products: products,
    loading: !wishlistSub.ready()
  };
}, WishlistPage);
