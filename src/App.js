import './App.css';
import React, { Component } from 'react'
import Overview from './components/Overview';
import uniqid from "uniqid"

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid(),
        index: 0,
      },
      tasks: [],
    }

  }

  handleChange = e => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        index: this.state.tasks.length + 1,
      }
    })
  }

  onSubmitTask = e => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '',
      id: uniqid(),
    },
    })
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={ this.onSubmitTask }>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput" onChange={ this.handleChange } value={task.text}/>
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    )
  }
}

export default App;
