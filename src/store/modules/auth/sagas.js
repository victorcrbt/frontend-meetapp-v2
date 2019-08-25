import { takeLatest, all, put } from 'redux-saga/effects';

import { signFailure } from './actions';

export function* signIn({ payload }) {
  yield put(signFailure());
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
