import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Home from './Home'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to WDI 12</h1>
        </header>
        <p className='App-intro'>
          Time to code React!
        </p>

        <Home />
        <Home />
        <Home />
        <Home />
      </div>
    )
  }
}

export default App
