import React, {Component} from 'react';

export default class Name extends Component {

  render() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-success" style={{width: '35%'}}>
          <span className="sr-only">35% Complete (success)</span>
        </div>
      </div>

    )
  }
}
