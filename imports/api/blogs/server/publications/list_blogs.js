import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Blogs } from '/imports/api/blogs/blogs.js';

Meteor.publish ("list_blogs", function () {

  let selector = {};
  return Blogs.find(selector);
});
