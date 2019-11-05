import React from 'react';
import Axios from 'axios';

export default function Register(props) {
    
    function executeRegister(event) {
        
    }

    function Cancel(event) {
        event.preventDefault();
        props.history.goBack();
    }

    return (
        <div className= { styles.Register }>

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


