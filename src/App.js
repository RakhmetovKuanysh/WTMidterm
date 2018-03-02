import React, { Component } from 'react';
import './App.css';
import StatusBlock from './StatusBlock';


class App extends Component {
  constructor() {
    super();

    this.state = {
      "blocks": [
        {
          "id": 1,
          "name": "Home",
          "active": false,
        },
        {
          "id": 2,
          "name": "About",
          "active": false,
        },
        {
          "id": 3,
          "name": "Contact",
          "active": false,
        }
      ],
    }

    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(e) {
    let id = e.target.id;

    let blocks = this.state.blocks.slice();

    blocks.map(block => block.active = false);
    let elem = blocks.find(block => block.id == id);
    elem.active = true;

    this.setState({
      "blocks": blocks,
    });
  }

  render() {
    console.log(this.state);
    let blocks = this.state.blocks.map(block =>
      <StatusBlock block = {block} changeStatus = {this.changeStatus} />
    );

    return (
      <div className="App">
        <div className = "nav">
          <p>My Navigation Menu</p>
        </div>
        <div className = "blocks">
          {blocks}
        </div>
      </div>
    );
  }
}

export default App;
