import authTypes from '../actions/types'

const initialState = {
  account: null,
  loading: false,
  error: null,
  isCreate: false
}

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case authTypes.SIGN_UP_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case authTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        account: payload.account,
        isCreate: true,
        loading: false
      }
    }
    case authTypes.SIGN_UP_FAILURE: {
      return {
        ...state,
        error: payload.error,
        isCreate: false,
        loading: false
      }
    }
    default:
      return state
  }
}

export default reducer;