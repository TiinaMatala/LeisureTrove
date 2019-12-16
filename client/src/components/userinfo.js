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
                <h1 className={styles.h1} style={{flexGrow: 8}}>Heading</h1>
            <div className={styles.button}><Link to ="/"><button>logout</button></Link></div>

            </div>

                 <div>
            
            
                 <li><a><Link to ="/userinfo"><button>User information</button></Link></a></li>
                 <li><a><Link to ="/activities"><button>Activities</button></Link></a></li> 
                 
                 </div>
                 <div>

          <div className={styles.button}><Link to ="/edituser"><button>Edit</button></Link></div>
  
              <h2>user info</h2>
  
              <table className="table">
  
                 {this.state.users.map(users => (
  
                  <tbody key={users.id}>

                  <tr><th>name</th><td>{users.name}</td></tr>
  
                  <tr><th>email</th><td>{users.email}</td></tr>
  
                  <tr><th>psssword</th><td>{users.password}</td></tr>                    
  
                  </tbody>         
  
                  ))}
  
              </table>
  
              </div>
  </div>
          );
  
        }
      }
      export default Userinfo ;
  