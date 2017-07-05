import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { MassDrops } from '/imports/api/massdrops/massdrops.js';

Meteor.publish("one_drop", function (productId) {


  let selector = {
    product_id: productId
  }

  return MassDrops.find(selector);
});
