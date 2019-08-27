import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

import SubmitButton from '~/components/SubmitButton';

export const Container = styled.div`
  margin-top: 25px;
`;

export const PageTitle = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 42px;
`;

export const MeetupForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const ConfirmButton = styled(SubmitButton)`
  width: 200px !important;
  margin-left: auto;
`;
