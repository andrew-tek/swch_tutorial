import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import OneDropPage from '/imports/ui/pages/OneDropPage.jsx';
import {MassDrops} from '/imports/api/massdrops/massdrops.js';

export default createContainer((props) => {
  let productId = props.params.product_id;
  const oneDropSub = Meteor.subscribe('one_drop', productId);
  let selector = {product_id: productId};
 const product = MassDrops.findOne(selector);
  return {
    product: product,
    loading: !oneDropSub.ready()
  };
}, OneDropPage);
