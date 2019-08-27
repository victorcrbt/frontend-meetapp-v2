import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;


  input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 0;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.5);

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  span {
    color: #EB3750;
    font-weight: bold;
  }
`;
