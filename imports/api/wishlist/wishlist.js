import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Wishlist = new Mongo.Collection("wishlist");

// WishListSchema = new SimpleSchema({
//   id : {
//     type: String,
//     label: "id",
//   },
//   product_id: {
//     type: String,
//     label: "product id"
//   },
//   user_id: {
//     type: String,
//     label: "user id"
//   },
// })
// Wishlist.attachSchema(WishListSchema);
