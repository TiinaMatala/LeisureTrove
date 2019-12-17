import React from 'react';
import styles from './LoggedIn.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default function loggedIn(props) {

    function logout(event){

        event.preventDefault();

        props.logoutSuccess();

    }


    return (

        <div>
             <div className={styles.header}>
                <h1 className={styles.h1} style={{flexGrow: 8}}>Leisure Trove</h1>
            <div ><Link to ="/"><button className={styles.button}>Logout</button></Link></div>

            </div>

           

            <div className={styles.notice}>
                <h3>Welcome <br></br>
                Here you can find your information and the activities you have joined</h3>
            </div>
                    
                 

                 <div className={styles.filter}>
                    <div><Link to ="/Userinfo"><button className={styles.button}>Account</button></Link></div>
                    <div><Link to ="/Activities"><button className={styles.button}>Activities</button></Link></div>
                 </div>
                

                </div>

        
        
    )
}

                          

