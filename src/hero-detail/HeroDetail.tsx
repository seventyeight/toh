import React, { Component, ContextType, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AppState } from '../context';
import { Hero } from '../models';
import './HeroDetail.scss';

// export default class HeroDetail extends Component<
//   RouteComponentProps<{ id: string }>
// > {
//   static contextType = AppState;
//   context!: ContextType<typeof AppState>;
//   render() {
//     const { heroes, edit } = this.context;
//     const hero = heroes.find(
//       hero => hero.id === +this.props.match.params.id
//     ) as Hero;
//     return hero ? (
//       <div className='HeroDetail'>
//         <h2>{hero.name.toUpperCase()} Details</h2>
//         <div>
//           <span>id: </span>
//           {hero.id}
//         </div>
//         <div>
//           <label>
//             name:
//             <input
//               value={hero.name}
//               onChange={e => {
//                 edit(hero.id, e.target.value as string);
//               }}
//               placeholder='name'
//             />
//           </label>
//         </div>
//       </div>
//     ) : null;
//   }
// }

export default function HeroDetail({
  match
}: RouteComponentProps<{ id: string }>) {
  const { heroes, edit } = useContext(AppState);
  const hero = heroes.find(hero => hero.id === +match.params.id) as Hero;
  return hero ? (
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
  ) : (
    <div />
  );
}
