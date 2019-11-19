import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default function userinfo() {

   
}

componentDidUpdate(prevProps) {

    if (this.props.ID !== prevProps.ID) {
      this.fetchData(this.props.ID);
    }
  }
}