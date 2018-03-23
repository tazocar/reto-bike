import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Application from './Components/Map/index';
import firebase from 'firebase';
import Login from './Components/Login';
import TopMenu from './Components/TopMenu/index'
import ReportBike from './Components/ReportBike';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  state = {
    user: null
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }
  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log('Te has desconectado correctamente'))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }
  renderMap(){
    if(this.state.user){
      return(
          <div className="App">
          <TopMenu />
            <Login
              user={this.state.user}
              onAuth={this.handleAuth}
              onLogout={this.handleLogout}
            />
          </div>
      );
    }else{
      return(
        <Login
            user={this.state.user}
            onAuth={this.handleAuth}
            onLogout={this.handleLogout}
          />
      );
    }
  }
  render() {
    return (
      <div>
				{ this.renderMap() }
      </div>
    );
  }
}

export default App;