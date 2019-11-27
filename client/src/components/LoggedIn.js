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

         <div className={ styles.activities}>
             <div className ></div>
         </div>

        </div>
    )
    }
                          

