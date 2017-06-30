import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Reviews } from '/imports/api/reviews/reviews.js';

Meteor.methods({
    insertReview: function(productId, insertValue) {
    insertValue.user_id= this.user_id;
    let reviewId = Reviews.insert(insertValue);

    if(reviewId) {
        return "success";
    } else {

        return "error";
    }

  },

});
