import React from 'react';
import Auth from './Auth';
import styles from './Login.module.css';
import axios from 'axios';

export default function Login(props) {

    function Cancel(event) {
        event.preventDefault();
        props.history.goBack();
    }

    function login(event) {
        event.preventDefault();
        props.onSubmit(event);
        axios.post('http://localhost:4000/users', {
            email: event.target.email.value,
            password: event.target.password.value
        }
        )

        .then(function (response) {
            console.log(response);
            props.history.goBack();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <div className={ styles.header }>
                <h1>Header</h1>
            </div>

            <h2>Login</h2>
            
            <form onSubmit={ login }>
                <div className={ styles.loginForm }>
                
                    <table>

                        <thead></thead>

                        <tbody>
                        
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input name="email" type="text"></input></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td><input name="password" type="password"></input></td>
                        </tr>

                        <tr>
                            <td><button type="submit">Login</button></td>
                            <td><button onClick={ Cancel }>Cancel</button></td>
                        </tr>

                        </tbody>  

                    </table>

                </div>

            </form>
            
        </div>
    )
}
