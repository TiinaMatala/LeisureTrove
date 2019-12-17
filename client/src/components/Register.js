import React, { Component } from 'react';
import styles from './Register.module.css';
import axios from 'axios';

export default class Register extends Component {

    constructor(props) 
  {
    super(props);

    this.state = {
      message: "",
      name: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
  }
 
executeRegister = event => {
    event.preventDefault();
   
    const { name, email, password } = this.state;

    axios
    .post('http://localhost:4000/users', 
    { name, email, password })

    .then(res => {
        console.log(res.data);
        if(res.data.errno>0) {
            this.setState({
              message: "ERROR: "+res.data.sqlMessage
            });
          }
        else {
            this.props.history.goBack();
          }
    });
}

Cancel = event => {
    event.preventDefault();
    this.props.history.goBack();
}

onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };


    render() {
        return (
            <div className={styles.register}> 
                <div className={styles.header}>
                <h1 className={styles.h1}>Leisure Trove</h1>
                {this.state.message}
                </div>

            <div>
                <div className= {styles.registerForm}>
                  <h3>REGISTER<br></br>
                  Here you can register to our service. Please note that your email works as your username when you login</h3>
                </div>
                
                <div className={styles.container}>
                <form onSubmit= { this.executeRegister.bind(this) }>
                  <table>
                    <thead>

                    </thead>

                    <tbody>

                    <tr>
                        <td><label htmlFor="name">Name</label></td>
                        <td><input name="name" type="text" placeholder="Your fullname" onChange={this.onChange}></input></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="email">Email</label></td>
                        <td><input name="email" type="text" placeholder="Works as username" onChange={this.onChange}></input></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="password">Password</label></td>
                        <td><input type="password" name="password" placeholder="Password" onChange={this.onChange}></input></td>
                    </tr>

                    <tr>
                        <td><input className={styles.submit} type="submit" value="Submit"/></td>
                        <td><button onClick = { this.Cancel } className={styles.button}>Cancel</button></td>
                    </tr>
                  </tbody>
                  </table>
                </form>
                </div>
            </div>
            </div>
        )
    }
}
