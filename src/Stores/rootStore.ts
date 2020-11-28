import { createContext } from 'react';
import DataStore from './dataStore';
import { ViewStore } from './viewStore';

/** Root store gir tilgang til alle substores i applikasjonen.*/
export class RootStore
{
    // felt for tilgjengelige stores i root
    dataStore: DataStore;
    viewStore: ViewStore;

    // constructors legger til felt i rootStore objekt
    constructor()
    {
        // legg til stores objekter som ny instans
        this.dataStore = new DataStore(this);
        this.viewStore = new ViewStore(this);
    }
}

// eksporter rootStore som react context
// bruk useContext metode for tilgang
export const rootStoreContext = createContext(new RootStore());