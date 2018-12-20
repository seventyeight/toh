import React, { Component } from 'react';
import './App.css';
import HeroesComponent from './components/Heroes';
// import logo from './logo.svg';

export default class App extends Component {
  private title = 'Tour of Heroes';
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <HeroesComponent />
      </div>
    );
  }
}
