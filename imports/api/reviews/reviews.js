import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Reviews = new Mongo.Collection("reviews");

ReviewSchema = new SimpleSchema({
  created_at: {
    type: Date,
    label: "created at",
    optional: true,
    denyUpdate: false,
    autoValue: function() {
      if (this.isInsert) return new Date();
      else if (this.isUpsert) return {$setOnInsert: new Date};
      else return this.unset();
    }
  },
  updated_at: {
    type: Date,
    label: "updated at",
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) return new Date();
    }
  },

  product_id: {
    type: String,
    label: "product id",
    max: 128
  },
  review: {
    type: String,
    label: "review",
    optional: true
  },
  stars: {
    type: Number,
    label: "stars",
    decimal: true,
    defaultValue: 5,
    optional: true
  },
  user_id: {
    type: String,
    label: "user_id",
    optional: true
  }

});


Reviews.attachSchema(ReviewSchema);
