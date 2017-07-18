import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';
import { connect }  from 'react-redux';
import setCatalogType from '/imports/ui/redux/actions/Catalog/setCatalogType.js';
class Header extends Component {
  render() {
    let {currentUser, isLoggedIn, catalogType, dispatch} = this.props;
    let logOut = () => {
      Meteor.logout(function(error, result){});
    }
    console.warn('catalogType ', catalogType);
    let changePrice = () => {
      if (catalogType === 'retail') {
        dispatch(setCatalogType('wholesale'));
      }
      else {
        dispatch(setCatalogType('retail'));
      }
    }
    return (
      <div className="col-sm-12">
        <div className="col-sm-8">
          <ul className="nav nav-tabs">
            <li  className="active red"><Link to="/" className = "red">Home</Link></li>
            <li ><Link to="/drops">Mass Drops</Link></li>
            <li ><Link to="/signup">SignUp</Link></li>
            <li ><Link to="/signin">SignIn</Link></li>
          </ul>
        </div>
        <div className="col-sm-4" style={{textAlign: 'right'}}>
          <span style={{paddingRight: "20px"}}>
            <button className="btn btn-default" onClick={changePrice}> {catalogType === 'retail' ? 'Get Wholesale Price' : 'Get Retail Price'}</button>
          </span>
          {isLoggedIn ?
            <span>{currentUser.profile.name} <button onClick={logOut} className="btn btn-danger">Logout</button></span>
          : <Link to="/signin" className="btn btn-success">Login</Link>
          }
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    catalogType: state.catalogType
  };
}
export default connect(mapStateToProps)(Header);
