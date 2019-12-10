import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from './ModalExample.module.css';
import axios from 'axios';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      a_id:this.props.a_id,
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.confirm = this.confirm.bind(this);

    this.toggle = this.toggle.bind(this);
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
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

  confirm = event => {
     // event.preventDefault();
    // refers to function in Confirm.js
      
      const{ email, password } = this.state;
      console.log(email);
      console.log(password);
      axios.post('http://localhost:4000/users/login', {email, password},)
          .then(res => {
            if(res.data == false){
          //login fail
          console.log('wrong info', res.data);
          alert("Wrong username or password");
          }

          else  {
            // executed when the email and pass are correct: 
            // combine user id with act id in table act_to_user
            console.log('authorized:', res.data);  
             axios.post('http://localhost:4000/activities/act_to_user',{act_id:this.state.a_id, id:res.data})
              .then(res => {
                console.log(res.data);  
              })
              .catch(error => {
                console.log("catch act to user");
              });
              
          // fill a place in table activities column filled_places 
          // gets act_id from state "a_id" 
              axios.get('http://localhost:4000/activities/act_id/'+this.state.a_id)
              .then(res => {
                console.log(res.data);    
              })
              .catch(error => {
                console.log("catch fill place");
              });
          
          // close modal    
              this.setState({
                modal: !this.state.modal
              }); 
        } 
      })
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
                  <td><input name="email" id="email" placeholder="email" onChange={this.onChange}></input></td><br></br>
                  </tr>                  
                  
                  <tr>
                  <td>Password</td>
                  <td><input type="password" name="password" id="password" placeholder="password" onChange={this.onChange}></input></td><br></br>
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