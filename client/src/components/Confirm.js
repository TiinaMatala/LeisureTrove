import axios from 'axios';
const bcrypt = require('bcryptjs');
const db = require('./database');


export default function Confirm(email, password) {

    console.log(email);
    console.log(password);

    var promise1 = new Promise(function(resolve, reject) {
    if (email && password) { 
      axios
          .post('http://localhost:4000/users/login', {email, password},)
        if (results.length > 0) {
            if(bcrypt.compareSync(password,results[0].password)){
              console.log("match");
              resolve(true);
            }
            else {
              console.log("wrong password");
              resolve(false);
            }
        }  	
            else {
              console.log("user does not exist");
              resolve(false);
            }		
        }
        else {
        console.log("parameters not send");
        resolve(false);
      }
   } );
    
    return promise1;
  }; 

/*           .then(res => {

            if(res.data==false){
              console.log('un auth');
            }
            else {
              console.log('authorized');
              console.log(res.data);
              localStorage.setItem('userId', res.data);
            }
          })
          .catch(() => {
            console.log('catsch');
            
        }
        ) */

