import { combineReducers } from 'redux'
import userAPI from './user-api'
import userDatabase from './user-database'

const rootReducer = combineReducers({
  userAPI,
  userDatabase
})

export default rootReducer
