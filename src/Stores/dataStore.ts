import { action, makeObservable, observable } from "mobx";
import { ICv } from "../Models/CvModels";
import { ILetter } from "../Models/LetterModel";
import { CvConstructor } from "../_Dev_Folder/CvConstructor";
import { LetterConstructor } from "../_Dev_Folder/letterConstructor";
import { RootStore } from "./rootStore";

// --DEV, lokale objecter for testing og utvikling
const cv = new CvConstructor();
const letter = new LetterConstructor();

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

    /** Inneholder søknadsbrev */
    // --DEV Brev lokalkt importert
    @observable
    Letter?: ILetter = letter.exportLetterObject();

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


