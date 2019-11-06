import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Frontpage from './components/Frontpage';


export default class App extends Component {
  constructor(props) 
  {
    super(props);

    this.state = {
      inputForm: { email:"", password:""},
      
    };
  }
 

  render()
  {
    return (
      <div className="App">
       <Router>
         <Route path="/" exact render={
           (routeProps) =>
           <Frontpage/>
           
         }>

         </Route>
       </Router>
      </div>
    );
  }
 
}

