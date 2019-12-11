import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 


class Activities extends Component {

    constructor() {

      super();

      this.state = {

        act_to_user: []

      };

    }

    

    componentDidMount() {

      axios.get('http://localhost:4000/act_to_user/').then(res => {

        const act_to_user = res.data;
    
        this.setState({ act_to_user });
        
      });

    }



    render() {

      return (

        <div className="container">

          <h2>Activity list</h2>

          <table className="table table-hover table-condensed">

          <thead>

              

              <tr><th>ID</th><th>name</th><th>Firstname</th><th>Lastname</th><th>Return date</th><th>Select</th></tr>

          </thead>

          <tbody>

         

              {this.state.act_to_user.map(act_to_user => (
                <tr key={act_to_user.link_id}>
  <td>{act_to_user.link_id}</td>

  <td>{act_to_user.id}</td>

  

              

                

                       

              </tr>         

              ))}
                </tbody>

          </table>

        </div>

      );

    }

  }



 

 export default Activities ;
