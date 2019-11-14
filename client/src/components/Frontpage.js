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
  
    componentDidMount = () => {
      axios.get('http://localhost:4000/activities')
      .then(res => {
        const activities = res.data;
        this.setState({ activities });
        console.log(this.state.activities);
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

            <div className={styles.filter}>
              <button>Music</button><br/>
              <button>Arts</button><br/>
              <button>Outdoors</button><br/>
              <button>Indoors</button>
            </div>

              {this.state.activities.map(activities => (  
                <ul key={activities.act_id} className={styles.ul}>
                  <div className={ styles.flexContainer }>
                    <div className={ styles.flexContainer_div }>
                      <li><h2>{activities.name}</h2></li>
                      <li>{activities.location}</li>
                      <li>{activities.price} €</li>
                      <li><p>{activities.act_info}</p></li>
                      <li>/{activities.max_places}</li>
                      <ModalExample/>
                    </div>
                  </div>
                </ul>))
              }
            </div>
        
    );
    }
}
export default Frontpage;
