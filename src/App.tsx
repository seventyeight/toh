import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.scss';
import { AppState } from './context';
import { getHeroes } from './hero.service';
import { Hero } from './models';
import { routes } from './routes';

interface State {
  heroes: Hero[];
}

export default class App extends Component<{}, State> {
  private title = 'Tour of Heroes';

  readonly state: State = { heroes: [] };

  componentDidMount() {
    getHeroes().then(heroes => this.setState({ heroes }));
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.title}</h1>
        <AppState.Provider
          value={{ ...this.state, edit: this.edit.bind(this) }}>
          <Router>
            <nav>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/heroes'>Heroes</Link>
            </nav>
            {routes()}
          </Router>
        </AppState.Provider>
      </div>
    );
  }

  private edit(id: number, name: string): void {
    const newHeroes = [...this.state.heroes];
    newHeroes[newHeroes.findIndex((hero: Hero) => hero.id === id)] = {
      id,
      name
    };
    this.setState({ heroes: newHeroes });
  }
}
