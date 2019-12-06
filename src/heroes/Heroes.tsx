import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../context';
import './Heroes.scss';

export default function Heroes() {
  const { heroes } = useContext(AppState);
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
