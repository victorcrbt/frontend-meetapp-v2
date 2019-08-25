import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';

import TextInput from '~/components/TextInput';
import SubmitButton from '~/components/SubmitButton';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <Form>
      <img src={logo} alt="MeetUp" />

      <TextInput name="email" placeholder="Digite seu e-mail" />
      <TextInput name="password" placeholder="Digite sua senha" />

      <SubmitButton type="submit">Entrar</SubmitButton>

      <Link to="/register">Criar conta grátis!</Link>
    </Form>
  );
}
