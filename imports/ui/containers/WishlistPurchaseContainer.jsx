import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PurchaseWishlistPage from '/imports/ui/pages/PurchaseWishlistPage.jsx';
import {Wishlist} from '/imports/api/wishlist/wishlist.js';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {
  let userId = Meteor.userId();
  let username = props.params.username;
  console.warn('wishlist purchase container', username);
  let productId = props.params.product_id;


  const puchaseWishlistSub = Meteor.subscribe('purchase_wishlist', productId);
  let selector = {_id: productId};
  const products = Products.findOne(selector);
  return {
    products: products,
    username: username,
    loading: !puchaseWishlistSub.ready()
  };
}, PurchaseWishlistPage);
