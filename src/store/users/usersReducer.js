/* eslint-disable default-case */
// import {v4 as uuid} from 'uuid'
import usersFromApi from '../../api/users'
import { USERS_ADD, USERS_GET } from '../actionsTypes'





/**
 * @const initialState
 */
const initialState = {
    users: [],
}

export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case USERS_ADD : {
            return {...state}
        }
        case USERS_GET : {
            // usersFromApi
            console.log(action.payload);
            
            if(!localStorage.getItem('users')) {
                const usersApi = JSON.stringify(usersFromApi)
                localStorage.setItem('users', usersApi)
            }
            const users = JSON.parse(localStorage.getItem('users'))
            console.log(users);
            return {...state, users }
        }
    }
    return state
}

