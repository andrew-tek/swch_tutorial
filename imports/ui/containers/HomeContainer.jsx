import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import HomePage from '/imports/ui/pages/Homepage.jsx';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {
  const productSub = Meteor.subscribe('list_products');
  let selector = {};

 const products = Products.find(selector).fetch();
  return {
    products: products,
    loading: !productSub.ready()
  };

}, HomePage);
