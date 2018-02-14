import React, { Component } from 'react'
import Keypad from './Keypad'
import operation from './operation'
//import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNum: "0",
      storedNum: null,
      operation: null, 
      error: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate() {
    console.log(this.state)
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