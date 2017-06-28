import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.publish("current_user", function () {
  return Meteor.users.find({_id: this.userId});
});
