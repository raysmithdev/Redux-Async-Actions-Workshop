import React, { Component } from 'react'
import logo from '../../logo.png'
import './App.css'
import UserList from '../List/List'
import Loader from '../Loader/Loader'
import { connect } from 'react-redux'
import { fetchDataFromApi, saveUser } from '../../actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchDataFromApi())
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Redux Async Actions Workshop</h3>
          <form onSubmit={(event) => {
            event.preventDefault()

            let username = event.target.username.value
            let age = event.target.age.value
            let location = event.target.location.value

            this.props.dispatch(saveUser(username, age, location))

            event.target.username.value = ''
            event.target.age.value = ''
            event.target.location.value = ''
          }}>
            <input type="text" name="username" />
            <input type="number" name="age" />
            <input type="text" name="location" />
            <button>Submit</button>
          </form>
        </div>
        {this.props.isLoading ? <Loader /> : <UserList />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.userAPI.loading
})

export default connect(mapStateToProps)(App)
