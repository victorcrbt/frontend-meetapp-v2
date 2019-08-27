import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function loadMeetups() {
      try {
        const response = await api.get('/organizing', {
          params: {
            page,
          },
        });

        setMeetups(response.data.meetups);
        setTotalPages(response.data.total_pages);
      } catch (err) {
        toast.error('Erro interno no servidor.');
      }
    }

    loadMeetups();
  }, [page]);

  function prevPage() {
    if (page === 1) return;

    setPage(page - 1);
  }

  function nextPage() {
    if (page >= totalPages) return;

    setPage(page + 1);
  }

  return (
    <Container>
      <Header>
        <PageTitle>Meus meetups</PageTitle>

        <NewMeetupButton to="/meetup/new">
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
                {format(parseISO(meetup.date), "dd 'de' MMMM 'de' yyyy', às' HH'h'mm", {
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
        <PageButton disabled={page === 1 && true} onClick={prevPage}>
          Anterior
        </PageButton>

        <PageButton disabled={page >= totalPages && true} onClick={nextPage}>
          Próxima
        </PageButton>
      </Pagination>
    </Container>
  );
}
