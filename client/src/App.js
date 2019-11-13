import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Frontpage from './components/Frontpage';
import Register from './components/Register';
import LoggedIn from './components/LoggedIn';


export default class App extends Component {
  constructor(props) 
  {
    super(props);

    this.state = {
      
      inputForm: { email:"", password:""},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputForm: {
        email: event.target.email.value,
        password: event.target.password.value,
      },
    })
  } 
  
  render() { 
    return (
      <div className="App">
        <Router>  
          <Route path="/" exact render={
             (routeProps) =>
             <Frontpage
             { ...routeProps }
             /> 
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

          {/*<ProtectedRoute isAuthenticated= { this.state.isAuthenticated } path="/Loggedin" exact render =
           {
             (routeProps) => 
          <LoggedIn
         logoutSuccess = { this.onLogout }
            />  
        }>
      </ProtectedRoute>*/}

        </Router>

      </div>
    );
  }
}

