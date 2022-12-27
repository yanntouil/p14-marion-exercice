import {createStore, combineReducers, compose, applyMiddleware} from 'redux'//, applyMiddleware
import thunk from 'redux-thunk'
import usersReducer from './users/usersReducer'



/**
 * Conbine reducers
 */
const rootReducer = combineReducers({
    usersReducer,
})

/**
 * Create store
 */
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),// Defered dispatch
        // window.navigator.userAgent.includes('Chrome') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose
    )
)
export default store