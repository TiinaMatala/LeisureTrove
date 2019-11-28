import axios from 'axios';
import constants from '../constants.json';

let userInfo = {
    email: null,
    password: null
}

let myAuth = {
    authenticate: (email, password) => {
        return new Promise ((resolve, reject) => {
            axios.get(constants.baseAddress + '/users/:id',
            {
                auth: {
                    email: email,
                    password: password
                }
            })
            .then(result => {
                userInfo = {
                email: email,
                password: password
                }
                resolve();
            })
            .catch(error =>
                {
                    console.log(error);
                    reject();
                }
            )
        });
    },
    getAxiosAuth: () => {
        return {
            auth: userInfo
        }
    }
}
export default myAuth;