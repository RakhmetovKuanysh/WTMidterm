import React, { Component } from 'react';
import './App.css';
// import ActiveBlock from './ActiveBlock';
// import DefaultBlock from './DefaultBlock';


class StatusBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.block.active) {
      return (
        <div className = "blockDefault" onClick = {this.props.changeStatus} >
          <p className = "text" id = {this.props.block.id} >{this.props.block.name}</p>
        </div>
      );
    } else {
      return (
        <div className = "blockActive" onClick = {this.props.changeStatus} >
          <p className = "textWhite" id = {this.props.block.id} >{this.props.block.name}</p>
        </div>
      );
    }
  }
}

export default StatusBlock;
