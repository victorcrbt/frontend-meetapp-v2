import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  overflow: hidden;

  label {
    div {
      width: 100%;
      height: 200px;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
      }
    }

    input {
      display: none;
    }
  }
`;
