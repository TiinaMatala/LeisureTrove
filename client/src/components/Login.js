import React, { Component } from 'react';
import styles from './Login.module.css';
import axios from 'axios';

export default class Login extends Component {

  constructor(props) 
  {
    super(props);

    this.state = {
      message: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({email: localStorage.getItem('localStorageEmail')});
  }

  login = event => {
        console.log("login");
        event.preventDefault();
        const { email, password } = this.state;
    
        axios
          .post('http://localhost:4000/users/login', { email, password }
            )
          .then(res => {
            if(res.data.errno>0) {
              this.setState({
                message: "ERROR: "+res.data.sqlMessage
              });
            }
            else {
              this.componentDidMount();
            } 
            if(res.data===false){
              console.log('un auth');
              localStorage.setItem('email','Guest');
            }
            else {
              console.log('authorized');
              console.log(res.data);
             // localStorage.setItem('localStorageId', res.data);
              localStorage.setItem('localStorageEmail', email);
              localStorage.setItem('userId', res.data);
              this.props.loginSuccess();
              this.props.history.push(this.props.redirectPathOnSuccess);
            }
            this.setState({email: localStorage.getItem('localStorageEmail')});
          })
          .catch(() => {
            this.props.loginFail();
        })
      };

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
            <div>
                <div className={ styles.header }>
                <h1>Header</h1>
            </div>

            <h2>Login</h2>
            
            <form onSubmit={ this.login.bind(this) }>
                <div className={ styles.loginForm }>
                
                    <table>

                        <thead></thead>

                        <tbody>
                        
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input name="email" type="text" onChange={this.onChange}></input></td>
                        </tr>

                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td><input name="password" type="password" onChange={this.onChange}></input></td>
                        </tr>

                        <tr>
                            <td><button type="submit">Login</button></td>
                            <td><button onClick={ this.Cancel }>Cancel</button></td>
                        </tr>

                        </tbody>  

                    </table>

                </div>

            </form>
            
            </div>
        )
    }
}
