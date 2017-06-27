import React, {Component} from 'react';

export default class DeleteButton extends Component {

  render() {
    let productID = this.props.productID;
    let deleteProduct = () => {
      Meteor.call("deleteproduct", productID, function(error, result) {
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

      <button className= "btn-danger" onClick={deleteProduct}>Delete</button>
    )
  }
}
