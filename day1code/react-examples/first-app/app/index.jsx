'use strict'
import React from 'react'
import {render} from 'react-dom'

class TodoList extends React.Component {
  render() {
    var todos = this.props.data.map(todo => {
      return <li> {todo} </li>
    })
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

/*
TodoList.PropTypes = {
  data: React.PropTypes.Array.isRequired,
  numberOfCats: React.PropTypes.Number
}
*/


class Submit extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.props.addTodoMethod('stuff')}>
        Click me
      </button>
    )
  } 
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        'learn react',
        'learn css',
        'etc'
      ]
    }
    this.addTodoMethod = this.addTodoMethod.bind(this);
  }

  addTodoMethod(item) {
    this.setState({
      data: this.state.data.concat(item)
    });
  }

  render() {
    return (
      <div>
        <TodoList 
          data={this.state.data}/>
        <Submit addTodoMethod={this.addTodoMethod} />
      </div>

    )
  }
}

render(<App/>, document.getElementById('app'))
