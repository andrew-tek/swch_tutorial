import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';

Meteor.methods({
    insertProduct: function(product) {

    let productId = Products.insert(product);

    if(productId) {
        return "success";
    } else {
        return "error";
    }

  },

});
