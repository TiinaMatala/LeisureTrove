import React from 'react';
import styles from './LoggedIn.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default function loggedIn(props) {

    function logout(event){

        event.preventDefault();

        props.logoutSuccess();

    }


    return (

        <div >
             <div className={styles.header}>
                <h1 className={styles.h1} style={{flexGrow: 8}}>User page</h1>
            <div className={styles.button}><Link to ="/"><button>logout</button></Link></div>

            </div>

           

            <div className={styles.notice}>
                <h3>Welcome!</h3>
            </div>
                    
                 

                 <div className={styles.menu}>
                    <ul className={styles.li}>
                 <li><Link to ="/Userinfo"><button>User information</button></Link></li>
                 <li><Link to ="/Activities"><button>Activities</button></Link></li> 
                 </ul>
                 </div>
                

                </div>

        
        
    )
}

                          

