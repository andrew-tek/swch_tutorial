import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';

Meteor.publish("list_products", function () {
  let selector = {};
  return Products.find(selector);
});
