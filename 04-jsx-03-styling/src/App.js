import React, { Component } from 'react'

import './App.css'

/*
<div class="app">
  <div class="todo-container">
    <input id="new-todo" />
    <label for="new-todo">New Todo</label>
    <div class="todo-item-row">Learn React</div>
    <div class="todo-item-row">Learn Redux</div>
    <div class="todo-item-row">Learn React Native</div>
  </div>
</div>
*/

const todos = [
  'Learn React',
  'Learn Redux',
  'Learn React Native',
  'Create a brand new web app!',
]

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="todo-container">
          <input id="new-todo" />
          <label htmlFor="new-todo">New Todo</label>
          {todos.map((todo, i) => (
            <div className="todo-item-row" key={i}>
              {todo}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
