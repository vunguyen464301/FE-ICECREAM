import authTypes from '../actions/types'

const initialState = {
  account: null,
  loading: false,
  error: null,
  isLoggedIn: false
}

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case authTypes.SIGN_IN_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case authTypes.SIGN_IN_SUCCESS: {
      return {
        ...state,
        account: payload.account,
        isLoggedIn: true,
        loading: false
      }
    }
    case authTypes.SIGN_IN_WARNING:{
      return {
        ...state,
        error: payload.error,
        isLoggedIn: true,
        loading: false
      }
    } 
    case authTypes.SIGN_IN_FAILURE: {
      return {
        ...state,
        error: payload.error,
        isLoggedIn: false,
        loading: false
      }
    } 
    case authTypes.SIGN_OUT: {
      return initialState
    }
    default:
      return state
  }
}

export default reducer;