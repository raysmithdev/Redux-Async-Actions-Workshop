import React, { Component } from 'react'
import logo from '../../logo.png'
import './App.css'
import UserList from '../List/List'
import Loader from '../Loader/Loader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Redux Async Actions</h3>
        </div>
        <Loader />
        <UserList />
      </div>
    );
  }
}

export default App
