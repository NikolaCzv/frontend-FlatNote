import { combineReducers } from 'redux'
import login from './loginReducer'
import noteReducer from './noteReducer'

export default combineReducers({
    login,
    noteReducer
})