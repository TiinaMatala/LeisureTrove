import React from 'react';
import styles from './LoggedIn.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default function loggedIn(props) {

    function logout(event){

        event.preventDefault();

        props.logoutSuccess();

    }

    return (

        <div className={ styles.loggedIn }>
            <div className={styles.button}><Link to ="/login"><button>logout</button></Link></div>

            <div className= { styles.header } >

            <h1>User page</h1>

         </div>

         <div classname={ styles.activities}>
            
             <Link to='/activities' onClick={() => props.Add(users.id,users.name, users.email)}>Activities</Link>
            
         </div>

         <div classname={ styles.userinfo}>
            
            <Link to='/userinfo' onClick={() => props.Add(users.id,users.name, users.email,users.password)}>user information</Link>
           
        </div>

        </div>
        
    )
}

                          

