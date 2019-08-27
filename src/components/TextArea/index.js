import React from 'react';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function TextArea({ styles, name, ...rest }) {
  return (
    <Container styles={styles}>
      <Input name={name} {...rest} multiline />
    </Container>
  );
}
