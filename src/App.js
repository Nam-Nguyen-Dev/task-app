import './App.css';
import React, { Component } from 'react'
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: ''},
      tasks: [],
    }

  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput" />
          <button type="submit">Add Task</button>
        </form>
      </div>
    )
  }
}

export default App;
