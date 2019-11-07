import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from './Register.module.css';

export default function Register(props) {
    
    function executeRegister(event) {
        event.preventDefault();
        props.onSubmit(event);
        axios.post('localhost: 3000', {
            email: event.target.email.value,
            password: event.target.password.value
        })

        .then(function (response) {
            console.log(response);
            props.history.goBack();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function Cancel(event) {
        event.preventDefault();
        props.history.goBack();
    }

    return (
        <div>

            <div className={styles.header}>
                <h1>Header</h1>
            </div>

            <div className= {styles.registerForm}>
                <h2>REGISTER</h2>
                <div className={styles.container}>
                <form onSubmit= { executeRegister }>
                  <table>
                    <tr>
                        <td><label>Name</label></td>
                        <td><input name="name" placeholder="Your fullname"></input></td>
                    </tr>

                    <tr>
                        <td><label>Email</label></td>
                        <td><input name="email" placeholder="Works as username"></input></td>
                    </tr>

                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password" name="password" placeholder="Password"></input></td>
                    </tr>

                    <br/><br/>

                    <tr>
                        <td><input type="submit" value="Submit"/></td>
                        <td><button onClick = { Cancel }>Cancel</button></td>
                    </tr>
                  </table>
                </form>
                </div>
            </div>
            
        </div>
    )
}


