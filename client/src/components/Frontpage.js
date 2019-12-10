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
        activities: [],
        filled_places:[]
      };
    }

    changeUpdate(type) {
     localStorage.setItem('activeType', type);
     this.changeType();
      
    }
    changeType(){
        this.getByType(localStorage.getItem('activeType'));
        this.timer=setInterval(()=>this.getByType(localStorage.getItem('activeType')),5000);
      
    }
  
    getData = () => {
      axios.get('http://localhost:4000/activities')
      .then(res => {
        const activities = res.data;
        this.setState({ activities });
      })
      .catch(error => {
        console.log(error.response);
      });
    }
    componentDidMount = () => {
      this.getData();
  }

    componentWillUnmount() {
      clearInterval(this.timer);
      this.timer = null;
    }

/*filtering button function */
    getByType(type){
      axios.get('http://localhost:4000/activities/act_type/'+type)
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
            
{/*this is the info box */}
            <div className={styles.notice}>
                <h3>HOX! Lorem ipsum</h3>
            </div>

{/*these are the buttons for filtering activities */}
            <div className={styles.filter}>
              <button onClick={this.changeUpdate.bind(this, "all")}>All</button><br/>
              <button onClick={this.changeUpdate.bind(this, "music")}>Music</button><br/>
              <button onClick={this.changeUpdate.bind(this, "arts")}>Arts</button><br/>
              <button onClick={this.changeUpdate.bind(this, "outdoors")}>Outdoors</button><br/>
              <button onClick={this.changeUpdate.bind(this, "indoors")}>Indoors</button>
            </div>

{/*this is the activity card */}
              {this.state.activities.map(activities => (  
                <ul key={activities.act_id} className={styles.ul}>
                  <div className={ styles.flexContainer }>
                    <div className={ styles.flexContainer_div }>
                      <li><h2>{activities.name}</h2></li>
                      <li>{activities.location}</li>
                      <li>{activities.price} €</li>
                      <li><p>{activities.act_info}</p></li>
                      <li>{activities.filled_places}/{activities.max_places}</li>
                      <ModalExample a_id={activities.act_id} />
                    </div>
                  </div>
                </ul>))
              }
            </div>
        
    );
    }
}
export default Frontpage;
