import React from 'react';

import { Container, Content } from './styles';

import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />

      <Content>
        {children}
      </Content>
    </Container>
  );
}
