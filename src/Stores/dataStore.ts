import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./rootStore";

/** Klasse for alle LoadScreen variabler */
// eksporter klass esom default
export default class DataStore {

    // felt for rootStore
    rootStore: RootStore;


    // constructor for LoadStore
    constructor(rootStore: RootStore)
    {
        // Legg til RootStore for samhandling med root
        this.rootStore = rootStore;

        // gjør observables til observables...
        makeObservable(this);
    }

    /** Sann dersom innhold er lastet inn */
    @observable 
    dataIsValid: boolean = false;

    /** Setter gyldig data bool som sann */
    @action 
    setDataIsValid = () => 
    {
        this.dataIsValid = true;
    }
}


