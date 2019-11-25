import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from './ModalExample.module.css';
import axios from 'axios';


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  /* function for confirm button*/
  confirm(id){
    axios.get('http://localhost:4000/activities/act_id/'+id)
    .then(res => {
      console.log('success')      
    })
    .catch(error => {
      console.log(error.response);
    });
  }

  render() {
    return (
      <div className={styles.modalStyle}>
        <Button className={styles.button} onClick={this.toggle}>{this.props.buttonLabel}Join</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm</ModalHeader>
          <ModalBody>
          <p>We need your email and password for confirmation.
          If you must cancel, let us know beforehand by email or phone! 
          </p>

            <div>
              <form>
                <table>
                <tr>
                  <td>Email</td>
                  <td><input name="email" placeholder="email"></input></td><br></br>
                  </tr>                  
                  
                  <tr>
                  <td>Password</td>
                  <td><input type="password" name="password" placeholder="password"></input></td><br></br>
                  </tr>
                </table>
              </form>
            </div>

          </ModalBody>
          <ModalFooter>
            <Button color = "primary" className={styles.button} onClick={this.confirm.bind()}>Confirm</Button>{' '}
            <Button className={styles.button} onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;