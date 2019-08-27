import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';
import TextInput from '~/components/TextInput';
import TextArea from '~/components/TextArea';
import DateInput from '~/components/DateInput';

import {
  Container,
  MeetupForm,
  EditButton,
  DeleteButton,
  ConfirmButton,
} from './styles';

import newMeetupValidator from '~/validators/newMeetupValidator';

export default function NewMeetup({ match }) {
  const [meetup, setMeetup] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function loadMeetup() {
      const meetupId = match.params.id;

      try {
        const response = await api.get(`/meetups/${meetupId}`);

        const meetupData = response.data;

        meetupData.date = format(parseISO(meetupData.date), 'dd/MM/yyyy HH:mm');

        setMeetup(meetupData);
      } catch (err) {
        toast.error('Falha ao carregar dados do meetup.');
      }
    }

    loadMeetup();
  }, [match.params.id])

  async function handleSubmit(data) {
    const meetupId = match.params.id;

    try {
      await api.put(`/meetups/${meetupId}`, data);

      toast.success('Meetup atualizado com sucesso!');
      setEditing(false);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  async function handleDelete() {
    const meetupId = match.params.id;

    try {
      await api.delete(`/meetups/${meetupId}`);

      toast.success('Meetup excluido com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <Container>
      {meetup.description && (
        <MeetupForm
          initialData={meetup}
          onSubmit={handleSubmit}
          schema={newMeetupValidator}
        >
          <BannerInput name="banner_id" disabled={!editing && true} />

          <TextInput
            name="title"
            placeholder="Digite o título do seu meetup"
            disabled={!editing && true}
          />
          <TextArea
            name="description"
            placeholder="Descreva o seu meetup em algumas linhas"
            disabled={!editing && true}
          />
          <TextInput
            name="location"
            placeholder="Digite o local em que ocorerrá o meetup"
            disabled={!editing && true}
          />
          <DateInput
            name="date"
            placeholder="Digite a data do seu meetup"
            disabled={!editing && true}
          />

          <div className="controls">
            <DeleteButton
              type="button"
              disabled={editing && true}
              onClick={handleDelete}
            >
              Excluir
            </DeleteButton>

            {editing ? (
              <ConfirmButton type="submit">Salvar meetup</ConfirmButton>
            ) : (
              <EditButton type="button" onClick={() => setEditing(true)}>
                Editar
              </EditButton>
            )}
          </div>
        </MeetupForm>
      )}
    </Container>
  );
}
