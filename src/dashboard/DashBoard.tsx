import React, { Component, ContextType } from 'react';
import { AppState } from '../context';
import { Link } from 'react-router-dom';
import './DashBoard.scss';

export default class Dashboard extends Component {
  static contextType = AppState;
  context!: ContextType<typeof AppState>;
  render() {
    const { heroes } = this.context;
    return (
      <div className='dashboard'>
        <h3>Top Heroes</h3>
        <div className='grid grid-pad'>
          {heroes.slice(1, 5).map(hero => (
            <Link key={hero.id} className='col-1-4' to={`/detail/${hero.id}`}>
              <div className='module hero'>
                <h4>{hero.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
