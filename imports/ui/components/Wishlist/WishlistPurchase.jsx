import React, {Component} from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
export default class WishlistPurchase extends Component {
  constructor(props) {
      super(props);
    }

  render() {
        let product = this.props.product;
        let username = this.props.username;
        let purchase = () => {
          return Bert.alert('YAY', 'success',
            'fixed-top', 'fa-thumbs-o-up');
        }
    return (
        <div>
          <button onClick={purchase} type="submit" className="btn btn-default"> PURCHASE </button>
        </div>


    )
  }
}
