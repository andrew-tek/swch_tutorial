import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Wishlist } from '/imports/api/wishlist/wishlist.js';
import {Products} from '/imports/api/products/products.js';
import { _ } from 'meteor/underscore';

Meteor.publish("list_wishlist", function (userId) {
  let selector = {
    user_id: userId
  };
  let wishlistCursor = Wishlist.find(selector);
  let wishlist = wishlistCursor.fetch();
  let productIds = _.pluck(wishlist, 'product_id');
  let productsCursor = Products.find({_id: {$in: productIds}});
  let products = productsCursor.fetch();
  return [wishlistCursor, productsCursor];
});
