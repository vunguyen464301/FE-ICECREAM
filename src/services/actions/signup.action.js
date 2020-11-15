import authTypes from './types'

/* Sign in */

export const signUp = (account, signUpSuccess, signUpFailure) => ({
  type: authTypes.SIGN_UP,
  account,
  signUpSuccess,
  signUpFailure
})

export const signUpRequest = () => ({
  type: authTypes.SIGN_UP_REQUEST
})

export const signUpSuccess = account => ({
  type: authTypes.SIGN_UP_SUCCESS,
  account
})

export const signUpFailure = error => ({
  type: authTypes.SIGN_UP_FAILURE,
  error
})
