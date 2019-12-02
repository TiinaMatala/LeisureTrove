import axios from 'axios';


export default function Confirm(email1, password1) {
    axios.post('http://localhost:4000/users/login', { email:email1, password:password1 })
    .then(res => {
    if(res.data.errno>0) {
        console.log('wrong info')
    }
    else {
    {/*this.componentDidMount();*/}
    } 
    if(res.data==false){
    console.log('un auth');
    localStorage.setItem('email','Guest');
    localStorage.setItem('userId',0);
    }
    else {
    console.log('authorized');
    console.log(res.data);
    localStorage.setItem('userId', res.data);
    }
    })
    .catch(() => {
    })
};
 




