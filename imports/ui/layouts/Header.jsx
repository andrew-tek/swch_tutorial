import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  render() {
    return (
      <ul className="nav nav-pills">
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/second" id="blue">Second</Link></li>
        <li><Link to="/third" className="red">Third</Link></li>
      </ul>
    )
  }
}
