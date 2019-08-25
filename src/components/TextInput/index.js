import React from 'react';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function TextInput({ styles, name, ...rest }) {
  return (
    <Container styles={styles}>
      <Input name={name} {...rest} />
    </Container>
  );
}
