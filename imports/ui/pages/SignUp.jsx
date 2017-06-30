import React, {Component} from 'react';

export default class Signup extends Component {

  render() {
    let submitSignUp = () => {
      const name = this.refs.name.value.trim().charAt(0).toUpperCase()
        + this.refs.name.value.trim().substr(1).toLowerCase();
      const password = this.refs.password.value.trim();
      const email = this.refs.email.value.trim();
      const profile = { name: name }

      Accounts.createUser({email, password, profile}, error => {
         const userId = Meteor.userId();
       });
    }
    return (

  <div className="htmlFor-horizontal">
    <div className="htmlFor-group">
      <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
    <div className="col-sm-10">
        <input ref="name" type="text" className="htmlFor-control" id="name" placeholder="Name"/>
      </div>
  </div>
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
      <button onClick= {submitSignUp}type="submit" className="btn btn-default">Sign Up</button>
    </div>
  </div>
</div>
    )
  }
}
