import React, { Component } from 'react';
import './App.css';
import ToggleableProduct from './ToggleableProduct';


class Products extends Component {
  constructor() {
    super();

    this.state = {
      "blocks": [
        {
          "id": 1,
          "name": "Milk",
          "price": 300,
          "active": false,
        },
        {
          "id": 2,
          "name": "Bread",
          "price": 100,
          "active": false,
        },
        {
          "id": 3,
          "name": "Ice-cream",
          "price": 150,
          "active": false,
        },
        {
          "id": 4,
          "name": "Candy",
          "price": 200,
          "active": false,
        },
      ],
      "cart": 0,
    }

    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(e) {
    let id = e.target.id;

    let blocks = this.state.blocks.slice();
    let elem = blocks.find(block => block.id == id);
    elem.active = !elem.active;

    this.setState({
      "blocks": blocks,
    });

    blocks = this.state.blocks.filter(t => t.active == true);

    let sum = 0;

    for(let i=0;i<blocks.length;i++) {
      sum+=blocks[i].price;
    }

    this.setState({
      "cart": sum,
    });
  }

  render() {
    let blocks = this.state.blocks.map(block =>
      <ToggleableProduct block = {block} changeStatus = {this.changeStatus} />
    );

    return (
      <div className="App">
        <div className = "nav">
          <p>Products</p>
        </div>
        <div className = "products">
          {blocks}
        </div>
        <div className = "nav">
          <p>Total: {this.state.cart} тг</p>
        </div>
      </div>
    );
  }
}

export default Products;
