import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;

  const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

  try {
    const response = yield call(api.put, '/users', profile);

    yield put(updateProfileSuccess(response.data));
    toast.success('Perfil atualizado com sucesso!');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
