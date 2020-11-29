import { makeObservable, observable, action } from "mobx";
import { ICv } from "../Models/ICv";
import { ILanguage } from "../Models/ILanguage";
import { ILetter } from "../Models/ILetter";
import { CvConstructor } from "../_Dev_Folder/CvConstructor";
import { LanguageConstructor } from "../_Dev_Folder/langConstructor";
import { LetterConstructor } from "../_Dev_Folder/letterConstructor";
import { ProjectConstructor } from "../_Dev_Folder/projectConstructor";
import { ToolsContructor } from "../_Dev_Folder/toolsConstructor";
import { PersonConstructor } from "../_Dev_Folder/personConstructor"
import { RootStore } from "./rootStore";
import { AppInfoConstructor } from "../_Dev_Folder/appInfoConstructor";


// --DEV, lokale objecter for testing og utvikling
const cv = new CvConstructor();
const letter = new LetterConstructor();
const lang = new LanguageConstructor();
const project = new ProjectConstructor();
const tools = new ToolsContructor();
const person = new PersonConstructor();
const appInfo = new AppInfoConstructor();

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

    /** inneholder prog.lang objekter */
    // --DEV => liste importert lokalt
    @observable
    languageData?: ILanguage[] = lang.exportObjArray();

    /** inneholder data om prosjekter */
    // --DEV => Lokalt importert
    @observable
    projectData? = project.exportProjectsArr();

    /** inneholder data om verktøy */
    // --DEV => Lokalt importert
    @observable
    toolsData? = tools.exportToolsArray();

    /** inneholder data om kontaktinformasjon og personlige trekk */
    // --DEV => Lokalt importert
    @observable
    personData? = person.exportPerson();

    /** inneholder informasjon om denne applikasjonen */
    // --DEV => Lokalt importert
    @observable
    appInfoData? = appInfo.exportAppInfo();

    /** Setter gyldig data bool som sann */
    @action 
    setDataIsValid = () => 
    {
        this.dataIsValid = true;
    }
}


