import React from 'react';

import { Container } from './styles';

export default function SubmitButton({ children, styles, type, ...rest }) {
  return (
    <Container>
      <button styles={styles} type={type} {...rest}>
        {children}
      </button>
    </Container>
  );
}
