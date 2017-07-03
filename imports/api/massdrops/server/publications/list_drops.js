import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { MassDrops } from '/imports/api/massdrops/massdrops.js';

Meteor.publish("list_drops", function () {

  let currentDate = new Date();

  let selector = {
    start_date : {$lt: currentDate},
    end_date: {$gt: currentDate}
  }

  return MassDrops.find(selector);
});
