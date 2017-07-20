import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import OneBlogPage from '/imports/ui/pages/OneBlogPage.jsx';
import {Blogs} from '/imports/api/blogs/blogs.js';

export default createContainer((props) => {
  let blogId = props.params.blog_id;
  console.log('id',blogId);
  const oneBlogSub = Meteor.subscribe('one_blog', blogId);
  let selector = {_id: blogId};
 const blog = Blogs.findOne(selector);
  return {
    blog: blog,
    loading: !oneBlogSub.ready()
  };
}, OneBlogPage);
