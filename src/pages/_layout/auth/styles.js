import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 315px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 50px;
      margin-bottom: 40px;
    }

    a {
      color: rgba(255, 255, 255, 0.6);
      margin-top: 10px;
    }
  }
`;
