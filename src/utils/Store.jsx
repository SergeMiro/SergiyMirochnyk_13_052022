import { combineReducers, createStore } from 'redux'
import userReducer from '../reducer/User'

/**
 * @function reducer
 * create the store & put all reducers together
 * with combineReducer (prepared for transactionsReducer)
 */
const reducer = combineReducers({
  user: userReducer,
})

/**
 * link with reduxDevTools in browser
 */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(reducer, reduxDevTools)
