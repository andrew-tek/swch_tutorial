import React, {Component} from 'react';
import {Link} from 'react-router';
import DropProgressBar from './DropProgressBar'
// import DropProgressCircle from './DropProgressCircle'
export default class DropDetail extends Component {
  render() {
    //find out current tier
    //get needed participants from tier participants - current participants
    //display needed participants and next tier price

    let product = this.props.product;
<<<<<<< HEAD
    let expireDate = product.end_date;
=======
    let expireDay = product.end_date;
>>>>>>> 8b5dc3a85a320b56be132d54dd147787afd9184c
    let curTier = product.cur_tier;
    let curParticipants = product.participants;
    let tiers = product.tiers;
    let nextTier = null;
    let needParticipants = 0;
    let nextPrice = null;

    if(curTier.id < tiers.length-1){
      nextTier = tiers[curTier.id+1];
      needParticipants = nextTier.participants - product.participants;
      nextPrice = nextTier.price;
    }
    let addParticipant = () => {
      Meteor.call("addParticipants", product._id);
    }
    var Countdown = require('react-cntdwn');
    var handleFinish = function () {
      console.log('Skynet has become self-aware!');
    }
    return (
      <div className="col-sm-12">
        <h1 className="text-center">{product.product_name}</h1>
        <div className="row">
          <div className="col-sm-8">
            <img className="img-responsive"  src={product.images[0]}/>
              <span><DropProgressBar/> </span>
            {/* <span><DropProgressCircle/> </span> */}

          </div>
          <div className="col-sm-4">
            <div className="text-center">
              {product.cur_tier.price < product.org_price ? <span><s>${product.org_price}</s><span>  ${product.cur_tier.price}</span></span>
              :<span > ${product.org_price} </span> }
              <div>{nextTier ? <span>{needParticipants} more people needed for this price ${nextPrice}</span>
              : <span></span>}</div>
<<<<<<< HEAD
                <button onClick={addParticipant} className="btn btn-primary text-center">Participate Now</button>
                <Countdown targetDate={expireDate}
               startDelay={0}
=======
                {!!Meteor.userId() ?
                  <button onClick={addParticipant} className="btn btn-primary text-center">Participate Now</button>
                    : <Link to="/signin"><button className="btn btn-primary text-center">Participate Now(Lead to Signin)</button></Link>}
                <Countdown targetDate={expireDay}
                startDelay={0}
>>>>>>> 8b5dc3a85a320b56be132d54dd147787afd9184c
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
