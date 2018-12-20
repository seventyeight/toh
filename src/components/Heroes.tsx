import React, { ChangeEvent, Component } from 'react';
import { Hero } from '../models';
import { HeroDetail } from './HeroDetail';
import { HeroListItem } from './HeroListItem';

interface HeroState {
  selectedHero: Hero;
  heroes: Hero[];
  isLoading: boolean;
}

export default class Heroes extends Component<{}, HeroState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedHero: { id: 0, name: '' },
      heroes: [],
      isLoading: true
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    // fetch('./data/mock-heroes.json')
    Promise.resolve<Hero[]>([
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ])
      // .then(res => res.json())
      .then((heroes: Hero[]) => {
        this.setState({ heroes, isLoading: false });
      });
  }

  onChangeMod = (value: string) => {
    this.setState({
      selectedHero: {
        id: this.state.selectedHero!.id,
        name: value
      }
    });
    this.setState({
      heroes: this.state.heroes.map((hero: Hero) => {
        if (hero.id === this.state.selectedHero!.id) {
          return { ...hero, name: value };
        }
        return hero;
      })
    });
  };

  render() {
    if (this.state.isLoading) {
      return <span>Loading...</span>;
    }
    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {this.state.heroes &&
            this.state.heroes.map((hero: Hero) => (
              <HeroListItem
                key={hero.id}
                hero={hero}
                isSelected={
                  !!this.state.selectedHero &&
                  hero.id === this.state.selectedHero!.id
                }
                onClick={() => this.setState({ selectedHero: hero })}
              />
            ))}
        </ul>
        {this.state.selectedHero.name && (
          <HeroDetail
            hero={this.state.selectedHero}
            onChangeMod={this.onChangeMod}
          />
        )}
      </div>
    );
  }
}
