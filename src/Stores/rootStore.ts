import { createContext } from 'react';
import DataStore from './dataStore';

/** Root store gir tilgang til alle substores i applikasjonen.*/
export class RootStore
{
    // felt for tilgjengelige stores i root
    dataStore: DataStore;

    // constructors legger til felt i rootStore objekt
    constructor()
    {
        // legg til stores objekter som ny instans
        this.dataStore = new DataStore(this);
    }
}

// eksporter rootStore som react context
// bruk useContext metode for tilgang
export const rootStoreContext = createContext(new RootStore());