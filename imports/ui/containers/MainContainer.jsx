import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import MainLayout from '/imports/ui/layouts/MainLayout.jsx';

export default createContainer((props) => {
  let userSub = Meteor.subscribe('current_user');
 let user= Meteor.user();
  return {
    loading: !userSub.ready(),
    currentUser: user,
    isLoggedIn: !!Meteor.userId()
  };

}, MainLayout);
