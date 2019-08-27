import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Container = styled.div`
  margin-top: 25px;
`;

export const Header = styled.header`
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: 42px;
  color: #eee;
`;

export const NewMeetupButton = styled(Link)`
  height: 42px;
  padding: 0 15px;
  background: #f94d6a;
  color: #fff;
  font-size: 18px;
  border: 0;
  border-radius: 5px;
  transition: background 0.2s ease;

  display: flex;
  align-items: center;

  svg {
    margin-right: 3px;
  }

  &:hover {
    background: ${lighten(0.04, '#f94d6a')};
  }
`;

export const Meetups = styled.main``;

export const Meetup = styled.article`
  padding: 20px 20px;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.1);
  color: #eee;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;

  &:hover {
    background: ${lighten(0.5, 'rgba(0, 0, 0, 0.1)')};
  }

  div {
    line-height: 10px;

    display: flex;
    align-items: center;

    svg {
      margin-left: 10px;
      transition: fill 0.2s ease;

      &:hover {
        fill: ${lighten(0.85, '#000')};
      }
    }
  }
`;

export const MeetupTitle = styled.h3`
  font-weight: lighter;
`;

export const MeetupDate = styled.time``;

export const Pagination = styled.div`
  padding: 0 2px;
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
`;

export const PageButton = styled.button`
  width: 100px;
  height: 30px;
  border: 0;
  border-radius: 5px;
  background: #f94d6a;
  color: #fff;

  &:hover {
    background: ${lighten(0.04, '#f94d6a')};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
