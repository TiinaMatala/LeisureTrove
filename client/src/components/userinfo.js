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

          <div className={styles.button}><Link to ="/edituser"><button>Edit</button></Link></div>
  
              <h2>user info</h2>
  
              <table className="table">
  
                 {this.state.users.map(users => (
  
                  <tbody key={id}>
  
                  <tr><th>ID</th><td>{id}</td></tr>

                  <tr><th>name</th><td>{users.name}</td></tr>
  
                  <tr><th>email</th><td>{users.email}</td></tr>
  
                  <tr><th>psssword</th><td>{users.password}</td></tr>                    
  
                  </tbody>         
  
                  ))}
  
              </table>
  
            
  </div>
          );
  
        }
      }
      
  