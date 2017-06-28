import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {Link, browserHistory} from 'react-router';

export default class Header extends Component {
  render() {
    let {currentUser, isLoggedIn} = this.props;
    // console.log('user ', user);

    let logout = () => {
          Meteor.logout();
        }
    return (
      <div className="col-sm-12">
        <div className="col-sm-8">
        <ul className="nav nav-pills">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/signup" id="blue">Sign Up</Link></li>
          <li><Link to="/signin" className="red">Sign In</Link></li>
        </ul>
      </div>
        <div className="col-sm-4" style={{textAlign: 'right'}}>
          {isLoggedIn ? <span> {currentUser.profile.name} <button onClick= {logout} className="btn btn-danger"> Logout </button> </span>
            :<Link to="/signin" className = "btn btn-success"> Login </Link>}
        </div>
    </div>
    )
  }
}
