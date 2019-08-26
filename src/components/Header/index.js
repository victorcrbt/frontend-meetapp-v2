import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Right, User, LogoutButton } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <header>
        <Link to="/dashboard">
          <img src={logo} alt="Meetapp" />
        </Link>

        <Right>
          <User>
            <strong>Victor Batalha</strong>
            <Link to="/profile">Meu perfil</Link>
          </User>

          <LogoutButton type="button" onClick={handleSignOut}>
            Sair
          </LogoutButton>
        </Right>
      </header>

    </Container>
  );
}
