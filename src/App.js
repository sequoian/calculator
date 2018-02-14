import React, { Component } from 'react'
import Keypad from './Keypad'
import Display from './Display'
import operation from './operation'
//import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeNum: "0",
      storedNum: null,
      operation: null,
      history: [], 
      error: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(key) {
    this.setState(prevState => {
      return operation(key, prevState)
    })
  }

  render() {
    const {activeNum, storedNum, history} = this.state
    return (
      <div className="App">
        <Display
          active={activeNum}
          stored={storedNum}
          history={history}
        />
        <Keypad
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default App