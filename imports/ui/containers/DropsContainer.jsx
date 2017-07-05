import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import DropsPage from '/imports/ui/pages/DropsPage.jsx';
import {MassDrops} from '/imports/api/massdrops/massdrops.js';

export default createContainer((props) => {
  const dropsSub = Meteor.subscribe('list_drops');


  let selector = {};
 const products = MassDrops.find(selector).fetch();
  return {
    products: products,
    loading: !dropsSub.ready()
  };
}, DropsPage);
