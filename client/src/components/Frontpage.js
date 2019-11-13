import React, { Component } from 'react';
import styles from './Frontpage.module.css';
import { Link } from "react-router-dom";
import ModalExample from './ModalExample';
import axios from 'axios';



class Frontpage extends Component
{
    constructor() 
    {
      super();
  
      this.state = {
        activities: []
      };
    }
  
    ComponentDidMount = () => {
      axios.get('http://localhost:4000/activities')
      .then(res => {
        const activities = res.data;
        this.setState({ activities });
        console.log(activities);
      })
      .catch(error => {
        console.log(error.response);
      });
    }

    render(){
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.h1} style={{flexGrow: 8}}>Heading</h1>
                

                    <div className={styles.button}><Link to ="/login"><button>Sign in</button></Link></div>
                    <div className={styles.button}><Link to ="/register"><button>Sign up</button></Link></div>

                
            </div>
            


            <div className={styles.notice}>
                <h3>HOX! Lorem ipsum</h3>
            </div>

            <div className={ styles.flexContainer }>
                <div className={ styles.flexContainer_div }>
                    <ul>
                    <h2>Activity X</h2>
                    <li>Location Y</li>
                    <li>activity info</li>
                    </ul>
                    <p>0/14 Filled</p>
                        
                    <ModalExample/>

                </div>

            </div>

            <div className={ styles.flexContainer }>
                <div className={ styles.flexContainer_div }>
                    <ul>
                    {this.state.activities.map(activities => (  
                    <li key={activities.act_id}>
                    {activities.name}<br/>
                    {activities.location}<br/>
                    {activities.price}<br/>
                    {activities.info}<br/>
                    {activities.max_place}<br/>
                    </li>
                    ))}
                    </ul>
                    
                        
                    <ModalExample/>

                </div>

            </div>
        </div>
        
    );
    }
}
export default Frontpage;
