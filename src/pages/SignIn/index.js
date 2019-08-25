import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';

import TextInput from '~/components/TextInput';
import SubmitButton from '~/components/SubmitButton';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { email, password } = data;

    dispatch(signInRequest(email, password));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <img src={logo} alt="MeetUp" />

      <TextInput name="email" placeholder="Digite seu e-mail" />
      <TextInput
        name="password"
        type="password"
        placeholder="Digite sua senha"
      />

      <SubmitButton type="submit">Entrar</SubmitButton>

      <Link to="/register">Criar conta grátis!</Link>
    </Form>
  );
}
