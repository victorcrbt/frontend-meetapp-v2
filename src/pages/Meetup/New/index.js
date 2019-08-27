import React from 'react';

import BannerInput from '~/components/BannerInput';
import TextInput from '~/components/TextInput';
import TextArea from '~/components/TextArea';
import DateInput from '~/components/DateInput';
import SubmitButton from '~/components/SubmitButton';

import { Container, PageTitle, MeetupForm } from './styles';

export default function NewMeetup() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <PageTitle>Novo meetup</PageTitle>

      <MeetupForm onSubmit={handleSubmit}>
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

        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </MeetupForm>
    </Container>
  );
}
