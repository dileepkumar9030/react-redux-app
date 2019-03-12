import axios from 'axios'

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';

export function updateUser(newUser){
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
        
}

export function showError(){
    return {
        type: SHOW_ERROR,
        payload: {
            userError: "ERROR!"
        }
    }
}

export function apiRequest(){
    return dispatch=>{
        axios.get("https://www.google.com")
        .then(data=>console.log("Success"))
        .catch(error=>{
            console.log("Error");
            dispatch(showError());
        })
    }
}