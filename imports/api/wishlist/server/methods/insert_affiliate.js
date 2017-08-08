import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Affiliate } from '/imports/api/wishlist/affiliate.js';

Meteor.methods({
    insertAffiliate: function(insertValue) {
      console.warn('insert value', insertValue);
    let affiliateId = Affiliate.insert(insertValue);
    if(affiliateId) {
        return "success";
    } else {

        return "error";
    }
  },
});
