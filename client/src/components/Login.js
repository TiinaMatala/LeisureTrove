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
    let myauth=MySingleton.getInstance();
    this.setState({email:myauth.getUser()});
  }

  login = event => {
        let myauth=MySingleton.getInstance();
        console.log("login");
        event.preventDefault();
        const { email, password } = this.state;
    
        axios
          .post('http://localhost:4000/users/login', { email, password},
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
            if(res.data==false){
              console.log('un auth');
              myauth.setAuth('Quest','');
            }
            else {
              console.log('authorized');
              myauth.setAuth(res.data,this.state.password);
            }
            this.setState({email:myauth.getUser()});
          })
          .catch(error => {
            this.setState({
              message: "ERROR: You have to be administrator to access this option "
            });
          })
      };

  logout(){
    var myauth=MySingleton.getInstance();
    myauth.setAuth('Quest',null);
    this.setState({email:"Quest"});
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
                            <td><button onClick={ this.Cancel.bind(this) }>Cancel</button></td>
                        </tr>

                        </tbody>  

                    </table>

                </div>

            </form>
            
            </div>
        )
    }
}
