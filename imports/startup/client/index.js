import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import routes from './routes.jsx';
import '/imports/ui/stylesheets/style.css';

//this says that we're going to import routes!
Meteor.startup(() => {
  render(routes(), document.getElementById('app'));
});
