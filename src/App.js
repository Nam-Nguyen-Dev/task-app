import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: []
    }

    this.taskUp = this.taskUp.bind(this);
  }

  taskUp() {
    this.setState({
      task: this.state.task + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.taskUp}>Click Me!</button>
        <p>{this.state.task}</p>
      </div>
    )
  }
}

export default App;
