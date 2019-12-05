import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AppContext } from '../App';
import { getHero } from '../hero.service';
import '../HeroDetail.scss';
import { Hero } from '../models';

interface HeroDetailState {
  hero: Hero;
}

export class HeroDetail extends Component<
  RouteComponentProps<{ id: string }>,
  HeroDetailState
> {
  heroId: number = 0;
  constructor(props: any) {
    super(props);
    this.state = { hero: { id: 0, name: '' } };
  }

  componentDidMount() {
    console.log('context', this.context);
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ heroes, edit }) => {
          const hero = heroes.find(
            hero => hero.id === +this.props.match.params.id
          ) as Hero;
          return (
            hero && (
              <div className='HeroDetail'>
                <h2>{hero.name.toUpperCase()} Details</h2>
                <div>
                  <span>id: </span>
                  {hero.id}
                </div>
                <div>
                  <label>
                    name:
                    <input
                      value={hero.name}
                      onChange={e => {
                        edit(hero.id, e.target.value as string);
                      }}
                      placeholder='name'
                    />
                  </label>
                </div>
              </div>
            )
          );
        }}
      </AppContext.Consumer>
    );
  }
}
