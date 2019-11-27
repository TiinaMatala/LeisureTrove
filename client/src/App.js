import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Frontpage from './components/Frontpage';
import Register from './components/Register';
import Login from './components/Login';
import LoggedIn from './components/LoggedIn';
import ProtectedRoute from './components/ProtectedRoute';
import axios from 'axios';

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
    this.setState({ isAuthenticated: true })
  }

  onLogout = () => {
    this.setState({ isAuthenticated : false})
  }
  onLoginFail = () => {
    this.setState({ isAuthenticated: false });
    console.log("login failed");
  }
 

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputForm: {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      },
    })
  } 

  componentDidMount = () =>{
    axios.get('http://localhost:4000/users').then(result => {
      this.setState({ users: result.data });
    })
    .catch(error => {
      console.error(error);
      this.setState({ networkError: true })
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
          

          <Route path="/login" exact render={
              (routeProps) =>
              <Login
              userInfo = { this.state.userInfo }
              loginSuccess = { this.onLogin }
              loginFail = { this.onLoginFail }
              redirectPathOnSuccess="/loggedIn"
              { ...routeProps }

              />
            }></Route>
          <ProtectedRoute isAuthenticated= { this.state.isAuthenticated } path="/Loggedin" exact render =
           {
             (routeProps) => 
          <LoggedIn
         logoutSuccess = { this.onLogout }
            />  
        }>
      </ProtectedRoute>

        </Router>

      </div>
    );
  }
}

