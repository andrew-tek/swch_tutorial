import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Reviews } from '/imports/api/reviews/reviews.js';

Meteor.publish("productReviews", function (productId) {
  let selector = {
    product_id: productId
  };
  return Reviews.find(selector);
});
