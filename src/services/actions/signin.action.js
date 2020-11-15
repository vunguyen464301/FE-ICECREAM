import authTypes from './types'

/* Sign in */

export const signIn = (account, loginSuccess, loginFailure) => ({
  type: authTypes.SIGN_IN,
  account,
  loginSuccess,
  loginFailure
})

export const updateAccountPassword = (account, loginSuccess, loginWarning) => ({
  type: authTypes.UPDATE_ACCOUNT_PASSWORD,
  account,
  loginSuccess,
  loginWarning
})

export const signInRequest = () => ({
  type: authTypes.SIGN_IN_REQUEST
})

export const signInSuccess = account => ({
  type: authTypes.SIGN_IN_SUCCESS,
  account
})

export const signInWarning = error =>({
  type: authTypes.SIGN_IN_WARNING,
  error
}) 

export const signInFailure = error => ({
  type: authTypes.SIGN_IN_FAILURE,
  error
})

/* Sign out */

export const signOut = () => ({
  type: authTypes.SIGN_OUT
})
