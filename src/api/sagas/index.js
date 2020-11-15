import { all, takeLatest, takeLeading } from 'redux-saga/effects'

import authTypes from '../../services/actions/types'

import { signIn, signOut, updateAccountPassword } from './signin.saga'
import { signUp } from './signup.saga'
export default function* rootSaga() {
  yield all([
    takeLatest(authTypes.SIGN_IN, signIn),
    takeLeading(authTypes.SIGN_OUT, signOut),
    takeLatest(authTypes.SIGN_UP, signUp),
    takeLatest(authTypes.UPDATE_ACCOUNT_PASSWORD, updateAccountPassword)

  ])
}
