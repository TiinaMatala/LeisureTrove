import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Frontpage from './components/Frontpage';
import Register from './components/Register';



export default class App extends Component {
  constructor(props) 
  {
    super(props);

    this.state = {
      
      inputForm: { email:"", password:""}
    };
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

        </Router>

      </div>
    );
  }
}

