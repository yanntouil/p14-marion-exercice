
import {USERS_ADD, USERS_GET} from '../actionsTypes'



/**
 * Add an user
 * @param {Object} employee
 * @returns {Object}
 */
export const usersAdd = (user) => {
    return { type: USERS_ADD, payload: user}
}

/**
 * get an user
 */
export const usersGet = () => { 
    return { type: USERS_GET }
}