import { Hero } from './models';
import { createContext } from 'react';

interface AppContext {
  heroes: Hero[];
  edit: (id: number, name: string) => void;
}

export const AppState = createContext<AppContext>({
  heroes: [],
  edit: () => ''
});
