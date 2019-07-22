import axios from 'axios';
import {chageUserAuth} from './../../store/action/userAction';
const url = 'https://reqres.in/api/login';

export function userAuth(auth){
    return (dispatch) =>{
        return axios.post(url,auth)
        .then(res => {
            dispatch(chageUserAuth(res));
        })
        .catch( err => {
            throw(err)
        })
    }
}