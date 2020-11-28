import { action, makeObservable, observable } from "mobx";
import { ICv } from "../Models/CvModels";
import { CvConstructor } from "../_Dev_Folder/CvConstructor";
import { RootStore } from "./rootStore";

const cv = new CvConstructor();

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
    // --DEV: Sett til falsk før produksjon
    @observable 
    dataIsValid: boolean = true;

    @observable
    Letter?: string;

    /** Inneholder CvObjekt */
    // --DEV CV LOKALT IMPORTERT!!!
    @observable
    CvData?: ICv = cv.exportCvJson();

    /** Setter gyldig data bool som sann */
    @action 
    setDataIsValid = () => 
    {
        this.dataIsValid = true;
    }
}


