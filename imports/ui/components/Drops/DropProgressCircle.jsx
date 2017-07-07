import React, {Component} from 'react';
export default class DropProgressCircle extends Component {
  render() {
    let full = this.props.full;
    let price = this.props.price;
    let needParticipants = this.props.need;
    let color = null;
    if(full){
      color = "#5cb85c";
    }
    else{
      color = "#ddd";
    }
    return (
          <p className="circle" style={{'border-color': color}}><div style={{width: this.props.radius, height: this.props.radius}}>
            <span className="price" >${price}</span>
            <p className="needed" >{needParticipants}needed</p>
          </div></p>

    )
  }
}
