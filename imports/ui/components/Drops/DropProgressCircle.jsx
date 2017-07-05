import React, {Component} from 'react';
export default class DropProgressCircle extends Component {
  render() {
    return (
      <button type="button" className="btn btn-default btn-circle btn-xl">
       $25.99<br/>
       <span className = "needed"> 10 needed </span>
      </button>
    )
  }
}
