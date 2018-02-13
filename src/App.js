import React, { Component } from 'react'
import Keypad from './Keypad'
import operation from './operation'
//import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      op: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(key) {
    this.setState(prevState => {
      return operation(key, prevState)
    })
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.op}</div>
        <Keypad
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App