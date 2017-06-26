import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProductEditPage from '/imports/ui/pages/ProductEditPage.jsx';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {
  const id = props.params.id;
  console.log('id ', id);
  const oneProductSub = Meteor.subscribe('one_product', id);
  let selector = {_id: id};

 const product = Products.findOne(selector);
  return {
    product: product,
    loading: !oneProductSub.ready()
  };

}, ProductEditPage);
