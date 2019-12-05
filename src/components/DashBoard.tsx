import React, { Component } from 'react';
import { AppContext } from '../App';
import '../DashBoard.scss';
import { getHeroes } from '../hero.service';
import { Hero } from '../models';

interface DashboardState {
  heroes: Hero[];
}

export default class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <h3>Top Heroes</h3>
        <div className='grid grid-pad'>
          <AppContext.Consumer>
            {({ heroes }) =>
              heroes.slice(1, 5).map(hero => (
                <a
                  key={hero.id}
                  className='col-1-4'
                  href={`/detail/${hero.id}`}>
                  <div className='module hero'>
                    <h4>{hero.name}</h4>
                  </div>
                </a>
              ))
            }
          </AppContext.Consumer>
        </div>
      </div>
    );
  }
}
