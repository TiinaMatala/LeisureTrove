import React, { Component } from 'react';

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

      id: this.props.match.params.id,

      name: '',
      email: '',
      password: ''

    };

    this.getSelected(this.props.match.params.id);



  }



  onChange = e => {

    const state = this.state;

    state[e.target.name] = e.target.value;

    this.setState(state);

  };

  getSelected(id) {

    axios.get('http://localhost:4000/users').then(res => {

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

    axios.get('http://localhost:4000/users').then(res => {

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

    let name=myauth.getname();
    let email=myauth.getemail();
    let pass=myauth.getPass();

    console.log("update handle");

    event.preventDefault();

    const id = this.state.id;

    const { name,email, password} = this.state;



    axios

      .put('http://localhost:4000/users', {name,email, password},

      {

        auth:{

          name:name,
          email:email,
          password:password,

        }

      })

      

  };
}