import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdRemoveRedEye } from 'react-icons/md';

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

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
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
        {data.map(meetup => (
          <Meetup>
            <MeetupTitle>Meetup de ReactJS</MeetupTitle>

            <div>
              <MeetupDate>24 de Junho, às 20h</MeetupDate>
              <Link to={`/meetup/${meetup}`}>
                <MdRemoveRedEye size={20} color='#eee' />
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
