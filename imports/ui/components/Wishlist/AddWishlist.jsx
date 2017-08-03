import React, {Component} from 'react';
export default class AddWishlist extends Component {
  constructor(props) {
      super(props);
    }

  render() {
        let product = this.props.product;
        let username = this.props.username;

        let submitWishlist = () => {

        let insertValue = {
            product_id: product._id,
            username: username
          }
          console.warn("insert value", insertValue);

          Meteor.call("insertWishlist", insertValue,  function(error, result){
            if(result === 'success'){
                      return Bert.alert('Added to your wishlist!', 'success',
                        'fixed-top', 'fa-thumbs-o-up');

            }
            else{
                return Bert.alert('Error while processing your request.' +
                  'Please try again.', 'danger', 'fixed-top', 'fa-frown-o');
            }
          });
        }
    return (
        <div>
          <button onClick={submitWishlist} type="submit" className="btn btn-default">Add to Wishlist</button>
        </div>


    )
  }
}
