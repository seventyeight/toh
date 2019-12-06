import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './dashboard/DashBoard';
import HeroDetail from './hero-detail/HeroDetail';
import Heroes from './heroes/Heroes';

export function routes() {
  return (
    <>
      <Route exact path='/' component={Dashboard} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/heroes' component={Heroes} />
      <Route path='/detail/:id' component={HeroDetail} />
    </>
  );
}
