import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;

  button {
    width: 100%;
    max-width: 315px;
    height: 50px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    background: #f94d6a;
    transition: background 0.2s ease;

    &:hover {
      background: ${lighten(0.02, '#F94D6A')};
    }
  }
`;
