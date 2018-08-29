import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    // Copia peixes
    const fishes = { ...this.state.fishes };
    // Add o peixe pra fishes
    fishes[`fish${Date.now()}`] = fish;
    // seta o novo fishes para o obj
    this.setState({
      fishes,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh as Fuck" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
