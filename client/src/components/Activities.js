import React, { Component } from 'react';
import axios from 'axios';
import styles from './activities.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 


class Activities extends Component {

  constructor(props) {

      super(props);

     this.getact = this.getact.bind(this);

      this.state = {

     
      act_to_user: [],
      activities: []

      };

     this.getact(localStorage.getItem('userId'));
     
   
  } 
  
/*
  componentDidMount(){
    console.log('get act');

    axios.get('http://localhost:4000/activities/act_to_user/'+localStorage.getItem('userId')).then(res => {

    const act_to_user = res.data;

    this.setState({ act_to_user });
    console.log('get');
    });
  } */

  getact(link_id) {

      console.log('get act');
      axios.get('http://localhost:4000/activities/act_to_user/'+link_id).then(res => {
      const act_to_user = res.data;
      this.setState({act_to_user });

      });
      console.log('done');
      } 
    
  


    render() {

      return (

        <div>
            <div className={styles.header}>
                <h1 className={styles.h1} style={{flexGrow: 8}}>Leisure Trove</h1>
                <div ><Link to ="/"><button className={styles.button}>Logout</button></Link></div>

            </div>
         
            <div className={styles.notice}>
               <h3>Activities </h3>
            </div>
               
            <div>
              <div className={styles.filter}>
                <div><Link to ="/userinfo"><button className={styles.button}>Account</button></Link></div>
                <div><Link to ="/activities"><button className={styles.button}>Activities</button></Link></div>
              </div> 
            </div>


          
             {this.state.act_to_user.map(act_to_user=> (
              <ul key={act_to_user.link_id} className={styles.ul}>
               <div className={ styles.flexContainer }>
                <div className={ styles.flexContainer_div }>
                  <li><h2>{act_to_user.name}</h2></li>
                  <li>{act_to_user.location}</li>
                  <li>{act_to_user.price}</li>
                  <li>{act_to_user.act_info}</li>
                  <li>{act_to_user.act_type}</li>
                </div>
               </div>
              </ul>))
              }
            </div>
        
      );

    }

  }


 export default Activities ;
