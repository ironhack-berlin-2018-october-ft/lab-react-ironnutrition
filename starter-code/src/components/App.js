import React, { Component } from 'react';
import Foodbox from './Foodbox'
import jsonFoods from '../foods'

class App extends Component {
  constructor(props) {
    super(props)
    // Init of state.foods with the JSON
    this.state = {
      foods: jsonFoods
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">IronNutrition</h1>

        <button className="button is-primary">Add food</button>

        <hr/>
        {this.state.foods.map((f, i) => (
          <Foodbox key={i} food={f} />
        ))}

        {/* {this.state.foods.map((f, i) => { return (
          <Foodbox key={i} food={f} />
        )})} */}
      </div>
    );
  }
}

export default App;
