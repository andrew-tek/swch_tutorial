import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import BlogsListPage from '/imports/ui/pages/BlogsListPage.jsx';
import {Blogs} from '/imports/api/blogs/blogs.js';

export default createContainer((props) => {
  const id = props.params.id;
  const blogSub = Meteor.subscribe('list_blogs');

  let selector = {};
  const blogs = Blogs.find(selector).fetch();
    return {
      blogs: blogs,
      loading: !blogSub.ready()
    };
}, BlogsListPage);
