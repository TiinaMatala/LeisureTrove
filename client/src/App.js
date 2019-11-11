import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Frontpage from './components/Frontpage';
import Register from './components/Register';
import Login from './components/Login';



export default class App extends Component {
  constructor(props) 
  {
    super(props);

    this.state = {
      isAuthenticated: false,
      inputForm: { email:"", password:""}
    };
  }


  onLogin = () => {
    this.setState({isAuthenticated: true})
  }

  onLoginFail = () => {
    this.setState({isAuthenticated: false})
    console.log("Login failed");
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputForm: {
        email: event.target.email.value,
        password: event.target.password.value
      },
    })
  } 
  
  render() { 
    return (
      <div className="App">
        <Router>  
          <Route path="/" exact render={
             (routeProps) =>
             <Frontpage/> 
           }>
           </Route>
          
          <Route path="/register" exact render = {
            (routeProps) =>
            <Register 
            onSubmit={ this.handleSubmit }
            { ...routeProps } 
            />
          }>
          </Route>

          <Route path="/login" exact render={
              (routeProps) =>
              <Login
              loginSuccess = { this.onLogin }
              loginFail = { this.onLoginFail }
              userInfo = { this.state.userInfo }
              redirectPathOnSuccess="/loggedIn"
              { ...routeProps }

              />
            }></Route>

        </Router>

      </div>
    );
  }
}

