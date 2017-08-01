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
          <div className="col-sm-3">
          <Link key={i} to={'/blogs/' + blog._id}>
            <h1>
              {blog.title}
              <br/>
            </h1>
          </Link>
        </div>)
      });
      return (
        <div>
          <div className="pull-right">
          <Link to={'/blog/write'}>
            <span style={{paddingRight: "100px"}}> Write Blog </span>
          </Link>
          <br/>
          <br/>
          at
        </div>
          <div>
            {blogsList}
          </div>
        </div>
      )
    }
  }
}
