import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { DropOrders } from '/imports/api/droporders/droporders.js';

Meteor.methods({
    addOrders: function(order) {
    let orderId = DropOrders.insert(order);
    if(orderId) {
        return "success";
    } else {
        return "error";
    }

  },

});
