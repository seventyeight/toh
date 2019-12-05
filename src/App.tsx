import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/DashBoard';
import { HeroDetail } from './components/HeroDetail';
import { HeroesComponent } from './components/Heroes';
import { getHeroes } from './hero.service';
import { Hero } from './models';
// import Heroes from './components/Heroes';
// import logo from './logo.svg';

interface AppContext {
  heroes: Hero[];
  edit: (id: number, name: string) => void;
}

export const AppContext = React.createContext<AppContext>({
  heroes: [],
  edit: () => ''
});

export default class App extends Component<any, { heroes: Hero[] }> {
  private title = 'Tour of Heroes';
  constructor(props: any) {
    super(props);
    this.state = { heroes: [] };
  }

  componentDidMount() {
    getHeroes().then(heroes => this.setState({ heroes }));
  }

  render() {
    return (
      <AppContext.Provider
        value={{ ...this.state, edit: this.edit.bind(this) }}>
        <Router>
          <div>
            <div className='App'>
              <h1>{this.title}</h1>
              <nav>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/heroes'>Heroes</Link>
              </nav>
            </div>
            <Route exact path='/' component={Dashboard} />
            <Route path='/heroes' component={HeroesComponent} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/detail/:id' component={HeroDetail} />
          </div>
        </Router>
      </AppContext.Provider>
    );
  }

  private edit(id: number, name: string): void {
    console.log('state', this);
    console.log('foo', id, name);
    const newHeroes = [...this.state.heroes];
    newHeroes[newHeroes.findIndex((hero: Hero) => hero.id === id)] = {
      id,
      name
    };
    this.setState({ heroes: newHeroes });
  }
}
