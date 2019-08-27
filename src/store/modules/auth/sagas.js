import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInRequest, signInSuccess, signFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    toast.success('Usuário logado com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao realizar login. Favor, verifique suas credenciais.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    yield call(api.post, '/users', { name, email, password });

    toast.success('Usuário cadastrado com sucesso! Você está agora logado!');
    yield put(signInRequest(email, password));
  } catch (err) {
    toast.error('Erro ao realizar cadastro. Favo, verifique seus dados.');
    yield put(signFailure());
  }
}

export function signOut() {
  toast.success('Você saiu do sistema!');
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('persist/REHYDRATE', setToken),
]);
