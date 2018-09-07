import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
  // States at the top
  state = {
    fishes: {},
    order: {},
  };

  // Lifecycle events
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

  // Custom stuff
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // Copia o state
    const order = { ...this.state.order };
    // add ao pedido ou att ele
    order[key] = order[key] + 1 || 1;
    // call setstate pra att o state do obj
    this.setState({ order });
  };

  // Render
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh as Fuck" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
