import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Right, User, LogoutButton } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
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

          <LogoutButton type="button">Sair</LogoutButton>
        </Right>
      </header>

    </Container>
  );
}
