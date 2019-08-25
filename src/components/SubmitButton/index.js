import React from 'react';

import { Container } from './styles';

export default function SubmitButton({ children, type, ...rest }) {
  return (
    <Container>
      <button type={type} {...rest}>
        {children}
      </button>
    </Container>
  );
}
