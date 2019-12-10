import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import axios from 'axios';



class Activities extends Component {

    constructor(props) {

        super(props);

        this.getactivities = this.getactivities.bind(this);

        this.state = {

        activities: []

        };

        this.getactivities(this.props.match.params.id);

    }


    getactivities(act_id) {

      axios.get('http://localhost:4000/activities/'+act_id).then(res => {

      const activities = res.data;

      this.setState({ activities });

      });

      }

   
      render() {

        return (

          <div className="container">

            <h2>activity list</h2>

            <table className="table">

              <thead>

                

              </thead>

              

                {this.state.activities.map(activities => (

               <tbody key={activities.id}>

                <tr><th>activity name</th><td>{activities.name}</td></tr>

                <tr><th></th><td>{activities.location}</td></tr>    

                <tr><th></th><td>{activities.price}</td></tr>                    

                </tbody>         

                ))}

            </table>

          </div>

        );

      }

    }


 export default Activities ;
