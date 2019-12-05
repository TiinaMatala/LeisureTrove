import axios from 'axios';


export default function Confirm(email, password) {
    console.log(email);
    console.log(password);
    axios
          .post('http://localhost:4000/users/login', {email, password},
            )
          .then(res => {

            if(res.data==false){
              console.log('un auth');
              localStorage.setItem('userId','false');
            }
            else {
              console.log('authorized');
              console.log(res.data);
              localStorage.setItem('userId', res.data);
            }
          })
          .catch(() => {
            console.log('catsch');
            localStorage.setItem('userId','false');
        })
      };

 




