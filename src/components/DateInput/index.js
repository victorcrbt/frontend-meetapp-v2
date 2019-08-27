import React, { useState } from 'react';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function DateInput({ styles, name, ...rest }) {
  const [inputType, setInputType] = useState('text');

  function checkInputValue(e) {
    if (e.target.value === '') {
      return setInputType('text');
    }

    return setInputType('datetime-local');
  }

  return (
    <Container styles={styles}>
      <Input
        name={name}
        type={inputType}
        {...rest}
        onFocus={() => setInputType('datetime-local')}
        onBlur={checkInputValue}
      />
    </Container>
  );
}
