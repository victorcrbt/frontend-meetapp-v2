import { takeLatest, call, all, put } from 'redux-saga/effects';

import { signInRequest, signInSuccess, signFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    console.tron.log(user);

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    yield call(api.post, '/users', { name, email, password });

    yield put(signInRequest(email, password));
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
