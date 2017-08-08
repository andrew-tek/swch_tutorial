import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Wishlist } from '/imports/api/wishlist/wishlist.js';

Meteor.methods({
    deletewishlist: function(productID, username) {
    let selector = {
      product_id: productID,
      username: username
    };
    let wishlist = Wishlist.remove(selector);
    if(wishlist) {
        return "success";
    } else {
        return "error";
    }
  },

});
