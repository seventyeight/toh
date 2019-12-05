import React, { ChangeEvent, Component } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import { getHeroes } from '../hero.service';
import '../Heroes.scss';
import { Hero } from '../models';
import { HeroDetail } from './HeroDetail';
import { HeroListItem } from './HeroListItem';

interface HeroState {
  selectedHero: Hero;
}

export class HeroesComponent extends Component<{}, HeroState> {
  // static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      selectedHero: { id: 0, name: '' }
    };
  }

  render() {
    return (
      <div className='Heroes'>
        <h2>My Heroes</h2>
        <ul className='heroes'>
          <AppContext.Consumer>
            {({ heroes }) =>
              heroes.map((hero: Hero) => (
                <li
                  key={hero.id}
                  className={this.state.selectedHero ? 'selected' : undefined}>
                  <Link to={`/detail/${hero.id}`}>
                    <span className='badge'>{hero.id}</span>
                    {hero.name}
                  </Link>
                </li>
              ))
            }
          </AppContext.Consumer>
        </ul>
      </div>
    );
  }
}
