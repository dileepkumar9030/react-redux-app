import {UPDATE_USER, SHOW_ERROR} from '../actions/user-actions'

export default function userReducer(state='', {type, payload}){
    switch(type){
        case UPDATE_USER:
            return payload.user
        case SHOW_ERROR:
            return payload.userError
        default:
            return state
    }
    
}