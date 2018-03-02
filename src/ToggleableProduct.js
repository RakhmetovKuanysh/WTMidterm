import React, { Component } from 'react';
import './App.css';
// import ActiveBlock from './ActiveBlock';
// import DefaultBlock from './DefaultBlock';


class ToggleableProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.block.active) {
      return (
        <div className = "productDefault" onClick = {this.props.changeStatus} >
          <p className = "textP" id = {this.props.block.id} >
            {this.props.block.name} {this.props.block.price}
          </p>
        </div>
      );
    } else {
      return (
        <div className = "productActive" onClick = {this.props.changeStatus} >
          <p className = "textPWhite" id = {this.props.block.id} >
            {this.props.block.name} {this.props.block.price}
          </p>
        </div>
      );
    }
  }
}

export default ToggleableProduct;
