import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Affiliate } from '/imports/api/wishlist/affiliate.js';

Meteor.publish("list_affiliate", function (username) {
  let selector = {
    affiliate_username: username
  };
  return Affiliate.find(selector);
});
