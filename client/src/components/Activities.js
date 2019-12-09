import React from 'react';

import styles from './activities.module.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class activities extends Component
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
            {this.state.activities.map(activities => (  
                <ul key={activities.act_id} className={styles.ul}>
                  <div className={ styles.flexContainer }>
                    <div className={ styles.flexContainer_div }>
                      <li><h2>{activities.name}</h2></li>
                      <li>{activities.location}</li>
                     <li><p>{activities.act_info}</p></li>
                      <ModalExample id={users.id} />
                    </div>
                  </div>
                </ul>))
              }

              </div>
        )
    }
}