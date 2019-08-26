import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;

  header {
    width: 100%;
    max-width: 940px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Right = styled.nav`
  display: flex;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    color: #fff;
    font-size: 16px;
  }

  a {
    color: #999;
    transition: color 0.2s ease;

    &:hover {
      color: ${lighten(0.04, '#999')};
    }
  }
`;

export const LogoutButton = styled.button`
  background: #D44059;
  padding: 10px 20px;
  margin-left: 10px;
  color: #fff;
  border: 0;
  border-radius: 5px;
  transition: background 0.2s ease;

  &:hover {
    background: ${lighten(0.04, '#d44059')};
  }
`
