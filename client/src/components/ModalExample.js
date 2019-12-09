import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from './ModalExample.module.css';
import axios from 'axios';
import Confirm from './Confirm.js';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      a_id:this.props.a_id,
      email: "",
      password: "",
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  /* function for confirm button*/
  /* has to check if the email and password are correct */
  /* needs to collect user id based on email and password */
  /* not a login! */
  /* a_id = activity id */
  confirm(a_id){

    // refers to function in Confirm.js
      let email=document.getElementById('email').value;
      let password=document.getElementById('password').value;
        Confirm(email, password);
        console.log(localStorage.getItem('userId'));
      let userId = localStorage.getItem('userId');
        
        if(userId === false){
          console.log('wrong info')
          alert("Wrong username or password");

        }
        else  {
            // executed when the email and pass are correct: 
            // combine user id with act id in table act_to_user
              axios.post('http://localhost:4000/activities/act_to_user',{act_id:a_id, id:userId})
              .then(res => {
                console.log(userId);
  
              })
              .catch(error => {
                console.log(error.response);
              });
              
          // fill a place in table activities column filled_places 
          // gets act_id from state "a_id" 
              axios.get('http://localhost:4000/activities/act_id/'+a_id)
              .then(res => {
                console.log(userId);    
              })
              .catch(error => {
                console.log(error.response);
              });
          
          // close modal    
            this.setState({
              modal: !this.state.modal
            }); 
        } 
  }

  render() {
    return (
      <div className={styles.modalStyle}>
        <Button className={styles.button} onClick={this.toggle}>{this.props.buttonLabel}Join</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm</ModalHeader>
          <ModalBody>
          
          <p>We need your email and password for confirmation.
          </p> 
                   
            <div>
              <form>
                <table>
                <tr>
                  <td>Email</td>
                  <td><input name="email" id="email" placeholder="email"></input></td><br></br>
                  </tr>                  
                  
                  <tr>
                  <td>Password</td>
                  <td><input type="password" name="password" id="password" placeholder="password"></input></td><br></br>
                  </tr>
                </table>
              </form>
            </div>

          </ModalBody>
          <ModalFooter>
            <Button color = "primary" className={styles.button} onClick={this.confirm.bind(this, this.state.a_id)}>Confirm</Button>{' '}
            <Button className={styles.button} onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;