import React, { Component } from 'react';
import styles from './Userinfo.module.css'; 
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class EditUser extends Component {

  constructor(props) {

    console.log('update_const');

    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.getuser = this.getuser.bind(this);
    this.getSelected = this.getSelected.bind(this);
     this.state = {
         id: localStorage.getItem('userId'),
           name: '',
          email: '',
           password: ''

    };

    this.getSelected(localStorage.getItem('userId'));
    }

    onChange = e => {
      console.log('text changed');
    const state = this.state;
 state[e.target.name] = e.target.value;
 this.setState(state);

  };

  getSelected(id) {

    axios.get('http://localhost:4000/users/'+id).then(res => {

      const state = {
        name: res.data[0].name,
        email: res.data[0].email,
        password: res.data[0].password

      };

      this.setState(state);

    });

    }



  getuser(val) {

    this.setState({ id: val.target.value });

    axios.get('http://localhost:4000/users/'+val.target.value).then(res => {

      const state = {

        name: res.data[0].name,
        email: res.data[0].email,
        password: res.data[0].password

      };

      this.setState(state);

    });

  }



  updateInputValue(val) {

    this.setState({ id: val.target.value });

    console.group("update");

  }

  handleSubmit = event => {


    event.preventDefault();

    //const id = this.state.id;

    const {id, name ,email , password} = this.state;
    console.log('subit id=',id);
    axios

      .put('http://localhost:4000/users/'+id , {name, email, password},

      {

        auth:{

          
          email:email,
          password:password,

        }

      })

      alert("Information updated, press Back");
      

  };
  render() {

    return (
<div>
            
<div className={styles.header}>
                <h1 className={styles.h1} style={{flexGrow: 8}}>Leisure Trove</h1>
                <div ><Link to ="/"><button className={styles.button}>Logout</button></Link></div>

            </div>

            <div className={styles.notice}>
               <h3>Update your user information <br></br>
               </h3>
            </div>   

            <div>
              <div className={styles.filter}>
                <div><Link to ="/userinfo"><button className={styles.button}>Account</button></Link></div>
                <div><Link to ="/activities"><button className={styles.button}>Activities</button></Link></div>
              </div> 
            </div>


        <p className="error">{this.state.message}</p>

         <form onSubmit={this.handleSubmit}>

          <table className={styles.table}>
          <tbody>
          <tr> <td>
               <label>Name</label>
              </td> 
              <td>
                 <input type="text" name="name" onChange={this.onChange} value={this.state.name} />
               </td>
          </tr>
          <tr><td width="80px">
                  <label>Email</label> </td>
             <td>
                 <input type="text" name="email" value={this.state.email} onChange={this.onChange}  />
             </td> 
          </tr>

          <tr> <td>
               <label>Password</label> </td> 
              <td>
                  <input type="text" name="password" onChange={this.onChange} value={this.state.password}/>
             </td>
          </tr>

          <tr>
                <td>
                <input className={styles.button} type="submit" value="Edit"/>
                </td>
                <td>
                  <div><Link to ="/userinfo"><button className={styles.button}>Back</button></Link></div>
                </td>
          </tr>

            </tbody>

          </table>

        </form>

      </div>

    );

  }

}




export default EditUser ;