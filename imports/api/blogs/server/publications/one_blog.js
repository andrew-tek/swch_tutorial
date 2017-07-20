import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Blogs } from '/imports/api/blogs/blogs.js';

Meteor.publish ("one_blog", function (id) {

  let selector = {
    _id: id
  };
  return Blogs.find(selector);
});
