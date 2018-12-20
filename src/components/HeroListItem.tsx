import React, { ChangeEvent, Component, MouseEvent } from 'react';
import { Hero } from '../models';

interface ItemProps {
  hero: Hero;
  isSelected: boolean;
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

export class HeroListItem extends Component<ItemProps> {
  constructor(props: ItemProps) {
    super(props);
  }

  render() {
    return (
      <li
        className={this.props.isSelected ? 'selected' : undefined}
        onClick={this.props.onClick}
      >
        <span className="badge">{this.props.hero.id}</span>
        {this.props.hero.name}
      </li>
    );
  }
}
