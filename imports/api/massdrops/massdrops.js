import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const MassDrops = new Mongo.Collection("mass_drops");

OrdersSchema = new SimpleSchema({
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

TiersSchema = new SimpleSchema({
  id : {
    type: Number,
    label: "tier id"
  },
  participants: {
    type: Number,
    label: "participants",
    defaultValue: 0
  },
  price : {
    type: Number,
    label: "pricing",
    decimal: true
  }
});
MassDropSchema = new SimpleSchema({
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

  company_id: {
    type: String,
    label: "company id",
    max: 128,
    optional: true
  },

  company_name: {
    type: String,
    label: "company name",
    max: 128,
    optional: true
  },

  shop_id: {
    type: String,
    label: "shop id",
    max: 128,
    optional: true
  },

  shop_name: {
    type: String,
    label: "shop name",
    max: 128,
    optional: true
  },

  brand_id: {
    type: String,
    label: "brand_id",
    max: 128,
  },

  brand_name: {
    type: String,
    label: "brand_name",
    max: 128,
  },

  brand_logo: {
    type: String,
    label: "brand_logo",
    max: 128,
    optional: true
  },

  product_catalog_ids: {
    type: [String],
    label: "product catalog ids",
    max: 128
  },

  name: {
    type: String,
    label: "product name",
    max: 128
  },

  "images": {
    type: [String],
    label: 'images',
    optional: true
  },

  description: {
    type: String,
    label: "product description",
    max: 128
  },

  flavors: {
    type: [String],
    label: "flavors",
    optional: true
  },

  options: {
    type: [Object],
    label: 'options',
    optional: true,
    blackbox: true
    },

  org_price : {
    type: Number,
    label: "orginal price",
    decimal: true,
    defaultValue: 0,
    optional: true
  },
  cur_tier : {
    type: Object,
    label: "current tier",
    optional: true,
    blackbox: true
  },

  tiers: {
    type: TiersSchema,
    label: "tiers"
  },

  units_in_stock: {
    type: Number,
    label: "units in stock",
    optional: true
  },

  units_ordered: {
    type: Number,
    label: "units ordered",
    defaultValue: 0
  },

  participants: {
    type: Number,
    label: "participants",
    defaultValue: 0
  },

  start_date: {
    type: Date,
    label: "start date",
    optional: true
  },

  end_date: {
    type: Date,
    label: "end date",
    optional: true
  },

  orders: {
    type: OrdersSchema,
    label: "orders"
  },

});


MassDrops.attachSchema(MassDropSchema);
