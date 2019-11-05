import React from 'react';
import './App.css';
import { BrowserRoute as Router, Route, Link } from "react-router-dom";
//import Frontpage from './components/Frontpage';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/register" exact render = {
          (routeProps) =>
          <Register />
        }>
        </Route>

      </Router>
     
    </div>
  );
}

export default App;
