import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Blogs } from '/imports/api/blogs/blogs.js';

Meteor.methods({
  insertBlog: function (blog) {
    blog.user_id = this.userId;
    let blogId = Blogs.insert(blog);

    if (blogId) {
      return "success";
    } else {
      return "error";
    }
  },

});
