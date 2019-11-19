import React from 'react';
import styles from './LoggedIn.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default function loggedIn(props) {

    function logout(event){

        event.preventDefault();

        props.logoutSuccess();

    }

    componentDidMount = () => {

        axios.get('http://localhost:3000/activities')
  
        .then(res => {
  
          const activities = res.data;
  
          this.setState({ activities });
  
          console.log(this.state.activities);
  
        })
  
        .catch(error => {
  
          console.log(error.response);
  
        });
  
      }

    return (

        <div className={ styles.loggedIn }>

            <div className= { styles.header } >

           <div className={styles.button}><Link to ="/Frontpage"><button>logout</button></Link></div>

            <h1>Heading</h1>

                    <div><h2>User page</h2></div>
                 </div>
                 <div classname={styles.title}><h2>Activities</h2></div>

                

          </div>

        
        
    )
}

                          

