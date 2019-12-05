import React, { Component, ContextType } from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../context';
import './Heroes.scss';

export class HeroesComponent extends Component {
  static contextType = AppState;
  context!: ContextType<typeof AppState>;
  render() {
    const { heroes } = this.context;
    return (
      <div className='Heroes'>
        <h2>My Heroes</h2>
        <ul className='heroes'>
          {heroes.map(hero => (
            <li key={hero.id}>
              <Link to={`/detail/${hero.id}`}>
                <span className='badge'>{hero.id}</span>
                {hero.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
