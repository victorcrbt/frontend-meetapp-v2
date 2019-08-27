import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdAdd, MdRemoveRedEye } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Header,
  PageTitle,
  NewMeetupButton,
  Meetups,
  Meetup,
  MeetupTitle,
  MeetupDate,
  Pagination,
  PageButton,
} from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      try {
        const response = await api.get('/organizing');

        setMeetups(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <Header>
        <PageTitle>Meus meetups</PageTitle>

        <NewMeetupButton type="button">
          <MdAdd size={24} color="#fff" />
          Nova meetup
        </NewMeetupButton>
      </Header>

      <Meetups>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <MeetupTitle>{meetup.title}</MeetupTitle>

            <div>
              <MeetupDate>
                {format(parseISO(meetup.date), "dd 'de' MMMM', às' HH'h'", {
                  locale: pt,
                })}
              </MeetupDate>
              <Link to={`/meetup/${meetup.id}`}>
                <MdRemoveRedEye size={20} color="#eee" />
              </Link>
            </div>
          </Meetup>
        ))}
      </Meetups>

      <Pagination>
        <PageButton>Anterior</PageButton>

        <PageButton>Próxima</PageButton>
      </Pagination>
    </Container>
  );
}
