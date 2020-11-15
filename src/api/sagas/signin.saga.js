import { call, put, delay } from 'redux-saga/effects'
import { authApi } from '../auth.api'
import {
  signInRequest,
  signOut as actionSignOut
} from '../../services/actions/signin.action'

export function* signIn(action) {
  const { account, loginSuccess, loginFailure } = action

  try {
    yield put(signInRequest())
    const result = yield call(authApi.signIn, account)
    yield delay(1500)

    if (result !== "") {
      loginSuccess(result);
    } else {
      loginFailure("Password's wrong!");
    }
  } catch (error) {
    loginFailure("Account's not exists !");
  }
}

export function* updateAccountPassword(action) {
  const { account, loginSuccess, loginWarning } = action
  try {
    yield put(signInRequest())
    const result = yield call(authApi.updateAccountPassword,account)
    yield delay(1500)

    if (result !== "") {
      loginSuccess(result);
    } else {
      loginWarning("Password old is wrong !");
    }
  } catch (error) {
    loginWarning("Fail " + error);
  }
}

export function* signOut() {
  try {
    yield put(actionSignOut())
  } catch (error) {
    console.error('error from signOut saga: ' + error)
  }
}
