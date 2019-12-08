import React, { Component } from 'react';

import styles from './Userinfo.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import axios from 'axios'; 


class Userinfo extends Component {

    constructor(props) {

        super(props);

        this.getuser = this.getuser.bind(this);

        this.state = {

        users: []

        };

        this.getuser(this.props.match.params.id);

    }



    getuser(id) {

        axios.get('http://localhost:4000/users').then(res => {

        const users = res.data;

        this.setState({ users });

        });

        }
        render(){
        return (
         <div classname="container">
  
              <h2>Selected user</h2>
  
              <table className="table">
  
                 {this.state.users.map(users => (
  
                  <tbody key={users.id}>
  
                  <tr><th>ID</th><td>{users.id}</td></tr>
  
                  <tr><th>username</th><td>{users.email}</td></tr>
  
                  <tr><th>psssword</th><td>{users.password}</td></tr>                    
  
                  </tbody>         
  
                  ))}
  
              </table>
  
            
  </div>
          );
  
        }
  
      
  