import { combineReducers } from 'redux'
import signinReducer from './signin.reducer'
import signupReducer from './signup.reducer'

const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer
})

export default rootReducer;