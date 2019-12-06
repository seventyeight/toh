import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../context';
import './DashBoard.scss';

export default function DashBoard() {
  const { heroes } = useContext(AppState);
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
