import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Products = new Mongo.Collection("products");
ProductSchema = new SimpleSchema({
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

  name: {
    type: String,
    label: "product name",
    max: 128
  },
  description: {
    type: String,
    label: "product description",
    max: 128,
    optional: true
  },
  image: {
    type: String,
    label: "product image link",
    max: 128
  },
  price: {
    type: Number,
    label: "product price",
    max: 128,
    decimal: true,
    defaultValue: 0,
    optional: true
  },
  flavors: {
    type: [String],
    label: "product flavors",
    optional: true
  },
  volume: {
    type: String,
    label: "product volume",
    optional: true
  },
  user_id: {
    type: String,
    label: "user_id",
    optional: true
  }

});


Products.attachSchema(ProductSchema);
