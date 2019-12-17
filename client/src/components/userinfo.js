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

       this.getuser(localStorage.getItem('userId'));

    }



    getuser(id) {

        axios.get('http://localhost:4000/users/'+id).then(res => {

        const users = res.data;

        this.setState({ users });

        });

        }
        render(){
        return (
            <div>
                <div className={styles.header}>
                <h1 className={styles.h1} style={{flexGrow: 8}}>Leisure Trove</h1>
            <div><Link to ="/"><button className={styles.button}>Logout</button></Link></div>

            </div>

          <div className={styles.notice}>
                <h3>Account</h3>
        </div>

            <div className={styles.filter}>
                    <div><Link to ="/Userinfo"><button className={styles.button}>Account</button></Link></div>
                    <div><Link to ="/Activities"><button className={styles.button}>Activities</button></Link></div>
                 </div>
                
                 <div>

              <table className={styles.table}>
  
                 {this.state.users.map(users => (
  
                  <tbody key={users.id}>

                  <tr><th>Name</th><td>{users.name}</td></tr>
  
                  <tr><th>Email</th><td>{users.email}</td></tr>
  
                  <tr><th>Password</th><td>{users.password}</td></tr>                    
  
                  </tbody>         
  
                  ))}
                <div><Link to ="/edituser"><button className={styles.button}>Edit</button></Link></div>

              </table>

  
              </div>
  </div>
          );
  
        }
      }
      export default Userinfo ;
  