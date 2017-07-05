import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const DropOrders = new Mongo.Collection("droporders");

DropOrdersSchema = new SimpleSchema({

  id : {
    type: String,
    label: "id",
  },
  order_id: {
    type: String,
    label: "order id"
  },
  user_id: {
    type: String,
    label: "user id"
  },

  quantity: {
    type: Number,
    label: "quantity"
  },

  tier_id: {
    type: Number,
    label: "tier id"
  },

  reserved_date: {
    type: Date,
    label: "reserved date",
    optional: true,
    denyUpdate: false,
    autoValue: function() {
      if (this.isInsert) return new Date();
      else if (this.isUpsert) return {$setOnInsert: new Date};
      else return this.unset();
    }
  }
});

DropOrders.attachSchema(DropOrdersSchema);
