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

           

            <h1>USER PAGE</h1>
                 <h2>Welcome!</h2>
                    
                 </div>

                 <div>
            
            
                 <li><a><Link to ="/Userinfo"><button>User information</button></Link></a></li>
                 <li><a><Link to ="/Activities"><button>Activities</button></Link></a></li> 
                 
                 </div>
                

          </div>

        
        
    )
}

                          

