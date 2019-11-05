import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Frontpage from './components/Frontpage';
import Register from './components/Register';


function App() {

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      inputForm: {
        email: event.target.email.value,
        password: event.target.password.value
      },
    })
  } 

  return (
    <div className="App">
      <Router>
        <Route path="/" exact render = {
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

export default App;
