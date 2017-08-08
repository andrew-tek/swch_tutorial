import React, {Component} from 'react';

export default class DeleteWishlist extends Component {

  render() {
    let productID = this.props.productID;
    let username = this.props.username;
    let deleteWishlist = () => {
      Meteor.call("deletewishlist", productID, username,  function(error, result) {
        if (result === 'success') {
          console.warn('successful');
        }
        else {
          console.warn('error');
          return;
        }
    });
  }
    return (
    <div>
      <button className= "btn-danger" onClick={deleteWishlist}>Delete</button>
    </div>
    )
  }
}
