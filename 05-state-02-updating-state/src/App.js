import React, { Component } from 'react'
import { Table, Checkbox, Button } from 'semantic-ui-react'

import './App.css'

const TodoItem = props => (
  <Table.Row>
    <Table.Cell>
      <Checkbox />
    </Table.Cell>
    <Table.Cell>
      {props.children}
      <Button
        color="red"
        icon="trash"
        floated="right"
        compact
        size="small"
      />
    </Table.Cell>
  </Table.Row>
)

class App extends Component {
  state = {
    todos: [
      'Learn React',
      'Learn Redux',
      'Learn React Native',
      'Create a brand new web app!',
    ],
  }

  render() {
    return (
      <div className="app">
        <div className="todo-container">
          <input
            id="new-todo"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
          <label
            htmlFor="new-todo"
            style={{ display: 'none' }}
          >
            New Todo
          </label>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Checkbox />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.todos.map((todo, i) => (
                <TodoItem key={i}>{todo}</TodoItem>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    )
  }
}

export default App
