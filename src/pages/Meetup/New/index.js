import React from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';
import TextInput from '~/components/TextInput';
import TextArea from '~/components/TextArea';
import DateInput from '~/components/DateInput';


import { Container, PageTitle, MeetupForm, ConfirmButton } from './styles';

import newMeetupValidator from '~/validators/newMeetupValidator';

export default function NewMeetup() {
  async function handleSubmit(data) {
    try {
      const meetup = await api.post('/meetups', data);

      const { id } = meetup.data;

      toast.success('Meetup inserido com sucesso!');
      history.push(`/meetup/${id}`)
    } catch (err) {
      toast.error(err.response.data.error)
    }
  }

  return (
    <Container>
      <PageTitle>Novo meetup</PageTitle>

      <MeetupForm onSubmit={handleSubmit} schema={newMeetupValidator}>
        <BannerInput name="banner_id" />

        <TextInput name="title" placeholder="Digite o título do seu meetup" />
        <TextArea
          name="description"
          placeholder="Descreva o seu meetup em algumas linhas"
        />
        <DateInput name="date" placeholder="Digite a data do seu meetup" />
        <TextInput
          name="location"
          placeholder="Digite o local em que ocorerrá o meetup"
        />

        <ConfirmButton type="submit">Salvar meetup</ConfirmButton>
      </MeetupForm>
    </Container>
  );
}
