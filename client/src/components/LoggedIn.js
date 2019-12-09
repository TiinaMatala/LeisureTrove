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
            <div className={styles.button}><Link to ="/"><button onclick={logout}>logout</button></Link></div>

            <div className= { styles.header } >

           <div className={styles.button}><Link to ="/Frontpage"><button>logout</button></Link></div>

            <h1>Heading</h1>

                    <div><h2>User page</h2></div>
                 </div>
                 <div classname={styles.title}><Link to ="/Activities"><button>Activities</button></Link></div>

                

          </div>

        
        
    )
}

                          

