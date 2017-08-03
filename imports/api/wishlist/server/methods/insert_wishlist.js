import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Wishlist } from '/imports/api/wishlist/wishlist.js';

Meteor.methods({
    insertWishlist: function(insertValue) {
    let wishListId = Wishlist.insert(insertValue);
    if(wishListId) {
        return "success";
    } else {

        return "error";
    }
  },
});
