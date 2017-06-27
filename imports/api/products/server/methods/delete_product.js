import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';

Meteor.methods({
    deleteproduct: function(productID) {

    let product = Products.remove(productID);

    if(product) {
        return "success";
    } else {
        return "error";
    }

  },

});
