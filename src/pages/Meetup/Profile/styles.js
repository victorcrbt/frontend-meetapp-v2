import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

import SubmitButton from '~/components/SubmitButton';

export const Container = styled.div`
  margin-top: 25px;
`;

export const ProfileForm = styled(Form)``;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background: rgba(255, 255, 255, 0.1);
`;

export const ConfirmButton = styled(SubmitButton)`
  width: 200px !important;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
  }
`;
