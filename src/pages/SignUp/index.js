import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';

import { signUpRequest } from '~/store/modules/auth/actions';

import TextInput from '~/components/TextInput';
import SubmitButton from '~/components/SubmitButton';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { name, email, password } = data;

    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <img src={logo} alt="MeetUp" />

      <TextInput name="name" placeholder="Digite seu nome" />
      <TextInput name="email" placeholder="Digite seu e-mail" />
      <TextInput
        name="password"
        type="password"
        placeholder="Digite sua senha"
      />

      <SubmitButton type="submit">Criar conta</SubmitButton>

      <Link to="/">Já possui conta?</Link>
    </Form>
  );
}
