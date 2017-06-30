import React, {Component} from 'react';
import { browserHistory } from 'react-router';
export default class SignIn extends Component {

  render() {
    let submitSignIn = () => {
      const password = this.refs.password.value.trim();
      const email = this.refs.email.value.trim();
      Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
          return Bert.alert('Invalid Email Address and/or Password. Please try again.', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          browserHistory.push('/')
        }
      });
    }
    return (
      <div className="htmlFor-horizontal">
        <div className="htmlFor-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input ref="email" type="email" className="htmlFor-control" id="inputEmail3" placeholder="Email"/>
          </div>
        </div>
        <div className="htmlFor-group">
          <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input ref="password" type="password" className="htmlFor-control" id="inputPassword3" placeholder="Password"/>
          </div>
        </div>
        <div className="htmlFor-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button onClick={submitSignIn} type="submit" className="btn btn-default">Login</button>
          </div>
        </div>

      </div>
    )
  }
}
