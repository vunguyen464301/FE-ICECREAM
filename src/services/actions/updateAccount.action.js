import authTypes from './types'

/* Update account */

export const updateAccountPassword = (account, updateAccountPasswordSuccess, updateAccountPasswordFailure) => ({
  type: authTypes.UPDATE_ACCOUNT,
  account,
  updateAccountPasswordSuccess,
  updateAccountPasswordFailure
})

export const updateAccountPasswordRequest= () => ({
  type: authTypes.UPDATE_ACCOUNT_REQUEST
})

export const updateAccountPasswordSuccess = account => ({
  type: authTypes.UPDATE_ACCOUNT_SUCCESS,
  account
})

export const updateAccountPasswordFailure = error => ({
  type: authTypes.UPDATE_ACCOUNT_FAILURE,
  error
})
