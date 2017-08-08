import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {Products} from '/imports/api/products/products.js';

Meteor.publish("purchase_wishlist", function (productId) {
  let selector = {
    _id: productId
  };
   return Products.find(selector);
});
