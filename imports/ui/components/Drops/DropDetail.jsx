import React, {Component} from 'react';
import {Link} from 'react-router';
import DropProgressBar from './DropProgressBar'

export default class DropDetail extends Component {
  render() {
    //find out current tier
    //get needed participants from tier participants - current participants
    //display needed participants and next tier price

    let product = this.props.product;
    let expireDay = product.end_date;
    let curTier = product.cur_tier;
    let curParticipants = product.participants;
    let tiers = product.tiers;
    let nextTier = null;
    let needParticipants = 0;
    let nextPrice = null;
    console.log('userId', this.props.userLogin);
    if(curTier.id < tiers.length-1){
      nextTier = tiers[curTier.id+1];
      needParticipants = nextTier.participants - product.participants;
      nextPrice = nextTier.price;
    }
    let addParticipant = () => {
      if(this.refs.quantity.value <= 0){
        return Bert.alert('Quantity need to be at least 1', 'danger',
          'fixed-top', 'fa-thumbs-o-up');
      }
      if(product.units_in_stock == 0){
        return Bert.alert('Out of Stock', 'danger',
          'fixed-top', 'fa-thumbs-o-up');
      }
      if (product.units_in_stock < this.refs.quantity.value) {
        this.refs.quantity.value = product.units_in_stock;
        return Bert.alert('you order too much', 'danger',
          'fixed-top', 'fa-thumbs-o-up');
      }


      Meteor.call("addParticipants", product._id, this.refs.quantity.value);
      let order = {
        product_id: product.product_id,
        order_id: "0001",
        user_id: Meteor.userId(),
        quantity: this.refs.quantity.value,
        tier_id: curTier.id,
      }
      Meteor.call("addOrders", order);
      return Bert.alert('It worked', 'success',
        'fixed-top', 'fa-thumbs-o-up');
    }
    var Countdown = require('react-cntdwn');
    var handleFinish = function () {
      console.log('Skynet has become self-aware!');
    }
    return (
      <div className="col-sm-12">
        <h1 className="text-center">{product.product_name}</h1>
        <div className="row">
          <div className="col-sm-9">
            <img className="img-responsive"  src={product.images[0]}/>
              <span><DropProgressBar product={product}/> </span>
          </div>
          <div className="col-sm-3">
            <div className="text-center">
              <div>
                {product.cur_tier.price < product.org_price ? <span><s>${product.org_price}</s><span>  ${product.cur_tier.price}</span></span>
                :<span > ${product.org_price} </span> }
              </div>
              <div className="row">
                <input className="col-sm-4 quantity-input" type="number" defaultValue="1" ref="quantity"></input>
                  {this.props.userLogin ?
                    <button ref="participate" disabled="" onClick={addParticipant} className="btn btn-primary text-center">Participate Now</button>
                      : <Link to="/signin"><button className="btn btn-primary text-center">Participate Now</button></Link>}

              </div>

              <div>{nextTier ? <span>{needParticipants} more people needed for this price ${nextPrice}</span>
              : <span></span>}</div>
              <div>
                {product.units_in_stock==0 ?
                  <div>
                  <h5 className="text-warning">Out of Stock</h5>

                  </div>
                  : <h5 className="text-success">In Stock</h5>}
              </div>
              <p>{product.participants} participated</p>
                <Countdown targetDate={expireDay}
                startDelay={0}
               interval={1000}
               timeSeparator={' : '}
               leadingZero
               onFinished={handleFinish}
                format={{
                  day:'DD',
                  hour: 'hh',
                  minute: 'mm',
                  second: 'ss'
                  }}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
