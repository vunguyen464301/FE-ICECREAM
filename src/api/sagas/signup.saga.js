import { call, put, delay } from 'redux-saga/effects'
import { authApi } from '../auth.api'
import {
  signUpRequest
} from '../../services/actions/signup.action'

export function* signUp(action) {
  const { account, signUpSuccess, signUpFailure } = action
  try {
    yield put(signUpRequest())
    const result = yield call(authApi.signUp, account)
    yield delay(1500)
    if (result !== "") {
      signUpSuccess(result);
    } else {
      signUpFailure("Account's exists !");
    }
  } catch (error) {
    signUpFailure("Create Account fail " + error + " !");
  }
}
