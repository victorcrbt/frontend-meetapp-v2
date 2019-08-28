import React from 'react';
import { useSelector } from 'react-redux';
import { MdSave } from 'react-icons/md';

import TextInput from '~/components/TextInput';

import { Container, ProfileForm, Separator, ConfirmButton } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <ProfileForm initialData={profile}>
        <TextInput name="name" placeholder="Digite seu nome" />
        <TextInput name="email" placeholder="Digite seu e-mail" />

        <Separator />

        <TextInput
          name="oldPassword"
          type="password"
          placeholder="Digite sua senha atual"
        />
        <TextInput
          name="password"
          type="password"
          placeholder="Digite sua nova senha"
        />
        <TextInput
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />

        <ConfirmButton type="submit">
          <MdSave size={20} color="#fff" />
          Salvar perfil
        </ConfirmButton>
      </ProfileForm>
    </Container>
  );
}
