import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import NewMeetup from '~/pages/Meetup/New';
import ViewMeetup from '~/pages/Meetup/View';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route exact path="/meetup/new" component={NewMeetup} isPrivate />
      <Route path="/meetup/:id" component={ViewMeetup} isPrivate />
    </Switch>
  );
}
