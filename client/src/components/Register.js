import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

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

            <div className= "header">
                <h1>Header</h1>
            </div>

            <div className= "registerForm">
                <h2>Register</h2>
                
                <form onSubmit= { executeRegister }>
                    <label>Name</label><br/>
                    <input name="name"></input><br/>

                    <label>Email</label><br/>
                    <input name="email"></input><br/>

                    <label>Password</label><br/>
                    <input type="password" name="password"></input><br/>

                    <input type="submit" value="Submit"/>
                    <button onClick = { Cancel }>Cancel</button>

                </form>
            </div>
            
        </div>
    )
}


