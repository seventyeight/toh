import React, { Component } from 'react';
import { Hero } from '../models';
interface HeroProps {
  hero: Hero;
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMod: (value: string) => void;
}

export class HeroDetail extends Component<HeroProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.hero.name.toUpperCase()} Details</h2>
        <div>
          <span>id: </span>
          {this.props.hero.id}
        </div>
        <div>
          <label>
            name:
            <input
              value={this.props.hero.name}
              onChange={e => this.props.onChangeMod(e.target.value as string)}
              placeholder="name"
            />
          </label>
        </div>
      </div>
    );
  }
}
