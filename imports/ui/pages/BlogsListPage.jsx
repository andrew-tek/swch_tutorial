import React, {Component} from 'react';
import {Link} from 'react-router';

export default class BlogsListPage extends Component {
  render() {
    if (this.props.loading) {
      return <h1> loading... </h1>
    } else {
      let blogs = this.props.blogs;
      let blogsList = blogs.map(function(blog,i) {
        return (
          <Link key={i} to={'/blogs/' + blog._id}>
            <h1>
              {blog.title}
              <br/>
            </h1>
          </Link>)
      });
      return (
        <div>
          <div className="container">
            {blogsList}
          </div>
        </div>
      )
    }
  }
}
