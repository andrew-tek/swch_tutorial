import React, {Component} from 'react';
import DropProgressCircle from './DropProgressCircle'
export default class DropProgressBar extends Component {

  render() {
    let tiers = this.props.product.tiers;
    let subTiers = tiers.slice(1, tiers.length);
    //loop through the tier and create correct amount of tier interface
    var product = this.props.product;
    var fill = true;
    var participants = product.participants;
    var previousTier = null;
    let listTiers = subTiers.map(function(tier, i){
      let tierNeedParticipant = null;
      if(previousTier == null){
        tierNeedParticipant = tier.participants
      }
      else{
        tierNeedParticipant = tier.participants-previousTier.participants;
      }
      let progress = participants / tierNeedParticipant * 100;
      let curNeedParticipants = tierNeedParticipant - participants;
      if(curNeedParticipants < 0){
        curNeedParticipants = 0;
      }
      if(progress>=100){
        progress = 100;
        participants = participants - tierNeedParticipant;
        previousTier = tier;
      }
      progressString = progress.toString()+"%";
      if(subTiers.length==1){
        return (
          <div >
            <div style={{width: '75%'}} className="progress-bar-col drop-progress-bar">
              <div className="progress progress1">
                {fill ?
                  <div key={i} className="progress-bar progress-bar-success progress-bar-color" style={{width: progressString}}>
                    <span className="sr-only"></span>
                  </div>
                :
                  <div key={i} className="progress-bar progress-bar-success" >
                    <span className="sr-only"></span>
                  </div>}
                  {progress<100 ? fill=false : fill = fill}
              </div>
            </div>
            <div className=" progress-bar-col drop-circle">
              <DropProgressCircle full={fill} radius={'96px'} price={tier.price} need={curNeedParticipants}/>
            </div>
          </div>
        )
      }
      else if(subTiers.length==2){
        return (
          <div >
            <div style={{width: '30%'}} className="progress-bar-col drop-progress-bar">
              <div className="progress progress1">
                {fill ?
                  <div key={i} className="progress-bar progress-bar-success progress-bar-color" style={{width: progressString}}>
                    <span className="sr-only"></span>
                  </div>
                :
                  <div key={i} className="progress-bar progress-bar-success" >
                    <span className="sr-only"></span>
                  </div>}
                  {progress<100 ? fill=false : fill = fill}
              </div>
            </div>
            <div className=" progress-bar-col drop-circle">
              <DropProgressCircle full={fill} radius={'96px'} price={tier.price} need={curNeedParticipants}/>
            </div>
          </div>
        )
      }
      else {
        return (
          <div >
            <div style={{width: '15%'}} className="progress-bar-col drop-progress-bar">
              <div className="progress progress1">
                {fill ?
                  <div key={i} className="progress-bar progress-bar-success progress-bar-color" style={{width: progressString}}>
                    <span className="sr-only"></span>
                  </div>
                :
                  <div key={i} className="progress-bar progress-bar-success" >
                    <span className="sr-only"></span>
                  </div>}
                  {progress<100 ? fill=false : fill = fill}
              </div>
            </div>
            <div className=" progress-bar-col drop-circle">
              <DropProgressCircle full={fill} radius={'96px'} price={tier.price} need={curNeedParticipants}/>
            </div>
          </div>
        )
      }
    });
    return (
      <div className="row progress-bar-row">
        {/* <div className="col-sm-3 progress-bar-col drop-progress-bar">
          <div className="progress">
            <div className="progress-bar progress-bar-success" style={{width: '35%'}}>
              <span className="sr-only"></span>
            </div>
          </div>
        </div>
        <div className="col-sm-3 progress-bar-col drop-circle">
          <DropProgressCircle text={'$16.99'}/>
        </div>
        <div className="col-sm-3 progress-bar-col drop-progress-bar drop-progress-bar2">
          <div className="progress">
            <div className="progress-bar progress-bar-success " style={{width: '35%'}}>
              <span className="sr-only"></span>
            </div>
          </div>
        </div>
        <div className="col-sm-3 progress-bar-col drop-circle">
          <DropProgressCircle text={'$19.99'} />
        </div> */}
        {listTiers}
      </div>



    )
  }
}
