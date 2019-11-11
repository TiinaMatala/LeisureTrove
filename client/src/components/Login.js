import React from 'react';
import Auth from './Auth';
import styles from './Login.module.css';

export default function Login(props) {

    function Cancel(event) {
        event.preventDefault();
        props.history.goBack();
    }

    function Login(event) {
        event.preventDefault();
        Auth.authenticate(event.target['email'].value, event.target['password'].value)
        .then(result =>
            {
                props.loginSuccess();
                props.history.push(props.redirectPathOnSuccess);
            })
        .catch(() => {
            props.loginFail();
        }

        )
    }

    return (
        <div>
            <div className={ styles.header }>
                <h1>Header</h1>
            </div>

            <h2>Login</h2>
            <form onSubmit={ Login }>
                <div className={ styles.loginForm }>
                    <table>
                        
                        <tr>
                            <td><label>Email</label></td>
                            <td><input name="email"></input></td>
                        </tr>

                        <tr>
                            <td><label>Password</label></td>
                            <td><input name="password" type="password"></input></td>
                        </tr>

                        <br/><br/>

                        <tr>
                            <td><button type="submit">Login</button></td>
                            <td><button onClick={ Cancel }>Cancel</button></td>
                        </tr>

                    </table>

                </div>

            </form>
            
        </div>
    )
}
